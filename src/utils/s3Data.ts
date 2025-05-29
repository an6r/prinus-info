import { GetObjectCommand, S3ServiceException } from '@aws-sdk/client-s3';
import { Readable } from 'stream';

import { S3ClientSingleton } from '@/utils/s3Client';

interface S3JsonResponse<Type> {
    data: Type;
}

const s3 = S3ClientSingleton.getInstance();

/**
 * Converts a Readable stream to a string.
 *
 * @param {Readable} stream - The readable stream to convert
 * @returns {Promise<string>} A promise that resolves with the stream contents as a string
 * @throws {Error} If there's an error reading the stream
 */
function streamToString(stream: Readable): Promise<string> {
    return new Promise((resolve, reject) => {
        const chunks: Uint8Array[] = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.on('error', reject);
        stream.on('end', () =>
            resolve(Buffer.concat(chunks).toString('utf-8'))
        );
    });
}

/**
 * Fetches and parses a JSON file from an S3 bucket based on locale and page parameters.
 * The function expects the JSON file to be located at a specific path in the S3 bucket.
 *
 * @param {string} locale - The locale identifier
 * @param {string} page - The page identifier
 * @returns {Promise<S3JsonResponse>} A promise that resolves with the parsed JSON content
 * @throws {Error} If the S3 request fails, if the response body is empty, or if the JSON is invalid
 */
export async function fetchLocaleJsonFromS3<Type>(
    locale: string,
    page: string
): Promise<S3JsonResponse<Type>> {
    try {
        const command = new GetObjectCommand({
            Bucket: process.env.PRINUS_AWS_S3_BUCKET!,
            Key: `${locale}/${page}/page.json`,
        });

        const response = await s3.send(command);

        if (!response.Body) {
            throw new Error('Empty response body from S3');
        }

        const bodyContents = await streamToString(response.Body as Readable);
        return {
            data: JSON.parse(bodyContents),
        };
    } catch (error) {
        if (error instanceof S3ServiceException) {
            throw new Error(`S3 error: ${error.message}`);
        } else if (error instanceof SyntaxError) {
            throw new Error(`Invalid JSON format: ${error.message}`);
        }
        throw error;
    }
}

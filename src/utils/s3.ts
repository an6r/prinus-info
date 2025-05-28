import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';

const s3 = new S3Client({
    region: process.env.PRINUS_AWS_REGION,
    credentials: {
        accessKeyId: process.env.PRINUS_AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.PRINUS_AWS_SECRET_ACCESS_KEY!,
    },
});

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

export async function fetchLocaleJsonFromS3(locale: string, page: string) {
    const command = new GetObjectCommand({
        Bucket: process.env.PRINUS_AWS_S3_BUCKET!,
        Key: `${locale}/${page}/page.json`,
    });

    const response = await s3.send(command);
    const bodyContents = await streamToString(response.Body as Readable);
    return JSON.parse(bodyContents);
}

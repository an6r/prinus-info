import { S3Client } from '@aws-sdk/client-s3';

/**
 * Validates the presence of required environment variables for AWS S3 configuration.
 * @throws {Error} If any required environment variable is missing.
 */
function validateEnvironmentVariables() {
    const required = [
        'PRINUS_AWS_REGION',
        'PRINUS_AWS_ACCESS_KEY_ID',
        'PRINUS_AWS_SECRET_ACCESS_KEY',
        'PRINUS_AWS_S3_BUCKET',
    ];

    const missing = required.filter((key) => !process.env[key]);
    if (missing.length > 0) {
        throw new Error(
            `Missing required environment variables: ${missing.join(', ')}`
        );
    }
}

/**
 * Singleton class that manages a single instance of the AWS S3 client.
 * This ensures that only one S3 client is created and reused throughout the application.
 */
export class S3ClientSingleton {
    private static instance: S3Client;

    /**
     * Gets the singleton instance of the S3 client.
     * Creates a new instance if one doesn't exist, using environment variables for configuration.
     * @returns {S3Client} The S3 client instance
     * @throws {Error} If required environment variables are missing
     */
    public static getInstance(): S3Client {
        if (!S3ClientSingleton.instance) {
            validateEnvironmentVariables();
            S3ClientSingleton.instance = new S3Client({
                region: process.env.PRINUS_AWS_REGION,
                credentials: {
                    accessKeyId: process.env.PRINUS_AWS_ACCESS_KEY_ID!,
                    secretAccessKey: process.env.PRINUS_AWS_SECRET_ACCESS_KEY!,
                },
            });
        }
        return S3ClientSingleton.instance;
    }
}

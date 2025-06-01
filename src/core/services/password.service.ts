import * as crypto from 'crypto';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PasswordService {
    private readonly logger = new Logger(PasswordService.name);

    generateTemporaryPassword(length: number = 12): string {
        this.logger.log('Attempting to generate temporary password...');
        if (length <= 0) {
            const error = new Error('Password length must be a positive number.');
            this.logger.error(`Failed to generate temporary password. Error: Invalid length ${length}.`, error.stack);
            throw error;
        }
        // Each byte becomes 2 hex characters, so divide by 2 for byte length.
        // For Base64, desired length is (4 * n / 3) so n = 3 * length / 4.
        // Using a simpler approach: generate enough bytes and then slice.
        // Generate more bytes than needed to ensure enough unique characters after Base64URL encoding.
        const byteLength = Math.ceil(length * 0.75); // Approximation for Base64
        const buffer = crypto.randomBytes(byteLength);
        const password = buffer.toString('base64url').slice(0, length);
        this.logger.log(`Successfully generated temporary password with length ${length}.`);
        return password;
    }

    generateResetToken(length: number = 32): string {
        this.logger.log('Attempting to generate reset token...');
        if (length <= 0) {
            const error = new Error('Token length must be a positive number.');
            this.logger.error(`Failed to generate reset token. Error: Invalid length ${length}.`, error.stack);
            throw error;
        }
        // Generate more bytes than needed to ensure enough unique characters after Base64URL encoding.
        const byteLength = Math.ceil(length * 0.75); // Approximation for Base64
        const buffer = crypto.randomBytes(byteLength);
        const token = buffer.toString('base64url').slice(0, length);
        this.logger.log(`Successfully generated reset token with length ${length}.`);
        return token;
    }
}

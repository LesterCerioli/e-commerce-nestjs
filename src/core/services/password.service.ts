import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordService {
    generateTemporaryPassword(length: number = 12): string {
        if (length <= 0) {
            throw new Error('Password length must be a positive number.');
        }
        // Each byte becomes 2 hex characters, so divide by 2 for byte length.
        // For Base64, desired length is (4 * n / 3) so n = 3 * length / 4.
        // Using a simpler approach: generate enough bytes and then slice.
        // Generate more bytes than needed to ensure enough unique characters after Base64URL encoding.
        const byteLength = Math.ceil(length * 0.75); // Approximation for Base64
        const buffer = crypto.randomBytes(byteLength);
        return buffer.toString('base64url').slice(0, length);
    }

    generateResetToken(length: number = 32): string {
        if (length <= 0) {
            throw new Error('Token length must be a positive number.');
        }
        // Generate more bytes than needed to ensure enough unique characters after Base64URL encoding.
        const byteLength = Math.ceil(length * 0.75); // Approximation for Base64
        const buffer = crypto.randomBytes(byteLength);
        return buffer.toString('base64url').slice(0, length);
    }
}

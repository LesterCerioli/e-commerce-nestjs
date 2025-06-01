import { Test, TestingModule } from '@nestjs/testing';
import { PasswordService } from './password.service';
import { Logger } from '@nestjs/common';

describe('PasswordService', () => {
  let service: PasswordService;
  let logSpy: jest.SpyInstance;
  let errorSpy: jest.SpyInstance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordService],
    }).compile();

    service = module.get<PasswordService>(PasswordService);

    logSpy = jest.spyOn(Logger.prototype, 'log');
    errorSpy = jest.spyOn(Logger.prototype, 'error');
  });

  afterEach(() => {
    logSpy.mockRestore();
    errorSpy.mockRestore();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateTemporaryPassword', () => {
    it('should return a string of the default length (12) and log success', () => {
      const password = service.generateTemporaryPassword();
      expect(typeof password).toBe('string');
      expect(password.length).toBe(12);
      expect(logSpy).toHaveBeenCalledWith('Attempting to generate temporary password...');
      expect(logSpy).toHaveBeenCalledWith('Successfully generated temporary password with length 12.');
    });

    it('should return a string of a specified length and log success', () => {
      const length = 16;
      const password = service.generateTemporaryPassword(length);
      expect(password.length).toBe(length);
      expect(logSpy).toHaveBeenCalledWith('Attempting to generate temporary password...');
      expect(logSpy).toHaveBeenCalledWith(`Successfully generated temporary password with length ${length}.`);
    });

    it('should generate different passwords on subsequent calls', () => {
      const passwordA = service.generateTemporaryPassword();
      const passwordB = service.generateTemporaryPassword();
      expect(passwordA).not.toBe(passwordB);
    });

    it('should only contain URL-safe characters (base64url)', () => {
      const password = service.generateTemporaryPassword(100); // Test with a longer string
      // Regex for base64url: A-Z, a-z, 0-9, '-', '_'
      const base64UrlRegex = /^[A-Za-z0-9_-]+$/;
      expect(base64UrlRegex.test(password)).toBe(true);
    });

    it('should throw an error and log an error for non-positive length', () => {
      expect(() => service.generateTemporaryPassword(0)).toThrow('Password length must be a positive number.');
      expect(errorSpy).toHaveBeenCalledWith(
        'Failed to generate temporary password. Error: Invalid length 0.',
        expect.any(String) // For stack trace
      );
      expect(() => service.generateTemporaryPassword(-5)).toThrow('Password length must be a positive number.');
      expect(errorSpy).toHaveBeenCalledWith(
        'Failed to generate temporary password. Error: Invalid length -5.',
        expect.any(String) // For stack trace
      );
    });
  });

  describe('generateResetToken', () => {
    it('should return a string of the default length (32) and log success', () => {
      const token = service.generateResetToken();
      expect(typeof token).toBe('string');
      expect(token.length).toBe(32);
      expect(logSpy).toHaveBeenCalledWith('Attempting to generate reset token...');
      expect(logSpy).toHaveBeenCalledWith('Successfully generated reset token with length 32.');
    });

    it('should return a string of a specified length and log success', () => {
      const length = 64;
      const token = service.generateResetToken(length);
      expect(token.length).toBe(length);
      expect(logSpy).toHaveBeenCalledWith('Attempting to generate reset token...');
      expect(logSpy).toHaveBeenCalledWith(`Successfully generated reset token with length ${length}.`);
    });

    it('should generate different tokens on subsequent calls', () => {
      const tokenA = service.generateResetToken();
      const tokenB = service.generateResetToken();
      expect(tokenA).not.toBe(tokenB);
    });

    it('should only contain URL-safe characters (base64url)', () => {
      const token = service.generateResetToken(100); // Test with a longer string
      const base64UrlRegex = /^[A-Za-z0-9_-]+$/;
      expect(base64UrlRegex.test(token)).toBe(true);
    });

    it('should throw an error and log an error for non-positive length', () => {
      expect(() => service.generateResetToken(0)).toThrow('Token length must be a positive number.');
      expect(errorSpy).toHaveBeenCalledWith(
        'Failed to generate reset token. Error: Invalid length 0.',
        expect.any(String) // For stack trace
      );
      expect(() => service.generateResetToken(-5)).toThrow('Token length must be a positive number.');
      expect(errorSpy).toHaveBeenCalledWith(
        'Failed to generate reset token. Error: Invalid length -5.',
        expect.any(String) // For stack trace
      );
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PasswordService } from './password.service';

describe('PasswordService', () => {
  let service: PasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordService],
    }).compile();

    service = module.get<PasswordService>(PasswordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateTemporaryPassword', () => {
    it('should return a string of the default length (12)', () => {
      const password = service.generateTemporaryPassword();
      expect(typeof password).toBe('string');
      expect(password.length).toBe(12);
    });

    it('should return a string of a specified length', () => {
      const length = 16;
      const password = service.generateTemporaryPassword(length);
      expect(password.length).toBe(length);
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

    it('should throw an error for non-positive length', () => {
      expect(() => service.generateTemporaryPassword(0)).toThrow('Password length must be a positive number.');
      expect(() => service.generateTemporaryPassword(-5)).toThrow('Password length must be a positive number.');
    });
  });

  describe('generateResetToken', () => {
    it('should return a string of the default length (32)', () => {
      const token = service.generateResetToken();
      expect(typeof token).toBe('string');
      expect(token.length).toBe(32);
    });

    it('should return a string of a specified length', () => {
      const length = 64;
      const token = service.generateResetToken(length);
      expect(token.length).toBe(length);
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

    it('should throw an error for non-positive length', () => {
      expect(() => service.generateResetToken(0)).toThrow('Token length must be a positive number.');
      expect(() => service.generateResetToken(-5)).toThrow('Token length must be a positive number.');
    });
  });
});

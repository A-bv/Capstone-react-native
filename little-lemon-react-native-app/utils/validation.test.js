import { validateForm } from './validation';

describe('validateForm', () => {
  const validForm = {
    username: 'jane',
    email: 'jane@example.com',
    password: 'secret123',
  };

  it('returns no errors for a valid form', () => {
    expect(validateForm(validForm)).toEqual({});
  });

  it('requires a username', () => {
    const errors = validateForm({ ...validForm, username: '' });
    expect(errors.username).toBe('Username is required');
  });

  it('treats a whitespace-only username as missing', () => {
    const errors = validateForm({ ...validForm, username: '   ' });
    expect(errors.username).toBe('Username is required');
  });

  it('treats a whitespace-only email as missing', () => {
    const errors = validateForm({ ...validForm, email: '   ' });
    expect(errors.email).toBe('Email is required');
  });

  it('requires an email', () => {
    const errors = validateForm({ ...validForm, email: '' });
    expect(errors.email).toBe('Email is required');
  });

  it('rejects an invalid email', () => {
    const errors = validateForm({ ...validForm, email: 'not-an-email' });
    expect(errors.email).toBe('Email address is invalid');
  });

  it('requires a password', () => {
    const errors = validateForm({ ...validForm, password: '' });
    expect(errors.password).toBe('Password is required');
  });

  it('rejects a password shorter than 6 characters', () => {
    const errors = validateForm({ ...validForm, password: '123' });
    expect(errors.password).toBe('Password must be at least 6 characters');
  });
});

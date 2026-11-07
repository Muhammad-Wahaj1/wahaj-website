import { describe, expect, it } from 'vitest';

import { contactSchema } from './validation';

describe('contactSchema', () => {
  it('accepts valid contact data', () => {
    const result = contactSchema.safeParse({
      name: 'Muhammad Wahaj',
      email: 'hello@example.com',
      subject: 'Cloud infrastructure inquiry',
      message: 'I would like to discuss a cloud engineering opportunity.',
      website: ''
    });

    expect(result.success).toBe(true);
  });

  it('rejects invalid email values', () => {
    const result = contactSchema.safeParse({
      name: 'Muhammad Wahaj',
      email: 'not-an-email',
      subject: 'Cloud infrastructure inquiry',
      message: 'I would like to discuss a cloud engineering opportunity.',
      website: ''
    });

    expect(result.success).toBe(false);
  });
});

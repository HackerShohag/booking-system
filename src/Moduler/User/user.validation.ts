import { z } from 'zod';

const gender = ['male', 'female'] as const;
export const MemberValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    user: z.object({
      name: z.string(),
      gender: z.enum(gender),
      email: z.string().email(),
      contactNo: z.string()
    }),
  }),
});

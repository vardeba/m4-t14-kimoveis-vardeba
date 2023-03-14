import { z } from "zod";

const createUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().optional().default(false),
    password: z.string().min(4).max(20),
});

const updateUserSchema = createUserSchema.partial().omit({
    admin: true,
});

const returnUserSchema = createUserSchema
    .extend({
        id: z.number(),
        createdAt: z.date().or(z.string()),
        updatedAt: z.date().or(z.string()),
        deletedAt: z.date().or(z.string()).nullable(),
    })
    .omit({ password: true });

const returnMultipleUsersSchema = returnUserSchema.array();

export {
    createUserSchema,
    returnUserSchema,
    returnMultipleUsersSchema,
    updateUserSchema,
};

import zod from "zod";

export const signupBody = zod.object({
    email: zod.string().email().min(1).trim(),
    username: zod.string().min(1).toLowerCase(),
    password: zod.string().length(8).trim()
});

export const signInBody = zod.object({
    email: zod.string().email().min(1).trim(),
    password: zod.string().length(8).trim()
});
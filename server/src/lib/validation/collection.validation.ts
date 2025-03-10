import zod from "zod";

export const createCollectionBody = zod.object({
    name: zod.string().min(1).trim(),
    description: zod.string().trim(),
    isPublic: zod.boolean()
});
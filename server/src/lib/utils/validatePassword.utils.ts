import bcyrpt from "bcrypt"

export async function validatePassword(password: string, hashedPassword: string) {
    return await bcyrpt.compare(password, hashedPassword);
}
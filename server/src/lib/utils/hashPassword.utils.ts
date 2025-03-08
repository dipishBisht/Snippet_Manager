import bcyrpt from "bcrypt";


export async function hashPassword(password: string) {
    const salt = await bcyrpt.genSalt(10);

    const hashedPassword = await bcyrpt.hash(password, salt);

    return hashedPassword;
}
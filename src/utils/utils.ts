import * as bcrypt from 'bcryptjs';


export const hashPassword = async (password: string) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds); // Generate a salt
    const hashedPassword: string = await bcrypt.hash(password, salt); // Hash the password
    return hashedPassword; // Return the hashed password
}

export const comparePassword = async (password: string, hashed: string) => {
  return await bcrypt.compare(password, hashed);
}
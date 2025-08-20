import * as bcrypt from 'bcryptjs';


export const validateEmailandPass = (email: string, password: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
    return emailPattern.test(email) && passPattern.test(password);
}

export const hashPassword = async (password: string) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds); // Generate a salt
    const hashedPassword: string = await bcrypt.hash(password, salt); // Hash the password
    return hashedPassword; // Return the hashed password
}

export const comparePassword = async (password: string, hashed: string) => {
  return await bcrypt.compare(password, hashed);
}
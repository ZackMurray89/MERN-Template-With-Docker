import mongoose from 'mongoose';

export async function connectToDB(mongoUrl: string): Promise<void> {
  try {
    await mongoose.connect(mongoUrl);
    console.log(`Connected To MongoDB`);
  } catch (error) {
    console.error(`Error Connected To MongoDB: ${error}`);
    process.exit(1);
  }
}

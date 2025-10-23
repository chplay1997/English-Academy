import mongoose, { Schema, Document } from 'mongoose'

export interface IUserProfile extends Document {
  userId: string
  fullName: string
  role: string
  createdAt: Date
}

const UserProfileSchema = new Schema<IUserProfile>({
  userId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  role: { type: String, default: 'student' },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.UserProfile || mongoose.model<IUserProfile>('UserProfile', UserProfileSchema)

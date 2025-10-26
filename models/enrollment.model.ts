import mongoose from 'mongoose'

const EnrollmentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseSlug: { type: String, required: true },
    enrolledAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

const Enrollment = mongoose.models.Enrollment || mongoose.model('Enrollment', EnrollmentSchema)

export default Enrollment

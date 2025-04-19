import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: true,
    unique: true,
  },
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const Teacher = mongoose.model('Teacher', teacherSchema);
import mongoose from 'mongoose';

const course = new mongoose.Schema({
  courses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  lecturesAttended: {
    type: Number,
    default: 0,
  },
  pointer: {
    type: Number,
  },
});

const studentSchema = new mongoose.Schema({
  UID: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  courses: [course],
});

export const Student = mongoose.model(studentSchema);
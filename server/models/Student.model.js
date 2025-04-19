import mongoose from 'mongoose';

const course = new mongoose.Schema({
  UID: {
    type: Number,
    required: true,
    unique: true,
  },
  courses: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  lecturesAttended: {
    type: Number,
    default: 0,
  },
  lectures: {
    type: Number,
    default: 0,
  },
  marks: {
    type: Number,
  },
  pointer: {
    type: Number,
  },
  assisgnments: {
    type: Number,
    default: 0,
  },
  submissions: {
    type: Number,
    default: 0,
  },
});

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  courses: [course],
});

export const Student = mongoose.model(studentSchema);
import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      unique: true,
    },
    credits: {
      type: Number,
      required: true,
    },
    lectures:[
      {
        title: {
          type: String,
          required: true,
        },
        videoUrl: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          required: true,
        },
        attendance: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Attendance',
        },
      }
    ],
    materials: [
      {
        title: {
          type: String,
          required: true,
        },
        fileUrl: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      }
    ],
    assignments: [
      {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        dueDate: {
          type: Date,
          required: true,
        },
        submittedBy: [
          {
            studentId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Student',
            },
            submissionDate: {
              type: Date,
              default: Date.now,
            },
          }
        ],
      }
    ],
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
  },
  {
    timestamps: true,
  }
);

export const Course = mongoose.model('Course', courseSchema);
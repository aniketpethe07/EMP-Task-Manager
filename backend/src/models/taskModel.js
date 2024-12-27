const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title for the task"],
    },
    date: {
      type: Date,
      required: [true, "Please add a date for the task"],
    },
    category: {
      type: String,
      required: [true, "Please add a category for the task"],
    },
    description: {
      type: String,
      required: [true, "Please add a description for the task"],
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model (Employee)
      required: [true, "Please assign the task to an employee"],
    },
    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model (Admin)
      required: [true, "Please specify the admin assigning the task"],
    },
  }
);

module.exports = mongoose.model("Task", taskSchema);

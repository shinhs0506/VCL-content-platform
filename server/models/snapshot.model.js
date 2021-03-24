const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const snapshotSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Snapshot = mongoose.model("Snapshot", snapshotSchema);
module.exports = Snapshot;

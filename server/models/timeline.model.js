const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const timelineSchema = new Schema(
  {
    snapshots: [
      {
        snapshotID: {
          type: String,
          required: true,
        },
        date: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Timeline = mongoose.model("Timeline", timelineSchema);
module.exports = Timeline;

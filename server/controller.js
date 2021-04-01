let Snapshot = require("./models/snapshot.model");

/**
 * 
 * @param Expected request body:
          {
            title: String,
            description: String,
            imageURL: String,
            date: String,
            tags: Array<String>,
            contributors: Array<String>,
          }
 *
 * @param Responds with created object.
 */
exports.createSnapshot = async (req, res) => {
  const newSnapshot = new Snapshot({
    title: req.body.title,
    description: req.body.description,
    imageURL: req.body.imageURL,
    date: req.body.date,
    tags: req.body.tags,
    contributors: req.body.contributors,
  });

  newSnapshot
    .save()
    .then((data) => {
      res.status(200).json({
        message: "Successfully created timeline snapshot.",
        data: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error saving timeline snapshot to MongoDB",
        error: err,
      });
    });
};

/**
 * @param Expected request body: None
 * @param Responds with all timeline objects found in database
 */
exports.getAllSnapshots = async (req, res) => {
  Snapshot.find()
  .exec()
  .then((data) => {
    res.status(200).json({
      message: "Successfully retrieved all timeline snapshots",
      data: data
    });
  })
  .catch((err) => {
    res.status(400).json({
      message: "Error getting all timeline snapshots from MongoDB",
      error: err
    });
  });

}

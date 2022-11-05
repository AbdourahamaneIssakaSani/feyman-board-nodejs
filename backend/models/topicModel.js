const mongoose = require("mongoose");

/**
 * A block is a piece of text of the topic cut by a delimiter
 */
const blockSchema = new mongoose.Schema({
  content: String,
  category: {
    type: String,
    enum: ["UNDERSTOOD", "SOMEWHAT UNDERSTOOD", "NOT CLEAR", "WHAT RUBBISH"],
  },
});

/**
 * A topic is a text with many blocks, separated by delimiters.
 */
const topicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: [true, "topic already exits"],
    },
    blocks: [blockSchema],
    owner: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

/**
 * Percentage of each topic as virtual property (not saved in the db), but available in any find response.
 */
topicSchema.virtual("percentage").get(function () {
  const rubbishCount = this.blocks.filter(
    (b) => b.category == "RUBBISH"
  ).length;

  const someUndertoodCount =
    this.blocks.filter((b) => b.category == "SOMEWHAT UNDERSTOOD").length * 2;

  const notClearCount =
    this.blocks.filter((b) => b.category == "SOMEWHAT UNDERSTOOD").length * 3;

  const understoodCount =
    this.blocks.filter((b) => b.category == "SOMEWHAT UNDERSTOOD").length * 4;

  return (
    ((rubbishCount + someUndertoodCount + notClearCount + understoodCount) /
      (this.blocks.length * 4)) *
    100
  );
});

const Topic = mongoose.model("Topics", topicSchema);

module.exports = Topic;

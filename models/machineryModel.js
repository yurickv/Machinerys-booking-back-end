const { Schema, model } = require("mongoose");
const { mongooseError } = require("../helpers");
const Joi = require("joi");

const machinerySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for machine"],
    },
    type: {
      type: String,
      required: [true, "Set type for machine"],
    },
    number: {
      type: String,
      required: [true, "Set number tel for contacting"],
    },
    contact: {
      type: String,
      required: [true, "Set contact person for machine"],
    },
    price: {
      type: String,
      required: [true, "Set price for machine"],
    },
    location: {
      type: String,
      required: [true, "Set location for machine"],
    },
    foto_url: { type: String, required: [true, "Set foto_url for machine"] },
    description: {
      type: String,
    },
    status: {
      type: String,
      default: "Available",
    },
  },
  { versionKey: false, timestamps: true }
);

machinerySchema.post("save", mongooseError);

const Machine = model("machinerys", machinerySchema);
module.exports = Machine;

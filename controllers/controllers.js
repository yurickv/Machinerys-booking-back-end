const Machine = require("../models/machineryModel");

const { HttpError, ctrlWrapper, analyzeBikeData } = require("../helpers");

const getAll = async (req, res) => {
  const result = await Machine.find();
  const quantity = analyzeBikeData(result);
  console.log(quantity);
  const responce = { data: result, statistic: quantity };
  res.status(200).json(responce);
};

const getById = async (req, res) => {
  const { id } = req.params;
  // const result = await Contact.findOne({ _id: id });
  const result = await Machine.findById(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }

  res.status(200).json(result);
};

const add = async (req, res) => {
  const response = await Machine.create(req.body);
  return res.status(201).json(response);
};

const del = async (req, res) => {
  const { id } = req.params;
  const result = await Machine.findByIdAndDelete(id);
  if (!result) throw HttpError(404, "Not Found");

  res.status(200).json({ message: "contact deleted" });
};

const change = async (req, res) => {
  const { id } = req.params;
  const result = await Machine.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) throw HttpError(404, "Not Found");

  res.status(200).json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  del: ctrlWrapper(del),
  change: ctrlWrapper(change),
};

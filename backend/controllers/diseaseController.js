const Disease = require("../models/diseaseModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");

//create a new disease --> Admin
exports.createDisease = catchAsyncErrors(async (req, res, next) => {
    const newDisease = await Disease.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        disease: newDisease,
      },
    });
});

//get diseases
exports.getDiseases = catchAsyncErrors(async (req, res, next) => {
    const apiFeature = new ApiFeatures(Disease.find(), req.query).search();
    const diseases = await apiFeature.query;
    const disease = diseases[0];

    res.status(200).json({
      success: true,
      disease,
    });
});

//update disease data --> Admin
exports.updateDisease = catchAsyncErrors(async (req, res, next) => {
  let disease = await Disease.findById(req.params.id);
  if (!disease) {
    return next(new ErrorHandler("Disease not found", 404));
  }

  disease = await Disease.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
      disease,
  });
});

//delete disease
exports.deleteDisease = catchAsyncErrors(async (req, res, next) => {
  const disease = await Disease.findById(req.params.id);
  if (!disease) {
    return next(new ErrorHandler("Disease not found", 404));
  }

  await Disease.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    message: "Disease deleted successfully",
  });
});

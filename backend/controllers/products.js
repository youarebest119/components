const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Product = require("../models/product");
const { LAZY_TIME, PRODUCT_PER_PAGE } = require("../utils/constants");
const ErrorHandler = require("../utils/errorHandlers");
const { sendResponse } = require("../utils/sendResponse");

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    let {
        type,
        name,
        description,
        tags,
        codes,
    } = req.body;

    let existedProduct = await Product.find({
        name,
        type,
    });
    if (existedProduct.length > 0) {
        return next(new ErrorHandler("Already Exists", 409));
    }
    let product = new Product({
        type: type.toLocaleLowerCase().split(" ").join("-"),
        name,
        description,
        tags,
        codes,
    });
    await product.save();
    const newProduct = JSON.parse(JSON.stringify(product));
    sendResponse(res, 200, "Product created", { data: newProduct, })
});

exports.getAllProducts = catchAsyncErrors(async (req, res) => {
    const query = {
        // author: req.body.author,
    }
    const { search } = req.query;
    if (search) {
        query.name = { $regex: new RegExp(search, "i") }
    }
    const { description } = req.query;
    if (description) {
        query.description = { $regex: new RegExp(description, "i") }
    }
    const { type } = req.query;
    if (type) {
        query.type = { $regex: new RegExp(type, "i") }
    }

    let { tags } = req.query;
    if (tags) {
        tags = tags.split(/[ ,]+/);
        if (tags[tags.length - 1] === "") {
            tags.pop();
        }
        query.tags = {
            $all: tags,
        };
    };

    const { page } = req.query;
    const { sort } = req.query;

    const products = await Product.find(query).limit(PRODUCT_PER_PAGE).skip(((page || 1) - 1) * PRODUCT_PER_PAGE).sort({
        updatedAt: sort !== "asc" ? -1 : 1
    });
    const fetched = await Product.find(query);
    const total = await Product.find({
        // author: req.body.author,
    })
    sendResponse(res, 200, "product fetched", {
        total: fetched.length,
        fetched: products.length,
        dataPerPage: PRODUCT_PER_PAGE,
        data: products,
        message: "product fetched",
    })
})

exports.getSingleProduct = catchAsyncErrors(async (req, res) => {
    if (req.params.id === "create") {
        return res.status(404).json({
            message: 'Ohh you are lost, read the API documentation to find your way back home :)',
            success: false,
        })
    }
    const query = {
        _id: req.params.id,
    }
    const product = await Product.findOne(query);
    sendResponse(res, 200, "Product fetched", { data: product })
})
exports.deleteProduct = catchAsyncErrors(async (req, res) => {
    const query = {
        _id: req.params.id,
    }
    const product = await Product.deleteOne(query)
    res.status(200).json({
        success: true,
        data: product,
        message: "product deleted",
    })
})
exports.updateProduct = catchAsyncErrors(async (req, res) => {
    const query = {
        _id: req.params.id
    }
    const product = await Product.updateOne(query, { ...req.body })
    res.status(200).json({
        success: true,
        data: product,
        message: "product updated",
    })
})

exports.getCategories = catchAsyncErrors(async (req, res) => {
    const product = await Product.aggregate([
        // {
        //     $match: {
        //         author: req.body.author,
        //     }
        // },
        {
            $group: {
                _id: "$type",
            }
        },
        {
            $sort: {
                _id: 1,
            },
        }
    ]);
    sendResponse(res, 200, "product categories fetched", { data: product })
})
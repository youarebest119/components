const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Product = require("../models/product");
const { LAZY_TIME, PRODUCT_PER_PAGE } = require("../utils/constants");
const ErrorHandler = require("../utils/errorHandlers");
const { sendResponse } = require("../utils/sendResponse");

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    let { type, name, description, tags, codes, show, image } = req.body;

    // Normalize type and name for case-insensitivity
    const normalizedType = type.toLocaleLowerCase().split(" ").join("-");
    const normalizedName = name.toLocaleLowerCase().trim();

    // Check if a product with the same name and type exists
    let existedProduct = await Product.findOne({
        name: normalizedName,
        type: normalizedType,
    });

    if (existedProduct) {
        return next(new ErrorHandler("Product with the same name and type already exists", 409));
    }

    // Create and save the new product
    let product = new Product({
        type: normalizedType,
        name: normalizedName,
        description,
        tags,
        show,
        codes,
        image,
    });
    await product.save();

    sendResponse(res, 200, "Product created successfully", { data: product });
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
    // res.status(200).json({
    //     success: true,
    //     data: product,
    //     message: "product deleted",
    // })
    sendResponse(res, 200, "product deleted", {
        data: product
    })
})
exports.updateProduct = catchAsyncErrors(async (req, res) => {
    const query = {
        _id: req.params.id
    }
    const product = await Product.updateOne(query, { ...req.body })
    // res.status(200).json({
    //     success: true,
    //     data: product,
    //     message: "product updated",
    // })
    sendResponse(res, 200, "product updated", {
        data: product
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

exports.addCodes = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params; // Product ID
    const { codes } = req.body; // Array of subitem details

    if (!Array.isArray(codes) || codes.length === 0) {
        return next(new ErrorHandler("Invalid input: 'codes' should be a non-empty array.", 400));
    }

    const product = await Product.findById(id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    // Add multiple codes to the product
    product.codes.push(...codes);
    await product.save();

    sendResponse(res, 200, "Subitems added successfully", { data: product });
});


exports.addCode = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params; // Product ID
    const { code } = req.body; // Subitem details

    const product = await Product.findById(id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    product.codes.push(code);
    await product.save();

    sendResponse(res, 200, "Subitem added successfully", { data: product });
});

exports.updateCode = catchAsyncErrors(async (req, res, next) => {
    const { id, codeId } = req.params; // Product ID and Subitem ID
    const { code } = req.body; // Updated subitem details

    const product = await Product.findById(id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    const codeIndex = product.codes.findIndex(item => item._id.toString() === codeId);
    if (codeIndex === -1) {
        return next(new ErrorHandler("Subitem not found", 404));
    }

    product.codes[codeIndex] = { ...product.codes[codeIndex]._doc, ...code };
    await product.save();

    sendResponse(res, 200, "Subitem updated successfully", { data: product });
});

exports.deleteCode = catchAsyncErrors(async (req, res, next) => {
    const { id, codeId } = req.params; // Product ID and Subitem ID

    const product = await Product.findById(id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    product.codes = product.codes.filter(item => item._id.toString() !== codeId);
    await product.save();

    sendResponse(res, 200, "Subitem deleted successfully", { data: product });
});

exports.getCodes = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params; // Product ID

    const product = await Product.findById(id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    sendResponse(res, 200, "Subitems fetched successfully", { data: product.codes });
});

const moment = require("moment");
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    tags: {
        type: [String],
        validate: v => Array.isArray(v) && v.length > 0,
    },
    show: {
        type: Boolean,
        required: true,
        default: true,
    },
    codes: [
        {
            name: {
                type: String,
                required: true,
            },
            date: {
                type: String,
                default: moment(new Date()).format("MMM DD, YYYY"),
            },
            fileName: {
                type: String,
                required: true,
            },
            typescriptFileName: {
                type: String,
            },
            description: {
                type: String,
            },
            typescript: {
                type: String,
            },
            code: {
                type: String,
                required: true,
            },
        },
    ],
}, {
    timestamps: true,
})

module.exports = mongoose.model("Products", productSchema);
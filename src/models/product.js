'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    
    categoria: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    
    active :{
        type: Boolean, 
        required:true, 
        default:true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product',schema );
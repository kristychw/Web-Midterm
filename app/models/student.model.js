const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: String,
    age: Number,
    major: String
}, {
    timestamps: {
        createdAt: 'createdDate',
        updatedAt: 'updatedDate'
    }
});

module.exports = mongoose.model('Student', StudentSchema);
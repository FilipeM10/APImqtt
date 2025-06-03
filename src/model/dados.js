const mongoose = require('../config/database');

const DadosSchema = new mongoose.Schema({
    dispositivo: {
        type: String,
        required: true,
        allowNull: false
    },
    valor: {
        type: Number,
        required: true,
        allowNull: false
    },
    timestamp: {
        type: Date,
        allowNull: false
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Dados', DadosSchema)

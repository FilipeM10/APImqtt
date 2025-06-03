const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
.then(() => console.log('✅ Conectado ao MongoDB'))
.catch((err) => console.log('❌ Erro na conexão:', err));

module.exports = mongoose;

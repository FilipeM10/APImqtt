const mongoose = require('./config/database');
const index = require('./index');
const PORT = 3000;
const iniciarMqtt = require('./mqtt/subscraber');

mongoose.connection.once('open', () => {
    console.log('Conectado ao MongoDB com sucesso');
    iniciarMqtt.client.on('mensage', (topic, mensage) => {
        console.log(`Mensagem recebida no topico ${topic}:${mensage.toString()}`)
        index.listen(PORT, () => {
            console.log(`Seu servidor está rodando na porta: 127.0.0.1:${PORT}/`);
        });
    })
})
mongoose.connection.on('error', (err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
});


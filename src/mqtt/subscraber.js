// Importa a biblioteca mqtt
const mqtt = require('mqtt');

// Configurações de conexão
const brokerUrl = 'mqtt://test.mosquitto.org';
const topic = 'filipe/servidor';

// Conectando ao broker
const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
  console.log('Conectado ao broker MQTT!');

  // Se inscreve no tópico
  client.subscribe(topic, (err) => {
    if (!err) {
      console.log(`Inscrito no tópico: ${topic}`);

      // Publica uma mensagem
      client.publish(topic, 'Olá do Node.js via MQTT!');
    } else {
      console.error('Erro ao se inscrever:', err);
    }
  });
});

// Quando uma mensagem chega
client.on('message', (receivedTopic, message) => {
  console.log(`Mensagem recebida no tópico ${receivedTopic}: ${message.toString()}`);
});

// Em caso de erro
client.on('error', (err) => {
  console.error('Erro de conexão:', err);
});

const iniciarMqtt = {
  client,
  topic
}

module.exports = iniciarMqtt
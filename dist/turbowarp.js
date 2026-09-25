class JohnnyFiveExtension {
  getInfo() {
    return {
      id: 'johnnyfive',
      name: 'Johnny-Five',
      color1: '#E29D38',
      blocks: [
        {
          opcode: 'connectToSerial',
          blockType: Scratch.BlockType.COMMAND,
          text: 'conectar al puerto serie'
        }
      ]
    };
  }

  connectToSerial() {
    window.loadBoard();

    // Código de Johnny-Five una vez enlazado el puerto
    window.five.events.on('boardReady', () => {
      console.log("¡Placa vinculada de forma exitosa!");
    });
  }
}

Scratch.extensions.register(new JohnnyFiveExtension());

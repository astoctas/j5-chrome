// Requerimos el archivo original de Johnny-Five para que se incluya en el bundle
require('./j5.js');

class JohnnyFiveExtension {
  constructor() {
    this.components = [];
  }

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
        },
        {
          opcode: 'blink',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Blink'
        }
      ]
    };
  }

  connectToSerial() {
    if (window.five && window.five.board) {
      console.log("Placa ya conectada. Limpiando componentes...");
      this.components.forEach(comp => {
        if (comp && typeof comp.stop === 'function') comp.stop();
        if (comp && typeof comp.off === 'function') comp.off();
      });
      this.components = [];
      return;
    }

    window.loadBoard();

    // Código de Johnny-Five una vez enlazado el puerto
    window.five.events.on('boardReady', () => {
      console.log("¡Placa vinculada de forma exitosa!");
    });
  }

  blink() {
    const five = window.five;
    const led = new five.Led(13);
    this.components.push(led);
    led.blink(500);
  }
}

// Scratch.extensions is provided by TurboWarp environment
if (typeof Scratch !== 'undefined' && Scratch.extensions) {
  Scratch.extensions.register(new JohnnyFiveExtension());
}

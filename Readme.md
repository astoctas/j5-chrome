# j5

The full [Johnny-Five](http://johnny-five.io/) nodebots library for chrome!

Works directly in a web page via webSerial or webUSB. No servers required.

A fork from https://github.com/monteslu/p5.j5

## getting started

include j5 in your web page:

```html
<head>
  <script src="/dist/j5.min.js"></script>
</head>
```

add some javascript:

```javascript

    boton.addEventListener('click', () => {
      console.log("Abriendo selector de puertos del navegador...");
      window.loadBoard();
    });

    // Código de Johnny-Five una vez enlazado el puerto
    window.five.events.on('boardReady', () => {
      console.log("¡Placa vinculada de forma exitosa!");

      const led = new five.Led(13);
      led.blink(500);
    });


```


## supported hardware

Currently j5 supports any arduino with the firmata sketch.

If using webUSB, you'll need the [webUSB firmata sketch](https://github.com/monteslu/webusb-serial/tree/master/example) loaded onto your board.

## running demos

from this directory run:
* `npm install`
* `npm run demos`
* point browser to [http://localhost:5000/demos](http://localhost:5000/demos)

## running on the p5 web editor

Just plug in a microcontroller with firmata on it and go here:

[https://editor.p5js.org/monteslu/sketches/QbhToqDil](https://editor.p5js.org/monteslu/sketches/QbhToqDil)


## Bonus features

Johnny-Five related libraries bundled in:

* j5.[nodeLed](https://github.com/louiemontes/node-led)

* j5.[nodePixel](https://github.com/ajfisher/node-pixel)

* j5.[oledJS](https://github.com/noopkat/oled-js) ( including j5.[oledJS.oledFont5x7](https://github.com/noopkat/oled-font-5x7) )

## TODO

Currently webUSB and webSerial are working great, but would be nice to have web bluetooth support via [ble-io](https://github.com/monteslu/ble-io)
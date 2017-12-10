var five = require("johnny-five");
var board = new five.Board();

var iot = {};

board.on("ready", function() {
    iot.status = "ready";
    iot.led = new five.Led(13);
});


iot.startBlink = function() {
    console.log("startBlink called");
    iot.led.blink(500);
};

iot.stopBlink = function() {
    console.log("stopBlink called");
    iot.led.stop();
};

iot.ledON = function() {
    console.log("ledON called");
    iot.led.on();
};

iot.ledOFF = function() {
    console.log("ledON called");
    iot.led.off();
};

module.exports = iot;
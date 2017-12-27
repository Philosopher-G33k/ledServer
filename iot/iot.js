var five = require("johnny-five");
var board = new five.Board();

var iot = {};

board.on("ready", function() {
    iot.status = "ready";
    iot.led = new five.Led(13);
    iot.relays = new five.Relays([6]);
    iot.currentRelay = iot.relays[0];
    iot.currentRelay.off();
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

iot.relayON = function() {
    console.log("relayON called");
    // Relay on
    iot.currentRelay.open();
};

iot.relayOFF = function() {
    console.log("relayOFF called");
    // Relay off
    iot.currentRelay.close();
};



module.exports = iot;
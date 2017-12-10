var express = require('express');
var router = express.Router();
var commands = require("../misc/commands");
var iot = require("../iot/iot");

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    if (req.body.command === commands.start_blink) {
        iot.startBlink();
        return res.json({ "status": "led started blinking" });
    } else if (req.body.command === commands.stop_blink) {
        iot.stopBlink();
        return res.json({ "status": "led stopped blinking" });
    } else if (req.body.command === commands.led_on) {
        iot.ledON();
        return res.json({ "status": "led switched on" });
    } else if (req.body.command === commands.led_off) {
        iot.ledOFF();
        return res.json({ "status": "led switched off" });
    }
    res.json({ title: 'Express' });
});

module.exports = router;
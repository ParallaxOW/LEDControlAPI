var express = require("express");
var gpio = require("onoff").Gpio;

const led = new gpio(5, "out");

var app = express();

app.get("/on", (req, res, next) => { res.json([`${ledOn()}`]); });

app.get("/off", (req, res, next) => { res.json([`${ledOff()}`]); });

app.get("/toggle", (req, res, next) => { res.json(`${toggle()}`); });

app.listen(8080, () => {
    console.log("Server running on port 8080");
});

function ledOn(){
    if(led.readSync() === 0){
        led.writeSync(1);
        return "led is on!!";
    }else{
        return "led is already on! call /off to turn off."
    }
}

function ledOff(){
    if(led.readSync() === 1){
        led.writeSync(0);
        return "led is off!!";
    }else{
        return "led is already off! call /on to turn on."
    }
}

function toggle(){
    if(led.readSync() === 0){
        led.writeSync(1);
        return "light is now toggled on!";
    }else{
        led.writeSync(0);
        return "light is now toggled off!";
    }
}

function exitHandler(){
    console.log("cleaning up...");
    console.log("deallocating leds...");
    led.unexport();
    console.log("all done!  buh-bye!");
    process.exit(0);
}
  
process.on('SIGINT', exitHandler.bind(null, null));
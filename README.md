#### LED Control API for node.js

This is a simple nodejs api based on express that will toggle an LED on PIN 5 accordingly.

+ The API is exposed via port 8080
+ http://<url>:8080/<on|off|toggle>
    + on -> turns on and returns message, if already on, returns msg stating such   
    + off -> turns off and returns message, if already on, returns msg stating such
    + toggle -> toggles led and returns message of on or off, depending on action taken.
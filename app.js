/**
 * Author: Sudipto Chowdhury
 * Email: dip.chy93@gmail.com
 * Software Engineer, SELISE
 */

function fireBluetooth () {
    var display = document.getElementById('info');
    display.innerHTML = 'Requesting Bluetooth Device...';
    navigator.bluetooth.requestDevice({
            acceptAllDevices: true
        }).then(device => {
            display.innerHTML = 'Connecting to GATT Server...';
            return device.gatt.connect();
        }).then(server => {
            display.innerHTML = 'Getting Battery Service...';
            return server.getPrimaryService('battery_service');
         }).then(service => {
             display.innerHTML = 'Getting Battery Level Characteristic...';
            return service.getCharacteristic('battery_level');
        }).then(characteristic => {
            display.innerHTML = 'Reading Battery Level...';
            return characteristic.readValue();
        }).then(value => {
            let batteryLevel = value.getUint8(0);
            display.innerHTML = "Battery Level is" + batteryLevel + "%";
        }).catch(error => {
            display.innerHTML = 'Argh! ' + error
        });
}

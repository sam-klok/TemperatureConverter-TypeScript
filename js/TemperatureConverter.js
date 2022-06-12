"use strict";
function temperatureConverter(id, valNum) {
    var n = parseFloat(valNum);
    if (id === "inputFahrenheit") {
        // Convert from Fahrenheit to Celsius	℃=(℉-32)/1.8
        var t = (n - 32) / 1.8;
        document.getElementById("inputCelsius").value = t.toString();
    }
    else {
        //Convert from Celsius to Fahrenheit	℉=(℃*1.8)+32
        var t = (n * 1.8) + 32;
        document.getElementById("inputFahrenheit").value = t.toString();
    }
}
//# sourceMappingURL=TemperatureConverter.js.map
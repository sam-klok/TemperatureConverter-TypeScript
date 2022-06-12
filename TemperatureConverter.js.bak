function temperatureConverter(id,valNum) {
    valNum = parseFloat(valNum);

    if (id === 'inputFahrenheit'){
        // Convert from Fahrenheit to Celsius	℃=(℉-32)/1.8
        document.getElementById("inputCelsius").value=(valNum-32)/1.8;
    }
    else{
        //Convert from Celsius to Fahrenheit	℉=(℃*1.8)+32
        document.getElementById("inputFahrenheit").value=(valNum*1.8)+32;
    }
}

// old "one way" version
// function temperatureConverter(valNum) {
//     valNum = parseFloat(valNum);
//     document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
// }
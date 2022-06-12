function temperatureConverter(id: string,valNum: string) {
    let n: number = parseFloat(valNum);

    if (id === "inputFahrenheit"){
        // Convert from Fahrenheit to Celsius	℃=(℉-32)/1.8
        let t: number = (n-32)/1.8;
        (document.getElementById("inputCelsius")! as HTMLInputElement).value = t.toString();
    }
    else{
        //Convert from Celsius to Fahrenheit	℉=(℃*1.8)+32
        let t: number = (n*1.8)+32;
        (document.getElementById("inputFahrenheit")! as HTMLInputElement).value = t.toString();
    }
}


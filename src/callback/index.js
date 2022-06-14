// En estos ejemplos usamos funciones de primer orden ya que reciben como parametro a otras funciones, y esta funcion que recibe es una callback

function sum(a, b) {
    return a + b;    
}

function calc(a, b, callback) {
    return callback(a, b);
}

console.log(calc(8, 2, sum));

function date(callback) {
    console.log(new Date); 
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000)   
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);
// Ejercicio 1 --------------------------------------------------------------- //
    console.log("HELLO ES6");
// ---------------------------------------------------------------------------- //


// Ejercicio 2 --------------------------------------------------------------- //
var nombre = process.argv[2];
var salida = `Hola, ${nombre}!
Tu nombre en minusculas es "${nombre.toLowerCase()}".`

console.log(salida);
// ---------------------------------------------------------------------------- //


// Ejercicio 3 --------------------------------------------------------------- //
var inputs = process.argv.splice(2);
var transformar = inputs.map((input) => input[0]).reduce((x, y) => x + y);

console.log(`[${inputs}] pasa a ser "${transformar}"`);
// ---------------------------------------------------------------------------- //


// Ejercicio 4 --------------------------------------------------------------- //
var foot = {
    kick: function () {
        this.yelp = "Ay!";
        setImmediate(() => console.log(this.yelp));
    }
}
foot.kick();
// ---------------------------------------------------------------------------- //


// Ejercicio 5 --------------------------------------------------------------- //
let user_array = process.argv.slice(2);
let user_object = {};
[, user_object.username, user_object.email] = user_array;

console.log(user_object);
// ---------------------------------------------------------------------------- //


// Ejercicio 6 --------------------------------------------------------------- //
let input = process.argv.slice(2);
console.log(`El minimo de [${input}] es ${Math.min(...input)}`);
// ---------------------------------------------------------------------------- //


// Ejercicio 7 --------------------------------------------------------------- //
module.exports = function(...args) {
    let sum = args.reduce((total, x) => total + x);
    return sum / args.length;
};
// ---------------------------------------------------------------------------- //


// Ejercicio 8 --------------------------------------------------------------- //
module.exports = function midpoint(primero = 0, ultimo = 1) {
    return (primero + ultimo) / 2;
};
// ---------------------------------------------------------------------------- //


// Ejercicio 9 --------------------------------------------------------------- //
module.exports = (string, times = string.length) => string + "!".repeat(times);
// ---------------------------------------------------------------------------- //


// Ejercicio 10 --------------------------------------------------------------- //

function reemplazohtml(objetos, ...subtituidos) {
    var result = objetos[0];
    for (var i = 0; i < subtituidos.length; ++i) {
        result += escape(subtituidos[i]) + objetos[i + 1];
    }

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}

console.log(reemplazohtml`<b>${process.argv[2]} es</b>: "${process.argv[3]}"`);
// ---------------------------------------------------------------------------- //
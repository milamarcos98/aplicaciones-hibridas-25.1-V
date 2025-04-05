// common js

// let sumar = require('./main.js')

// console.log(sumar(3,4))

// ------

// let {sumar, restar} = require('./main.js')
// console.log(restar(4,2))
// console.log(sumar(4,2))


// es modules - esm

// import math from "./main.js"

// console.log(math)

// MODULOS NATIVOS

// const os = require("os")
// import os from "os";

// console.log(os.arch())
// console.log(os.platform())
// console.log(os.freemem() / (1024 * 1024), "MB")
// console.log(os.totalmem())
// console.log(os.cpus())
// console.log(os.uptime())
// console.log(os.hostname())
// console.log(os.homedir())
// console.log(os.networkInterfaces())

// import path from "path"

// // / 
// // sep

// console.log(path.join('user', '//local','../bin'));
// console.log(path.resolve('archivo.txt'));
// console.log(path.extname('archivo.txt'));
// console.log(path.basename('carpeta/archivo.txt'));
// console.log(path.basename('carpeta/archivo.txt', path.extname('archivo.txt')));
// console.log(path.dirname('carpeta/otra/archivo.txt'));
// console.log(path.parse('carpeta/otra/archivo.txt'));
// console.log(path.normalize('user//local/bin/../otro/archivo.txt'));

// let ruta = {
//     dir: 'carpeta/otra',
//     base: 'archivo.txt'
// }

// console.log(path.format(ruta))
// console.log(path.sep)

// /


// url
import {URL} from "url"

const myURL = new URL("https://www.ejemplo.com:8080/carpeta/subcarpeta?nombre=usuario&orden=asc#seccion1")

console.log(myURL.protocol)
console.log(myURL.hostname)
console.log(myURL.port)
console.log(myURL.pathname)
console.log(myURL.search)
console.log(myURL.searchParams.get('nombre'))
console.log(myURL.searchParams.get('orden'))
myURL.searchParams.forEach((valor, nombre) => {
    console.log(`${nombre}: ${valor}`)
})
console.log(myURL.searchParams)
console.log(myURL.hash)
console.log(myURL.toString())

const baseUrl = "https://www.ejemplo.com/carpeta"
const relativeUrl = "subcarpeta/archivo.html"
console.log(new URL(relativeUrl, baseUrl))
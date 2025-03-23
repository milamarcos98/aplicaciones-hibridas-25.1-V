// console.log("asincronia");

// ----------------------------- CALLBACKS -----------------------------

// setTimeout(callback, tiempo)

// setTimeout(() => {
    
// }, timeout);


// function fetchData(callback){
//     setTimeout(() => {
//         const data = "datos obtenidos";
//         callback(data)
//     }, 1000);
// }

// function processData(data){
//     console.log("procesando..." + data)
// }

// fetchData(processData)


//  ----------------------------- PROMESAS -----------------------------

// const promesa = new Promise((resolve, reject) => {
//     console.log("pendiente")
// })

// const promesa = new Promise((resolve, reject) => {
//     resolve("operacion exitosa")
// })

// promesa.then(resultado => {
//     console.log(resultado)
// })


// const promesa = new Promise((resolve, reject) => {
//     reject("operacion fallida")
// })

// promesa.catch(error => {
//     console.log(error)
// })

// const promesa = new Promise((resolve, reject) => {
//     const exito = true;
//     if(exito){
//         resolve("operacion exitosa")
//     }else{
//         reject("operacion fallida")
//     }
// })

// promesa
// .then(resultado => {
//     console.log(resultado)
// })
// .catch(error => {
//     console.log(error)
// })
// .finally(()=>{
//     console.log("operacion finalizada")
// })



// function lazarMoneda(){
//     return new Promise((resolve, reject) => {
//         const resultado = Math.random() < 0.5 ? "cara" : "cruz";

//         setTimeout(() => {
//             if(resultado === "cara"){
//                 resolve("Salio Cara! Ganaste")
//             }else{
//                 reject("Salio Cruz! Perdiste")
//             }
//         },1000)
//     })
// }

// lazarMoneda()
// .then(mensaje => {
//     console.log(mensaje)
// })
// .catch(error => {
//     console.log(error)
// })


// ----------------------------- METODOS DE PROMESAS -----------------------------

// const promesa1 = Promise.reject("error in first");
// const promesa2 = new Promise((resolve, reject) => setTimeout(resolve('yas'), 1000));
// const promesa3 = Promise.reject("error in third");

// // ALL - todo o nada
// Promise.all([promesa1, promesa2, promesa3])
// .then((valores) => {
//     console.log(valores)
// })
// .catch(error => {
//     console.log(error)
// })

// RACE - el primero el terminar (exito o error)
// const promesa1 = new Promise((resolve) => setTimeout(resolve, 500, "primero"));
// const promesa2 = new Promise((resolve) => setTimeout(resolve, 100, "segundo"));
// const promesa3 = new Promise((resolve) => setTimeout(resolve, 300, "tercero"));

// Promise.race([promesa1, promesa2, promesa3])
// .then((valores) => {
//     console.log(valores)
// })
// .catch(error => {
//     console.log(error)
// })

// ALLSETTLED 
// const promesa1 = Promise.resolve("exito")
// const promesa2 = Promise.reject("error")
// const promesa3 = new Promise((resolve) => setTimeout(resolve, 300, "tercero"));

// Promise.allSettled([promesa1, promesa2, promesa3])
// .then((valores) => {
//     console.log(valores)
// })
// .catch(error => {
//     console.log(error)
// })


// ----------------------------- SINTACTIC SUGAR -----------------------------

// const numeros = [1,2,3,4,5];
// const dobles1 = numeros.map(function(numero) {
//     return numero * 2;
// })

// const dobles2 = numeros.map(numero => numero * 2)

// console.log(dobles) //[2,4,6,8,10]


// obtenerDatos()
// .then(datos => {
//     return procesarDatos(datos)
// })
// .then(resultado => {
//     console.log(resultado)
// })
// .catch(error => {
//     console.log(error)
// })



// try/catch

// async function manejdarDatos(){
//     try{
//         const datos = await obtenerDatos();
//         const resultado = await procesarDatos(datos);
//         console.log(resultado)
//     }catch(error){
//         console.log(error)
//     }
// }

// function obtenerDatosConError(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("error al obtener la data")
//         }, 1000);
//     }
// )}

// async function mostrarDatos(){
//     try{
//         console.log("intentando obtener datos...")
//         const datos = await obtenerDatosConError();
//         console.log(datos)
//     }catch(error){
//         console.log("error de catch:"+ error)
//     }
// }

// mostrarDatos()


// CALLBACK
// function obtenerDatos(callback){
//     setTimeout(() => {
//         callback(null, "datos obtenidos");
//     }, 1000);
// }

// obtenerDatos((error, resultado) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log(resultado)
//     }
// })



function obtenerDatos(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("datos obtenidos");
        }, 1000);
    })
}
// PROMISE
obtenerDatos()
.then(resultado => {
    console.log(resultado)
})
.catch(error => {
    console.log(error)
})
// ASYNC/AWAIT
async function ejecutar() {
    try{
        const resultado = await obtenerDatos();
        console.log(resultado)
    }catch(error) {
        console.log(error)
    }
}
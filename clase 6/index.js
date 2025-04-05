// FS - filesystem 
// const fs = require('fs').promises;
// import fs from "fs/promises"

// async function fsFunction(){
//     try{

//     }catch(error){
//         console.log("error", error)
//     }
// }

// fsFunction()

// async function fsFunction(path){
//     try{
//         const data = await fs.readFile(path, 'utf-8');
//         console.log(data)
//     }catch(error){
//         console.log("error", error)
//     }
// }

// fsFunction('./file.txt')

// async function fsFunction(path){
//     try{
//         const data = await fs.readdir(path);
//         console.log(data)
//     }catch(error){
//         console.log("error", error)
//     }
// }

// fsFunction('../')

// async function fsFunction(path){
//     try{
//         const data = await fs.writeFile(path, 'user xsfcasf logged at 20:43');
//         console.log(data)
//     }catch(error){
//         console.log("error", error)
//     }
// }

// fsFunction('./file.txt')

// async function fsFunction(path){
//     try{
//         const data = await fs.appendFile(path, '\n\n user fxgfsdg logged at 15:34');
//         console.log(data)
//     }catch(error){
//         console.log("error", error)
//     }
// }

// fsFunction('./file.txt')

// fsFunction()

// async function fsFunction(path){
//     try{
//         // await fs.unlink(path); //archivos
//         await fs.rmdir(path);
//     }catch(error){
//         console.log("error", error)
//     }
// }

// fsFunction('')

// async function fsFunction(src, dest){
//     try{
//         await fs.copyFile(src, dest);
//     }catch(error){
//         console.log("error", error)
//     }
// }

// fsFunction("./file.txt", "./copy-file.txt")

// https://nodejs.org/api/fs.html

// HTTP

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) =>{
// res.writeHead(200, {'Content-Type': 'text/plain'}) 
// res.end("Hola mundo!")

// const html = 
//         `<!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <title>Mi pagina HTML</title>
//         </head>
//         <body>
//             <h1>Hola mundo!</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, reiciendis? Beatae laboriosam at voluptatum eligendi dolore, explicabo amet distinctio fugiat. Eius, doloribus facere. Provident facere ipsam voluptas, optio voluptatem neque.</p>
//         </body>
//         </html>`;
// res.writeHead(200, {'Content-Type': 'text/html'}) 
// res.end(html)

const data =  {
    message: 'Hola mundo!',
    date: new Date()
};

// if(req.url === '/json' && req.method === 'GET'){
//     res.writeHead(200, {'Content-Type': 'application/json'}) 
//     res.end(JSON.stringify(data))
// }

if(req.url === '/' && req.method === 'GET'){
    res.writeHead(200, {'Content-Type': 'text/plain'}) 
    res.end("Hola mundo!")
}

if(req.url === '/redirect' && req.method === 'GET'){
    res.writeHead(302, {'Location': '/'}) 
    res.end();
}

else{
    res.writeHead(404, {'Content-Type': 'text/plain'}) 
    res.end("Ruta no encontrada!")
}

// req.url 
    // /
    // /personajes
    // /locaciones
// req.method
    // GET

    // switch(req.method){
    //     case 'GET':
    //         if(req.url === '/'){

    //         }if(req.url === '/info'){
                
    //         }else{
                
    //         }
    //         break;
    //     case 'POST'
    // }



})

server.listen(PORT, () => {
    console.log(`Server runnning on port ${PORT} http://localhost:3000`)
})
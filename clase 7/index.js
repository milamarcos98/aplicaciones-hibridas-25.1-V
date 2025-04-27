// https://expressjs.com/

// HTTP

// 1
// LINEA DE SOLICITUD
// metodo GET
// ruta URL
// version del protocolo HTTP

// 2
// encabezados - HEADERS

// 3
// CUERPO (OPCIONAL)

// GET - solictar recursos

// POST - ENVIAMOS AL SERVIDOR
// {
//     "nombre" : "camila",
//     "apellido": "marcos"
// }

// PUT - ACTUALIZAR - total
// {
//     "nombre" : "cami",
//     "apellido": "marcos"
// }

// PATCH - ACTUALIZAR - parcial
// {
//     "nombre" : "cami",
//     "apellido": "marcos"
// }

// DELETE - eliminar




// LINEA DE ESTADO
// codigo de estado - 200 OK, 404 Not Found...
// Mensaje de estado

// encabezados
// cuerpo


// import http from "http"

// const server = http.createServer((req, res)=> {
//     if(req.url === '/' && req.method === 'GET'){
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         // res.write()
//         res.end('Pagina principal');
//         return;
//     }

//     if(req.url === '/saludo' && req.method === 'GET'){
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Hola mundo')
//         return;
//     }

//     if(req.url === '/despedida' && req.method === 'GET'){
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('Chau!')
//         return;
//     }

//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Ruta no encontrada')

// })

// server.listen(3000, () => {
//     console.log("server runnning on port http://localhost:3000")
// })

// npm i express
import express from "express"

const app = express();

const PORT = 3000;

// interpretar JSON
app.use(express.json())
// datos de formualrios
// application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Pagina princial')
})

// params 
app.get('/params/:nombre/:apellido', (req, res) => {
    console.log(req.params.nombre)
    console.log(req.params.apellido)
    res.send(`Bienvenido ${req.params.nombre} ${req.params.apellido}`)
})

// app.get('/usuarios/:profesores', (req, res) => {
    
// })

// app.put('/usuarios/:id', (req, res) => {
//     // cuerpo
//     // id
// })

const usuarios = [
    {id: 1, nombre: "Juan", apellido: "Perez", carrera: "DM"},
    {id: 2, nombre: "Pepe", apellido: "Perez", carrera: "DW"},
    {id: 3, nombre: "Maria", apellido: "Gonzalez", carrera: "DM"},
    {id: 4, nombre: "Carlos", apellido: "Perez", carrera: "DW"},
    {id: 5, nombre: "Lucia", apellido: "Ramirez", carrera: "DW"},
]

// queries
app.get('/carreras', (req, res) => {
    let carrera = req.query.carrera;
    if(!carrera || (carrera !== "DM" && carrera !== "DW")) return res.send("carrera invalida")
    let usuariosFiltrados = usuarios.filter(u => u.carrera === carrera)
    res.send({usuarios: usuariosFiltrados})
})


app.get('/test', (req, res) => {
    res.send('test')
})

let users = [];

// https://httpstatusdogs.com/
app.post('/api/user', (req, res) => {
    let user = req.body;
    if(!user.nombre || !user.apellido){
        return res.status(400).send({status:"error", message: "incompleto"})
        // return res.status(418).send("i'm a teapot!")
    }
    let findUser = users.filter(u => u.nombre === user.nombre &&  u.apellido === user.apellido);
    if(users.length > 0  && findUser.length > 0){
        return res.status(400).send({status:"error", message: "already created!"})
    }
    else{
        users.push(user);
        res.status(201).send({status:"success", message: "user created!", user: users})
    }
})



// app.get('/saludo', (req, res) => {
//     res.send('Hello world!')
// })

// app.get('/despedida', (req, res) => {
//     res.send('Chau!')
// })

// default - ruta not found
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada')
})

app.listen(3000, () => {
        console.log("server runnning on port http://localhost:3000")
    })
const conexion_BDD_externa = (datos_conexion) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            datos_conexion ? resolve("Conexion OK"): reject("Error")
        },3000)
    })
}
// ASYNC - AWAIT    
async function conexion_BDD_externa_MYSQL (){
    try {
        const response = await conexion_BDD_externa (true)
        console.log("------> " + response + " <------");
    } catch (error) {
        console.log(error);
    }
}
conexion_BDD_externa_MYSQL(true)

const obtener_productos1 = ('https://fakestoreapi.com/products')

async function conectarAPI() {
    try {
        const request1 = await fetch('https://fakestoreapi.com/products')
        const response1 = await request1.json()
        console.log(`${response1[1].title} ------> ${response1[1].price}`);
    } catch (error) {
        console.log(error);
    }
}

conectarAPI()



// ESTO SOLO SIRVE PARA UNA PAGINA WEB
fetch("https://jsonplaceholder.typicode.com/users/1") 
    .then(r => r.json())  
    .then(data => { 
        let user_nuevo={
            name: data.name,
            email :data.name
        }
        guardar_Local_storage(data)})
    .catch(e => console.log(e))

const guardar_Local_storage = (data) =>{ 
    localStorage.setItem('user',JSON.stringify(data)) 
}

//Iniciar la importacion
import {login,likes} from './autenticar.js'
login("Santiago")
console.log(`El numero de likes que se tiene es: ${likes}`)
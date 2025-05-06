const login = (username)=>{
    console.log(`Welcome - ${username}` );
}

const likes = 100
//COMMONJS
// module.exports = login

//ESMODULES
//export default login

//si hay mas metodos en esta seria
export{
    login,
    likes
}
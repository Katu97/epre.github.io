function vaciar(text1, text2){
    text1.value = "";
    text2.value = "";
}

function login(){
    let userAdmin = ["admin", "admin123"]
    let userAtUsuario = ["atuser", "atuser123"]
    let user = document.getElementById('user');
    let pass = document.getElementById('pass');
    let error = document.getElementById("error");
    
    //ADMIN
    if (user.value === userAdmin[0] && pass.value === userAdmin[1]){
        //console.log("entro como admin");
        error.textContent = "";
        vaciar(user, pass);
        alert("Bienvenido, usted ha ingresado como Admnistrador");
        window.location.href = "sistemaRegistro.html?rol=admin";
    
    //EMPLEADO
    } else if (user.value === userAtUsuario[0] && pass.value === userAtUsuario[1]){
        //console.log("entro como empleado");
        vaciar(user, pass);
        error.textContent = "";
        alert("Bienvenido, usted ha ingresado como usuario");
        window.location.href = "registroReclamos.html?rol=usuario";
    
    //MAL LA CONTRASEÑA
    } else {
        error.textContent = "Credenciales incorrectas. Intente nuevamente.";
        vaciar(user, pass);
    }
    
}

function mensajeBienvenida() {
    let params = new URLSearchParams(window.location.search);
    let rol = params.get("rol");
    let userms = document.getElementById("user-ms");

    if (rol === "admin") {
        userms.textContent = "Bienvenido, usted ha ingresado como Administrador";
    } else if (rol === "usuario") {
        userms.textContent = "Bienvenido, usted ha ingresado como usuario";
    }
}

document.addEventListener("DOMContentLoaded", mensajeBienvenida);

function verificarSalida(){
    if(confirm("¿Está seguro que desea continuar?")){
        window.location.href = "index.html";
    }
}

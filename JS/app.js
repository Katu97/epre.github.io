function vaciar(text1, text2){
    text1.value = "";
    text2.value = "";
}

function login(){
    let userAdmin = ["admin", "admin123"]
    let userAtUsuario = ["atusuario", "atusuario123"]
    let user = document.getElementById('user');
    let pass = document.getElementById('pass');
    
    //ADMIN
    if (user.value === userAdmin[0] && pass.value === userAdmin[1]){
        //console.log("entro como admin");
        vaciar(user, pass);
        window.location.href = "sistemaRegistro.html";

    //EMPLEADO
    } else if (user.value === userAtUsuario[0] && pass.value === userAtUsuario[1]){
        console.log("entro como empleado");
        vaciar(user, pass);
        //window.location.href = "sistemaExpedientes.html";
    
    //MAL LA CONTRASEÑA
    } else {
        alert("Credenciales de ingreso incorrectas, intentelo de nuevo por favor");
        vaciar(user, pass);
    }
    
}
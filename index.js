generarContraseñaSegura = (n,entrada)=> {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+-=<>?";
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/;

    encontrando = true

    while (encontrando) {
        let contraseña = "";
        if (entrada.value.length<1){
            for (let i = 0; i < n - entrada.value.length; i++) {
              contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            }
        } else {
            let palabra = entrada.value
            nuevoCaracter = palabra.toLowerCase() + palabra.toUpperCase() + "0123456789!@#$%^&*_+-=<>?"
            for (let i = 0; i < n; i++) {
                contraseña += nuevoCaracter.charAt(Math.floor(Math.random() * nuevoCaracter.length));
            }
        }
        try {
            const esValido = regex.test(contraseña);
            console.log(esValido)
            if (esValido) {encontrando = false; return contraseña}
        }
        catch (e){
            return "Toma mucho tiempo generarla. Agrega algunos caracteres más e intenta nuevamente."
        }      
    }
}

showPassword = n => {
    document.getElementById("contraseña").classList.remove('exito')
    const entrada = document.getElementById("frase")
    document.getElementById("contraseña").textContent = "Generando..."
    setTimeout(() => {
        let nuevaContraseña = generarContraseñaSegura(n,entrada)
        document.getElementById("contraseña").textContent = nuevaContraseña
        document.getElementById("contraseña").classList.add('exito')
    }, 500);
}

document.querySelector(".c12").addEventListener("click",()=>{
    showPassword(12)
})
document.querySelector(".c16").addEventListener("click",()=>{
    showPassword(16)
})
document.querySelector(".c20").addEventListener("click",()=>{
    showPassword(20)
})

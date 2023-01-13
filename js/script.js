
const vocales =["a","e","i","o","u"];
const cambios =["ai","enter","imes","ober","ufat"];
let textIn = document.getElementById("areain");

function cambiandotexto(a,b) {
    let text=textIn.value;
    if (!text || /[^\w\s]/.test(text) || /[A-Z]/.test(text)) {
        alert("Debe ingresar solo caracteres validos y letra en minuscula");
        areain.focus();
    }
    else{
        for (let i = 0; i< a.length; i++) {
            const e = a[i];
            text=text.replaceAll(e,i+1);
        }
        for (let i = 0; i< b.length; i++) {
            const e = b[i];
            text=text.replaceAll(i+1,e);
        }
        // document.getElementById("areaout").value=text;
        areaout.value=text;
        areain.value="";
        // document.getElementById("areain").value="";
    }
}
function copiar(){
    let textcopy = document.getElementById("areaout");
    console.log(textcopy.value);
    textcopy.select();
    textcopy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textcopy.value);
}

// function desencriptar() {
//     let text=textIn.value;
//     for (let i = 0; i< cambios.length; i++) {
//         const element = cambios[i];
//         text=text.replaceAll(element,i++);
//     }
    
//     for (let i = 0; i< vocales.length; i++) {
//         const e = vocales[i];
//         text=text.replaceAll(i++,e);
//     }
//     document.getElementById("areaout").value=text;
// }


document.getElementById("encript").onclick=function() {cambiandotexto(vocales,cambios)};
document.getElementById("decript").onclick=function() {cambiandotexto(cambios,vocales)};
document.getElementById("copy").onclick=copiar;
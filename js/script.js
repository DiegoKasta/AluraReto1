
const vocales =["a","e","i","o","u"];
const cambios =["ai","enter","imes","ober","ufat"];
const random_margin = ["-5px", "1px", "5px", "10px", "7px"];
const random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
const random_degree = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];
let index = 0;

function cambiandotexto(a,b) {
    let text=document.getElementById("areain").value;
    if (!text||/[^\w\s]/.test(text)||/[0-9A-Z]/.test(text)) {
        aviso(`alert-danger`,`<strong>Error !</strong><br>ingresa solo caracteres validos`);
        document.getElementById("areain").value="";
        document.getElementById("areain").focus;
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
        document.getElementById("areain").value="";
        document.getElementById("copia").value=text;
        createStickyNote(text);
        // document.getElementById("button_copy").setAttribute("style",`display:inline`);
        document.getElementById("button_copy").style.display="inline"
    }
}

function copy(){
    let textcopy = document.getElementById("copia");
    textcopy.select();
    textcopy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textcopy.value);
    aviso('alert-info','<strong>Excelente !</strong><br>texto copiado');
}

createStickyNote = (text) => {
    let note = document.createElement("div");
    let details = document.createElement("div");
    let noteText = document.createElement("h1");

    note.className = "note";
    details.className = "details";
    noteText.textContent = text;

    details.appendChild(noteText);
    note.appendChild(details);

    if(index > random_colors.length - 1)
        index = 0;

    note.setAttribute("style", `margin:${random_margin[Math.floor(Math.random() * random_margin.length)]}; background-color:${random_colors[index++]}; transform:${random_degree[Math.floor(Math.random() * random_degree.length)]}`);

    document.querySelector("#all_notes").appendChild(note);
}

aviso=(tipo, contenido)=>{
    document.querySelector("#modal").style.display = "block";
    document.querySelector("#modal").innerHTML=`<div id="inner_modal"><div class="alert alert-dismissible ${tipo}"><button type="button" id="button_close" class="btn-close" data-bs-dismiss="alert"></button>${contenido}</div></div>`;
    document.getElementById("button_close").addEventListener("click", () => {
        document.querySelector("#modal").style.display = "none";
    });
}

document.getElementById("button_encript").onclick=function() {cambiandotexto(vocales,cambios)};
document.getElementById("button_decript").onclick=function() {cambiandotexto(cambios,vocales)};
document.getElementById("button_copy").onclick=copy;
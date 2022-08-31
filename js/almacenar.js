const AGREGAR = document.getElementById("agregar");


document.addEventListener("DOMContentLoaded", ()=>{
    AGREGAR.addEventListener("click", ()=>{
        let item = document.getElementById("item").value;
        let lista = document.getElementById("contenedor");
        
        agregarLocalStorage(item);
        lista.innerHTML += `<li>${item}</li>`;
    });
});




function agregarLocalStorage(parametro){
    if (localStorage.getItem("array") === null){
        localStorage.setItem("array", JSON.stringify([parametro]));
    }else{
        let array = JSON.parse(localStorage.getItem("array"));
        array.push(parametro);
        localStorage.setItem("array", JSON.stringify(array));
    }
}
limpiar.addEventListener("click", ()=>{
    limpiarItems();
});

function limpiarItems(){
    let lista = document.getElementById("contenedor");
    lista.innerHTML = "";
    localStorage.removeItem("array");
}


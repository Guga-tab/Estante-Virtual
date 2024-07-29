const mes = document.getElementsByClassName("items")
const jan = document.getElementById("Fevereiro")

mes[0].addEventListener('click', () =>{
    if(jan.id == "Fevereiro"){
        jan.style.display = 'none'
    }
})
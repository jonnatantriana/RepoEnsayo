document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector("h1");
    console.log('Hola me falto este mensaje')
    heading.textContent = "¡Hola desde JavaScript!";
    
    const paragraph = document.querySelector("p");
    paragraph.style.fontWeight = "bold";
});

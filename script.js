const images = ["images/imagen1.jpg","images/Imagen2.jpg","images/Imagen3.jpg","images/Imagen4.jpg"]

let currentImageIndex=0;


function pasarAnterior(){
    let sliderImage = document.getElementById("img");
    if(currentImageIndex==0){
        currentImageIndex=images.length-1;
    }else{
        currentImageIndex--;
    }
    sliderImage.src = images[currentImageIndex];
}

function pasarSiguiente(){
    let sliderImage = document.getElementById("img");
    if(currentImageIndex==images.length-1){
        currentImageIndex=0;
    }else{
        currentImageIndex++;
    }
    sliderImage.src = images[currentImageIndex];
}
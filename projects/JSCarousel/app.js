//Creating global variables
let arrowleft = document.querySelector("#arrow-left");
let arrowright = document.querySelector("#arrow-right");
let continentname = document.querySelector(".continentname").textContent;
let activePhotoNr = 1

let namingContinent = () => {
    switch (activePhotoNr) {
        case 1:
            document.querySelector(".continentname").innerText= "Azji"
            break
        case 2:
            document.querySelector(".continentname").innerText= "Afryki"
            break
        case 3:
            document.querySelector(".continentname").innerText= "Ameryki Północnej"
            break
        case 4:
            document.querySelector(".continentname").innerText= "Ameryki Południowej"
            break
        case 5:
            document.querySelector(".continentname").innerText= "ziem Antarktydy"
            break
        case 6:
            document.querySelector(".continentname").innerText= "Europy"
            break
        case 7:
            document.querySelector(".continentname").innerText= "Australii"
            break
    }
    
}
//We need to remove class active from actual one to make it possible to other image to get it solely
let removeActive = () => {
    let activephoto = document.querySelector(".active");
    activephoto.classList.remove("active");
}
//Adding class active to actually show photo on the page
let showphoto = (photoNumber) => {
    removeActive();
    document.querySelector("#photo" + photoNumber).classList.add("active")
    namingContinent()
        
}
//Next to function are for arrow, they work by changing actual photo nr
let nextSlide = () => {
    if (activePhotoNr == 7) {//This line is for the last element on our picture list, prevent not to creating empty image element
        activePhotoNr = 1
    }
    else {
        activePhotoNr += 1;
    }
    showphoto(activePhotoNr);  
    
}

let prevoiusSlide = () => {
    if (activePhotoNr == 1) {//and this is for first element, because now we are móving backward
        activePhotoNr = 7
    }
    else {
        activePhotoNr -= 1;
    }
    showphoto(activePhotoNr);
    
}

for (let i = 1; i <= 7; i++){//This function is for using dots to give actual photo number and then give it then class actual
    let showPhotoNr = () => {
        activePhotoNr = i
        showphoto(i)
        
    }
    document.querySelector("#dot" + i).addEventListener("click", showPhotoNr)
   
}

arrowleft.addEventListener("click",prevoiusSlide);
arrowright.addEventListener("click", nextSlide);



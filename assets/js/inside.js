document.querySelector("#product-video").addEventListener("click", ()=>{
    let videoParametr= document.querySelector(".video-content")
    let tecnicalParametr= document.querySelector(".parametr-content");
    let productVideoButton= document.querySelector("#product-video");
    let productPrmtrButton= document.querySelector("#product-prmtr");
    productVideoButton.classList.add("product-active");
    productVideoButton.classList.remove("product-video");
    productPrmtrButton.classList.add("product-deactive");
    productPrmtrButton.classList.remove("product-prmtr");
    tecnicalParametr.classList.add("deactive")
    videoParametr.classList.add("active") 
})

document.querySelector("#product-prmtr").addEventListener("click", ()=>{
    let videoParametr= document.querySelector(".video-content")
    let tecnicalParametr= document.querySelector(".parametr-content");
    let productVideoButton= document.querySelector("#product-video");
    let productPrmtrButton= document.querySelector("#product-prmtr");
    productVideoButton.classList.remove("product-active");
    productVideoButton.classList.add("product-video");
    productPrmtrButton.classList.remove("product-deactive");
    productPrmtrButton.classList.add("product-prmtr");
    tecnicalParametr.classList.remove("deactive")
    videoParametr.classList.remove("active") 
})
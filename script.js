const homeBtn=document.querySelector("#home");
const tourBtn=document.querySelector("#tour");
const servicesBtn=document.querySelector("#services");
const homePara=document.querySelector(".homePara");
const tourPara=document.querySelector(".tourPara");
const servicespara=document.querySelector(".servicesPara");



tourBtn.addEventListener("click", ()=>{
            
            HideAll();
            tourBtn.classList.add("active");
            tourPara.classList.add("show");
            
})
homeBtn.addEventListener("click", ()=>{
            HideAll();
            homeBtn.classList.add("active");
            homePara.classList.add("show");
           
})
servicesBtn.addEventListener("click", ()=>{
            HideAll();
            servicesBtn.classList.add("active");
            servicespara.classList.add("show");
            
})

function HideAll(){
    tourBtn.classList.remove("active");
    servicesBtn.classList.remove("active");
    homeBtn.classList.remove("active");
    homePara.classList.add("hidden");
    tourPara.classList.add("hidden");
    servicespara.classList.add("hidden");
    homePara.classList.remove("show");
    tourPara.classList.remove("show");
    servicespara.classList.remove("show");

}
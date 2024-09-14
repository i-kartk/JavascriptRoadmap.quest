
const main = document.querySelector("main");
const preloaderElem = main.firstElementChild;
const progressBar = preloaderElem.firstElementChild;
const counter = preloaderElem.lastElementChild;
const progressBarFill = progressBar.firstElementChild;
const pageOne = main.lastElementChild;
let counterProgress = 0;

const pageShowUp = () =>{
    gsap.from(pageOne, {
        duration: 1.5,
        y: window.innerHeight,
        ease: "power3.out"
    });
};



function preloader () {
    let interval = setInterval(() => {
        
        counterProgress += 1;
        // const percent = counter.innerHTML = `<span>%</span>`
        counter.innerHTML = `${counterProgress}<span>%</span>`
        progressBarFill.style.width = counterProgress + "%"      
        

        if(counterProgress >= 100){
            clearInterval(interval)
            setTimeout(() => {
                preloaderElem.style.display ="none";
                pageShowUp()
            }, 2000);   
        }
    },60);

}
preloader();


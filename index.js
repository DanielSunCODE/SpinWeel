const spinBtn = document.querySelector(".spin-btn");
const weel = document.querySelector(".weel");
let spinBtnAvaible = true;


spinBtn.addEventListener("click", ()=>{
    if(spinBtnAvaible === true){
        //spin btn changes
        spinBtnAvaible = false;
        spinBtn.style.opacity = ".2"
        spinBtn.style.cursor = "initial"
        //weel spin
        let rotateValue = Math.floor(Math.random() * (1440 - 360)) + 360;
        weel.style.transform = `rotate(${rotateValue}deg)`;
        weel.classList.add("spin");
        //weel reset
        let interval = setTimeout(()=>{
            weel.classList.remove("spin");
            weel.style.transform = `rotate(0deg)`;
        }, 4000);
        //spin reset
        setTimeout(()=> {
            spinBtnAvaible = true;
            spinBtn.style.opacity = "1"
            spinBtn.style.cursor = "pointer"
        }, 7000)
    }
})


//=======================  MY-WORK SECTION ===================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".image-overlay");

p_btns.addEventListener("click", (e) => {

    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add('p-btn-active');

    // To find the number in data attributes

    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
});

// ================================= SCROLL TO TOP ============================================
    // GEtting FOOTER - Hero REFRENCE
const footerElem = document.querySelector(".footer");
const heroSec = document.querySelector(".section-hero")

const scrollElement = document.createElement("div");
scrollElement.classList.add("scroll-top");

scrollElement.innerHTML = `<ion-icon name="arrow-up-circle-outline" class ="scroll-icon"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () =>{
    heroSec.scrollIntoView({behavior:"smooth"})
}

scrollElement.addEventListener("click", scrollTop);


// NUMBER ANIMATION ==========================================================================


// const counterNum = document.querySelectorAll(".counter-numbers");

// const speed = 200;

// counterNum.forEach((curElem) => {

//     const updateNumber = () => {
//         const targetNumber = parseInt(curElem.dataset.number);
//         // console.log(targetNumber);

//         const initialNum = parseInt(curElem.innerText);
//         console.log(initialNum);
//     }

//     updateNumber();
// })
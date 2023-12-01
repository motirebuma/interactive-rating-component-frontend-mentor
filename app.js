
const rating_numbers = document.querySelectorAll(".ratings p");
const submit_btn = document.querySelector(".submit_btn");
const rate_point = document.getElementById("rate");
const rating_div = document.querySelector(".rating_div");
const thanks_div = document.querySelector(".thanks_div");

let rate;

rating_numbers.forEach((rating_number)=>{
    rating_number.addEventListener("click", (event)=>{
        const active = document.querySelector('.checked');
        if(active){
            active.classList.remove("checked");
        }
        const card = event.target;
        card.classList.add("checked");
        rate = event.target.innerText;
    });
});

submit_btn.addEventListener("click", ()=>{
    if(rate){
        rate_point.innerText = rate;
        rating_div.classList.add("hidden");
        thanks_div.classList.remove("hidden");
    }
});
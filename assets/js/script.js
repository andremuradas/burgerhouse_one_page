//MENU MOBILE

let btnMenuMobile = document.querySelector('.arrow_navigation');
let menuMobile = document.querySelector('.mobile_navigation');
let arrowBtnMobile = document.querySelector('.arrow_navigation i');

btnMenuMobile.addEventListener('click', menuMobileOpenClose);

function menuMobileOpenClose()
{
    if(menuMobile.computedStyleMap().get('transform')[0].y.value === -100)
    {
        
        btnMenuMobile.style.bottom = '0px';
        menuMobile.style.transform = 'translate(-50%, 0%)';
        arrowBtnMobile.classList.replace("fa-chevron-down", "fa-chevron-up");
        arrowBtnMobile.style.transform = 'translate(-50%, -135%)';
    }
    else
    {
        btnMenuMobile.style.bottom = '-9px';
        menuMobile.style.transform = 'translate(-50%, -100%)';
        arrowBtnMobile.classList.replace('fa-chevron-up', 'fa-chevron-down');
        arrowBtnMobile.style.transform = 'translate(-50%, -150%)';
    }
    
};

//Slide Show
let btnLeft = document.querySelector('#slideLeft');
let btnRigth = document.querySelector('#slideRight');
let slideContainer = document.querySelector('.slider_container');
let slideSize = document.querySelector('.slide').clientWidth;
let totalSlide = slideContainer.clientWidth / slideSize;
let slidePosition = 0;

btnLeft.addEventListener('click', slidePrevious);
btnRigth.addEventListener('click', slideFoward);





function slidePrevious()
{
    slidePosition -= 1; 
    timer.stop();
    checkCount();
    timer.start();
}

function slideFoward()
{
    slidePosition += 1; 
    timer.stop();
    checkCount();
    timer.start();
}


function checkCount()
{
    if(slidePosition === totalSlide)
    {
        slidePosition = 0;
    }
    else if(slidePosition < 0)
    {
        slidePosition = totalSlide - 1;
    }
    slideContainer.style.marginLeft = -(slidePosition * slideSize)+'px';
}


let timer = automaticSlideShow();

function automaticSlideShow()
{
    let timer;
    return {
        start() {
            timer = setInterval(slideFoward, 4000);
        },
        stop() {
            clearInterval(timer);
        }
    }
}

timer.start();

let serviceBtn = document.querySelectorAll(".services_row");


serviceBtn.forEach(serviceDescription =>
    {
        serviceDescription.addEventListener('click', () =>
        {
            if(document.getElementById(serviceDescription.id).nextElementSibling.classList.contains("show"))
            {
                document.getElementById(serviceDescription.id).nextElementSibling.classList.remove("show");
            }
            else
            {
                document.getElementById(serviceDescription.id).nextElementSibling.classList.add("show");
            }
            
        });
    });



// Customers slide show section

let customerCards = document.querySelector('.customers_cards');
let customersTotalSize = customerCards.clientWidth;
let customersSlideSize = document.querySelector('.customers_width').clientWidth;
let totalSlides = Math.round(customersTotalSize / customersSlideSize);
let dots = document.querySelector('.customers_container .dots');

//Calculating and inserting dots in the page
dotsArea()
function dotsArea()
{
    for(let i = 0; i < totalSlides; i++)
    {
        let newDot = document.createElement("div");
        newDot.classList.add("dot");
        newDot.setAttribute("data", i);
        dots.appendChild(newDot);
    }
    
}

//Active the first dot when page is loaded
let dotIndicator = document.querySelectorAll('.customers_container .dots .dot');
dotIndicator[0].classList.add("dot_active");


function clearDots()
{
    for(let i = 0; i < totalSlides; i++)
    {
        dotIndicator[i].classList.remove("dot_active");
    }
}

//Identify size of margin right of each customer card
let customerCard = document.querySelector('.customer_card');
let customerCardStyle = getComputedStyle(customerCard);
let customerCardMargin = customerCardStyle.marginRight;
let customerSlidePosition = 0

dotIndicator.forEach(clickDot => 
    {
        clickDot.addEventListener('click', (e) => 
        {
            clearDots();
            timerCustomer.stop();
            let dotIndex = e.target.getAttribute("data");
            customerSlidePosition = parseInt(dotIndex);
            customerCards.style.marginLeft = ((-customersSlideSize - parseInt(customerCardMargin))*dotIndex) + "px";
            e.target.classList.add("dot_active");
            timerCustomer.start();
        });
    });

//Customer slide show

function customerGoFoward()
{
    customerSlidePosition += 1;

    if(customerSlidePosition < totalSlides)
    {
        customerSlidePosition;
    }
    else
    {
        customerSlidePosition = 0;
    }
    
    clearDots();
    customerCards.style.marginLeft = ((-customersSlideSize - parseInt(customerCardMargin))*customerSlidePosition) + "px";
    let dotToActive = document.querySelector('[data="'+customerSlidePosition+'"]');
    dotToActive.classList.add("dot_active");
}


let timerCustomer = CustomerAutomaticSlideShow();

function CustomerAutomaticSlideShow()
{
    let timerCustomer;
    return {
        start() {
            timerCustomer = setInterval(customerGoFoward, 4000);
        },
        stop() {
            clearInterval(timerCustomer);
        }
    }
}

timerCustomer.start();


// Partners slide show section
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

let menuItem = document.querySelectorAll('.mobile_item');

menuItem.forEach(closeAfter => 
    {
        closeAfter.addEventListener('click', () =>
        {
            menuMobileOpenClose();
        });
    });

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
    let dotToActive = document.querySelector('.customers_container [data="'+customerSlidePosition+'"]');
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
let partnersCards = document.querySelector('.partners_cards');
let partnersTotalSize = partnersCards.clientWidth;
let partnersSlideSize = document.querySelector('.partners_width').clientWidth;
let partnersTotalSlides = Math.round(partnersTotalSize / partnersSlideSize);
let partnersDots = document.querySelector('.partners .dots');

//Calculating and inserting dots in the page
PartnersDotsArea()
function PartnersDotsArea()
{
    for(let i = 0; i < partnersTotalSlides; i++)
    {
        let PartnersnNewDot = document.createElement("div");
        PartnersnNewDot.classList.add("dot");
        PartnersnNewDot.setAttribute("data", i);
        partnersDots.appendChild(PartnersnNewDot);
    }
    
}

//Active the first dot when page is loaded
let partnersDotIndicator = document.querySelectorAll('.partners .dots .dot');
partnersDotIndicator[0].classList.add("dot_active");


function PartnerClearDots()
{
    for(let i = 0; i < partnersTotalSlides; i++)
    {
        partnersDotIndicator[i].classList.remove("dot_active");
    }
}

//Identify size of margin right of each customer card
let PartnerCard = document.querySelector('.partners_card');
let PartnerCardStyle = getComputedStyle(PartnerCard);
let PartnerCardMargin = PartnerCardStyle.marginRight;
let PartnerSlidePosition = 0

partnersDotIndicator.forEach(clickPartnerDot => 
    {
        clickPartnerDot.addEventListener('click', (e) => 
        {
            PartnerClearDots();
            timerPartner.stop();
            let PartnerDotIndex = e.target.getAttribute("data");
            PartnerSlidePosition = parseInt(PartnerDotIndex);
            partnersCards.style.marginLeft = ((-partnersSlideSize - parseInt(PartnerCardMargin))*PartnerDotIndex) + "px";
            e.target.classList.add("dot_active");
            timerPartner.start();
        });
    });

    
//Partner slide show

function partnerGoFoward()
{
    PartnerSlidePosition += 1;

    if(PartnerSlidePosition < partnersTotalSlides)
    {
        PartnerSlidePosition;
    }
    else
    {
        PartnerSlidePosition = 0;
    }
    
    PartnerClearDots();
    partnersCards.style.marginLeft = ((-partnersSlideSize - parseInt(PartnerCardMargin))*PartnerSlidePosition) + "px";
    let PartnerDotToActive = document.querySelector('.partners [data="'+PartnerSlidePosition+'"]');
    PartnerDotToActive.classList.add("dot_active");
}

let timerPartner = partnerAutomaticSlideShow();

function partnerAutomaticSlideShow()
{
    let timerPartner;
    return {
        start() {
            timerPartner = setInterval(partnerGoFoward, 4000);
        },
        stop() {
            clearInterval(timerPartner);
        }
    }
}

timerPartner.start();


//Scroll smooth

let headerHeight = 0
if(window.innerWidth >= 1024)
{
    headerHeight = document.querySelector('header').clientHeight;
}
else
{
    headerHeight = document.querySelector('header').clientHeight + 55;
}


function scrollFunction1() 
{
    
    let e = document.getElementById("sec1").offsetTop;
    window.scroll
    ({
        top: e-headerHeight, 
        left: 0, 
        behavior: 'smooth'
    });
}

function scrollFunction2() 
{
    let e = document.getElementById("sec2").offsetTop;
    window.scroll
    ({
        top: e-headerHeight, 
        left: 0, 
        behavior: 'smooth'
    });

}

function scrollFunction3() 
{
    let e = document.getElementById("sec3").offsetTop;
    window.scroll
    ({
        top: e-headerHeight, 
        left: 0, 
        behavior: 'smooth'
    });

}

function scrollFunction4() 
{
    let e = document.getElementById("sec4").offsetTop;
    window.scroll
    ({
        top: e-headerHeight, 
        left: 0, 
        behavior: 'smooth'
    });

}

function scrollFunction5() 
{
    let e = document.getElementById("sec5").offsetTop;
    window.scroll
    ({
        top: e-headerHeight, 
        left: 0, 
        behavior: 'smooth'
    });

}

function scrollFunction6() 
{
    let e = document.getElementById("sec6").offsetTop;
    window.scroll
    ({
        top: e-headerHeight, 
        left: 0, 
        behavior: 'smooth'
    });

}

function scrollFunction7() 
{
    let e = document.getElementById("sec7").offsetTop;
    window.scroll
    ({
        top: e-headerHeight, 
        left: 0, 
        behavior: 'smooth'
    });

}


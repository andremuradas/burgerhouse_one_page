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

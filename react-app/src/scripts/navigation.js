import inViewAnimation from './inViewAnimation';

export default function distanceFiller(iconID, elementID, fillerID, targetOrigionalTop) {
    const iconElement = document.getElementById(iconID);
    const targetElement = document.getElementById(elementID);
    const fillerElement = document.getElementById(fillerID);

    if (targetOrigionalTop !== undefined) {
        let dynamicTop = targetElement.getBoundingClientRect().top;
    
        let percentageFill = (1-(dynamicTop/targetOrigionalTop))*100;
        if (percentageFill < 0) {
            percentageFill = 0;
        }else if (percentageFill > 100) {
            percentageFill = 100;
        }
        fillerElement.style.height = `${percentageFill}%`;
    }

    // If the filler goes into/past the icon
    const fillerBottom = fillerElement.getBoundingClientRect().bottom;
    const iconBottom = iconElement.getBoundingClientRect().bottom;

    const fillerInIcon = fillerBottom >= (iconBottom-70);


    if (fillerInIcon && inViewAnimation.checkInView(targetElement)) {
        iconElement.style.backgroundColor = 'white';
        iconElement.style.color = '#275a77';
        iconElement.style.boxShadow = '0 0 3px 3px #275a77';
    }else {
        iconElement.style.backgroundColor = '#275a77';
        iconElement.style.color = 'white';
        iconElement.style.boxShadow = 'none';
    }
}

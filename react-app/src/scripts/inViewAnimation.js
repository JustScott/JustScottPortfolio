/*
 * Give all children opacity: 0; right away to make the on view
 *   animations work immediately
 */
function childOpacityToZero() {
    let root = document.querySelector('#root');
    let children = root.children;
    for (let i=0;i<children.length;i++) {
        let child = children[i];
        child.style.opacity = '0';
    }
}

/*
 * Checks if the element is in the users view
 */
function checkInView(element) {
    let pageHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;
    let elementBottom = element.getBoundingClientRect().bottom;
    let elementHeight = element.getBoundingClientRect().height;

    return (elementBottom > 0 && elementTop <= (pageHeight - (elementHeight*.9))); 
}

/*
 * Gives each element a load-in or load-out animation
 *   depening on whether the element is coming into or 
 *   going out of the windows view
 */
function animateOnView() {
    let root = document.querySelector('#root');
    let children = root.children;
    for (let i=0;i<children.length;i++) {
        let child = children[i];
        /*
        If child on screen and not already given animation
          -> Add load-in animation
          -> Remove load-out animation if it has one
        */
        if (checkInView(child) && child.className.indexOf(' on_view_animate') === -1) {
            child.className += ' on_view_animate';
            child.className = child.className.replace('off_view_animate','');
        }
        /*
        If child not on screen and already has animation
          -> Add load-out animation
          -> Remove load-in animation if it has one
        */
        if (!checkInView(child) && child.className.indexOf(' on_view_animate') > -1) {
            child.className = child.className.replace('on_view_animate','');
            child.className += 'off_view_animate';
        }
    } 
}


module.exports = { animateOnView, childOpacityToZero };

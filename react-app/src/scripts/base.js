function removeChildren(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

/**
 *	Copies the text of the supplied ID
 */
function copyText(ID) {
    let textContainer = document.getElementById(ID);
	let toolTip = document.querySelector('#tool_tip_text'); 

    /* Select the text field */
    textContainer.select();
    textContainer.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the textContainer */
    navigator.clipboard.writeText(textContainer.value); 

    toolTip.innerHTML = `Copied ${textContainer.value}`;
}

function fixTextareaBehavior() {
	let textareas = document.getElementsByTagName('textarea');
	textareas = Array.from(textareas);

	for (let i=0;i<textareas.length;i++) {
		textareas[i].addEventListener('keydown', function(e) {
			if (e.key === 'Tab') {
				e.preventDefault();
				var start = this.selectionStart;
				var end = this.selectionEnd;

				// set textarea value to: text before caret + tab + text after caret
				this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);

				// put caret at right position again
				this.selectionStart = this.selectionEnd = start + 1;
			}
		});
	}
}


module.exports = { 
    removeChildren,
    copyText,
    fixTextareaBehavior,
};

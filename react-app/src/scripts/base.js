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

	if (textContainer.innerHTML === undefined) {
		navigator.clipboard.writeText(textContainer.value).then(function() {
  			toolTip.innerHTML = 'Copied to clipboard!'
		}, function() {
  			alert("Couldn't Copy Text");
		});
	}
	else {
		navigator.clipboard.writeText(textContainer.innerHTML).then(function() {
  			toolTip.innerHTML = 'Copied to clipboard!'
		}, function() {
  			alert("Couldn't Copy Text");
		});
	}
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

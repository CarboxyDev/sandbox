var htmlInput = document.querySelector('.htmlInput');
var cssInput = document.querySelector('.CSSInput');

function runCode(){
	if (isMobile){
		console.log("MOBILE DEVICE");
		$("#code").hide();
		$("#sandbox").show();
	}
	var textareaObj = document.querySelector('.htmlInput');
	
	var code = textareaObj.value.replace(/(\n)/gm," ");
	console.log(code)
	var outputObj = document.getElementById('output');
	output.innerHTML = code;
	var styleObj = document.querySelector('.cssInput');
	let styles = styleObj.value;
	output.innerHTML += `<style>${styles}</style>`;


}


function codeHTML() {
	let update = document.getElementById('language');
	update.innerHTML = "HTML";
	$(".cssInput").hide();
	$(".htmlInput").show();
}



function codeCSS(){
	let update = document.getElementById('language');
	update.innerHTML = "CSS";
	$(".cssInput").show();
	$(".htmlInput").hide();
}


function isMobile(){
	
	if (window.innerWidth < 748){
		
		return true;

	}
}


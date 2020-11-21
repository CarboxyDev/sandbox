var htmlInput = document.querySelector('.htmlInput');
var cssInput = document.querySelector('.CSSInput');

function runCode(){
	if (isMobile()){
		console.log("MOBILE DEVICE");
		$("#code").hide();
		$("#sandbox").show();
		$("#revert").show();
	}
	var textareaObj = document.querySelector('.htmlInput');
	
	var code = textareaObj.value.replace(/(\n)/gm," ");
	
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
	var clientWidth = $(window).width();

	if (clientWidth < 748){
		return true;

	}
	else if (clientWidth >= 748){

		return false;
	}
}



function revertMobile(){
	$("#revert").hide();
	$("#sandbox").hide();
	$("#code").show();

}



function runCode(){
	var textareaObj = document.getElementById('codeInput');
	var code = textareaObj.value.replace(/(\n)/gm," ");
	var outputObj = document.getElementById('output');
	output.innerHTML = code;



}

/*
textareaObj.addEventListener('keydown',function(r){

	if (e.ctrlKey){
		runCode();
	}
})
*/

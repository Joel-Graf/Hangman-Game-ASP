function validateInput(event) {
	var input = document.getElementById('input').value
	var regex = /[a-zA-Z]+/g;
	var result = regex.test(input);
	if(!result) {
		event.preventDefault()
		document.getElementById('input').value = ""
		alert("Valor inv�lido! Inserir somente letras.")
	}
}
function resetGame() {
	window.location.href = "reset.asp"
}
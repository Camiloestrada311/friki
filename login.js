const login = document.getElementById("login");
const newEmail = document.getElementById("emailONumero");
const newPassword = document.getElementById("contraseña");

login.addEventListener("submit", loginUser);

function loginUser(event) {
	event.preventDefault();
	const getLocal = localStorage.getItem("user");
	const validateUser = JSON.parse(getLocal);

	if (emailONumero.value === "" || contraseña.value === "") {
		alert("Por favor llene todos los campos");
	}

	else if (!validateUser.find(user => user.email === emailONumero.value)) {
		alert("El usuario no existe");
	}

	else if (
		validateUser.find(user => user.email === emailONumero.value).pass !== contraseña.value
	) {
		alert("La contraseña no coincide");
	}

	else {
		alert("Usuario registrado con éxito");
        window.location.href = "./(Quiten los parentesis y ponen el nombre del index con el .html)"
	}
}
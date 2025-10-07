const txtEmail = document.getElementById('txtEmail');
const msgFeedback = document.getElementById('newsletterFeedback');



function cadastrarEmail() {
    let email = txtEmail.value // Email = string Vazia " "
    msgFeedback.innerHTML = `Email ${email} cadastrado com sucesso!`;
}


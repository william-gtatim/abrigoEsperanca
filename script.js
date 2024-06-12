function confirmEmail() {
    var userEmailInput = document.getElementById("userEmail");
    var confirmationMessage = document.getElementById("confirmationMessage");
    var errorMessage = document.getElementById("errorMessage");
    var email = userEmailInput.nodeValue.trim();

    
    if (userEmailInput.value.trim() === "") {
        errorMessage.style.display = "block";
        confirmationMessage.style.display = "none";
    } else {
        if (userEmailInput.value.includes("@")){
            errorMessage.style.display = "none";
            confirmationMessage.innerText = "Cadastro realizado!";
            confirmationMessage.style.display = "block";
            setTimeout(function() {
                confirmationMessage.style.display = "none";
            }, 2000);
        }else{
            confirmationMessage.innerText = "Digite um email válido!";
            errorMessage.style.display = "block";
        }
        
    }
}


function acordeon(){
    const acordeons = document.querySelectorAll('.acordeon');
    acordeons.forEach(acordeon => {
        acordeon.addEventListener('click', ()=> {
            let acordeonCorpo = acordeon.querySelector('.acordeon-corpo');
            let acordeonIcone = acordeon.querySelector('.acordeon .icone');
            if (acordeonCorpo.style.display === "block") {
                acordeonCorpo.style.display = "none";
                acordeonIcone.classList.remove('girar-icone')
            } else {
                acordeonCorpo.style.display = "block";
                acordeonIcone.classList.add('girar-icone')
            }
        })
    })
}

window.onload = acordeon()

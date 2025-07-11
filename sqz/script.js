// Get the modal
var modal = document.getElementById("leadModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[0];

// Get the form and thank you page elements
var leadForm = document.getElementById("leadForm");
var thankYouPage = document.getElementById("thankYouPage");
var mainContent = document.querySelector(".container");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex"; // Use flex to center content
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
leadForm.onsubmit = async function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Endpoint do webhook do n8n para receber os dados do formulário
  const apiEndpoint = 'https://n8n.smarthat.com.br/webhook/8e958aa4-0f5f-4f09-91ca-ea6438d9bbd3';
  const whatsappGroupUrl = 'https://chat.whatsapp.com/L625SKPjCGZ0Npla4vz3dM?mode=ac_t';

  console.log("[INFO] Enviando dados para o webhook n8n:", { name, email });

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      console.log("[INFO] Dados enviados com sucesso para o n8n.");
      // Redireciona para o grupo do WhatsApp após sucesso
      window.location.href = whatsappGroupUrl;
      return;
    } else {
      // Log de erro destacado
      console.error("%c❌ [ERRO] Erro ao cadastrar. Status:", "color: red; font-weight: bold;", response.status, response.statusText);
      alert("Ocorreu um erro ao cadastrar. Tente novamente.");
    }
  } catch (error) {
    // Log de erro destacado
    console.error("%c❌ [ERRO] Erro ao enviar dados:", "color: red; font-weight: bold;", error);
    alert("Ocorreu um erro de conexão. Verifique sua internet e tente novamente.");
  }
};

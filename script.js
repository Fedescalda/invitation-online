function ShowTopicField() {
  let invitationSelect = document.getElementById("invitation");
  let themeCamp = document.getElementById("theme-camp");

  if (invitationSelect.value === "party" || invitationSelect.value === "wedding" || invitationSelect.value === "meeting") {
    themeCamp.style.display = "block";
  } else {
    themeCamp.style.display = "none";
  }
}

function generateInvitation() {
  // Obtener los valores de los campos del formulario en index.html
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const cel = document.getElementById("cel").value;
  const invitation = document.getElementById("invitation").options[document.getElementById("invitation").selectedIndex].text;
  const theme = document.getElementById("theme").value;

  // Guardar los valores en el almacenamiento local
  const invitationData = {
    name: name,
    address: address,
    date: date,
    time: time,
    cel: cel,
    invitation: invitation,
    theme: theme
  };

  localStorage.setItem("invitationData", JSON.stringify(invitationData));

  // Redireccionar a invitation.html
  window.location.href = "invitation.html";
}

document.addEventListener("DOMContentLoaded", function() {
  // Obtener los datos de la invitación almacenados en el almacenamiento local
  const invitationJSON = localStorage.getItem("invitationData");

  if (invitationJSON) {
    // Convertir la cadena JSON a un objeto
    const invitationData = JSON.parse(invitationJSON);

    // Mostrar los valores en invitation.html
    document.getElementById("name-value").textContent = invitationData.name;
    document.getElementById("address-value").textContent = invitationData.address;
    document.getElementById("date-value").textContent = invitationData.date;
    document.getElementById("time-value").textContent = invitationData.time;
    document.getElementById("theme-value").textContent = invitationData.theme;
  }

  // Agregar los controladores de eventos a los botones
  const confirmButton = document.getElementById("confirm-button");
  const declineButton = document.getElementById("decline-button");

  confirmButton.addEventListener("click", function() {
    sendWhatsAppMessage(true);
  });

  declineButton.addEventListener("click", function() {
    sendWhatsAppMessage(false);
  });
});

function sendWhatsAppMessage(confirm) {
  const cel = document.getElementById("cel-value").textContent;

  let message = "";

  if (confirm) {
    message = "¡Gracias por confirmar tu asistencia!";
  } else {
    message = "Lamentamos que no puedas asistir. ¡Esperamos verte en otra ocasión!";
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://api.whatsapp.com/send?phone=${cel}&text=${encodedMessage}`;

  window.open(whatsappURL);
}

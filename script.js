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
    const theme = document.getElementById("theme").value;
  
    // Redireccionar a invitation.html con los parámetros de la invitación
    window.location.href = `invitation.html?name=${encodeURIComponent(name)}&address=${encodeURIComponent(address)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}&cel=${encodeURIComponent(cel)}&invitation=${encodeURIComponent(invitation)}&theme=${encodeURIComponent(theme)}`;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // Obtener los valores de la URL en invitation.html
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nameParam = urlParams.get('name');
    const addressParam = urlParams.get('address');
    const dateParam = urlParams.get('date');
    const timeParam = urlParams.get('time');
    const themeParam = urlParams.get('theme');
  
    // Mostrar los valores en invitation.html
    document.getElementById("name-value").textContent = nameParam;
    document.getElementById("address-value").textContent = addressParam;
    document.getElementById("date-value").textContent = dateParam;
    document.getElementById("time-value").textContent = timeParam;
    document.getElementById("theme-value").textContent = themeParam;
  });
  
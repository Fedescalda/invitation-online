function ShowTopicField() {
    let invitationSelect = document.getElementById("invitation");
    let themeCamp = document.getElementById("theme-camp");

    if (invitationSelect.value === "party" || invitationSelect.value === "wedding" || invitationSelect.value === "meeting") {
      themeCamp.style.display = "block";
    } else {
      themeCamp.style.display = "none";
    }
  }
  // Obtener los valores de los campos del formulario en index.html
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const cel = document.getElementById("cel").value;
  const invitation = document.getElementById("invitation").value;
  const theme = document.getElementById("theme").value;

  // Mostrar los valores en invitation.html
  document.getElementById("name").textContent = name;
  document.getElementById("address").textContent = address;
  document.getElementById("date").textContent = date;
  document.getElementById("time").textContent = time;
  document.getElementById("cel").textContent = cel;
  document.getElementById("invitation").textContent = invitation;
  document.getElementById("theme").textContent = theme;
function confirmAttendance() {
    // Aquí puedes implementar la lógica para confirmar la asistencia, como enviar los datos al servidor o actualizar el estado en una base de datos.
    // También puedes mostrar un mensaje de confirmación al usuario.
}

function rejectAttendance() {
    // Aquí puedes implementar la lógica para rechazar la asistencia, como enviar los datos al servidor o actualizar el estado en una base de datos.
    // También puedes mostrar un mensaje de confirmación al usuario.
}

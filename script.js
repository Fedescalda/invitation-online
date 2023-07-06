function ShowTopicField() {
    var invitationSelect = document.getElementById("invitation");
    var themeCamp = document.getElementById("theme-camp");

    if (invitationSelect.value === "party" || invitationSelect.value === "wedding" || invitationSelect.value === "meeting") {
      themeCamp.style.display = "block";
    } else {
      themeCamp.style.display = "none";
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    var name = localStorage.getItem("name");
    var address = localStorage.getItem("address");
    var date = localStorage.getItem("date");
    var time = localStorage.getItem("time");
    var cel = localStorage.getItem("cel");
    var invitationType = localStorage.getItem("invitationType");
    var theme = localStorage.getItem("theme");

    var message = "";
    var details = "";

    if (invitationType === "wedding") {
        message = "Te invito a mi boda, " + name;
    } else if (invitationType === "party") {
        message = "Te invito a mi fiesta de cumpleaños, " + name;
    } else if (invitationType === "meeting") {
        message = "Te invito a nuestra reunión familiar, " + name;
    }

    details += "Lugar: " + address + "<br>";
    details += "Fecha: " + date + "<br>";
    details += "Hora: " + time + "<br>";
    details += "Número de Celular: " + cel + "<br>";

    if (invitationType === "party") {
        details += "Temática: " + theme + "<br>";
    }

    document.getElementById("invitation-message").innerHTML = message;
    document.getElementById("invitation-details").innerHTML = details;
});

function confirmAttendance() {
    // Aquí puedes implementar la lógica para confirmar la asistencia, como enviar los datos al servidor o actualizar el estado en una base de datos.
    // También puedes mostrar un mensaje de confirmación al usuario.
}

function rejectAttendance() {
    // Aquí puedes implementar la lógica para rechazar la asistencia, como enviar los datos al servidor o actualizar el estado en una base de datos.
    // También puedes mostrar un mensaje de confirmación al usuario.
}

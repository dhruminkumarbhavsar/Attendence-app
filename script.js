function markAttendance(status) {
  const name = document.getElementById("nameInput").value;

  if (name === "") {
    alert("Please enter student name");
    return;
  }

  const list = document.getElementById("attendanceList");

  const li = document.createElement("li");
  li.textContent = `${name} - ${status}`;

  list.appendChild(li);

  document.getElementById("nameInput").value = "";
}
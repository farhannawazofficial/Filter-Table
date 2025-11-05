const users = [
  { name: "Ali Raza", city: "Karachi"},
  { name: "Sara Khan", city: "Lahore"},
  { name: "Usman Ahmed", city: "Islamabad"},
  { name: "Fatima Noor",  city: "Quetta"},
  { name: "Bilal Hussain",  city: "Hyderabad"},
  { name: "Ayesha Malik",  city: "Faisalabad"},
  { name: "Hamza Iqbal", city: "Multan"},
];

const tableBody = document.getElementById("tableBody");
function displayData(data) {
  tableBody.innerHTML = "";
  data.forEach((user, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.city}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

displayData(users);

document.getElementById("searchInput").addEventListener("keyup", function () {
  const value = this.value.toLowerCase();
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(value)
  );
  displayData(filtered);
});




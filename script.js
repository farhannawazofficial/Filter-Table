const users = [
  { name: "Ali Raza", city: "Karachi", age: 22 },
  { name: "Sara Khan", city: "Lahore", age: 25 },
  { name: "Usman Ahmed", city: "Islamabad", age: 28 },
  { name: "Fatima Noor",  city: "Quetta", age: 21 },
  { name: "Bilal Hussain",  city: "Hyderabad", age: 26 },
  { name: "Ayesha Malik",  city: "Faisalabad", age: 24 },
  { name: "Hamza Iqbal", city: "Multan", age: 29 },
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
        <td>${user.age}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

displayData(users);

document.getElementById("searchInput").addEventListener("keyup", function () {
  const value = this.value.toLowerCase();
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(value) ||
    user.city.toLowerCase().includes(value)
  );
  displayData(filtered);
});


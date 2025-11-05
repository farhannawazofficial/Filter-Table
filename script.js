const users = [
  { name: "Ali Raza", email: "ali.raza@gmail.com", city: "Karachi", age: 22 },
  { name: "Sara Khan", email: "sara.khan@yahoo.com", city: "Lahore", age: 25 },
  { name: "Usman Ahmed", email: "usman.ahmed@hotmail.com", city: "Islamabad", age: 28 },
  { name: "Fatima Noor", email: "fatima.noor@gmail.com", city: "Quetta", age: 21 },
  { name: "Bilal Hussain", email: "bilal.hussain@gmail.com", city: "Hyderabad", age: 26 },
  { name: "Ayesha Malik", email: "ayesha.malik@gmail.com", city: "Faisalabad", age: 24 },
  { name: "Hamza Iqbal", email: "hamza.iqbal@gmail.com", city: "Multan", age: 29 },
];

const tableBody = document.getElementById("tableBody");
function displayData(data) {
  tableBody.innerHTML = "";
  data.forEach((user, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
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
    user.email.toLowerCase().includes(value) ||
    user.city.toLowerCase().includes(value)
  );
  displayData(filtered);
});

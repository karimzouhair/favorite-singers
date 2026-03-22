const singers = [
  {
    name: "The Weeknd",
    dob: "Feb 16, 1990",
    songs: "Blinding Lights, Starboy"
  },
  {
    name: "Adele",
    dob: "May 5, 1988",
    songs: "Hello, Rolling in the Deep"
  },
  {
    name: "Bad Bunny",
    dob: "Mar 10, 1994",
    songs: "Tití Me Preguntó, Dakiti"
  },
  {
    name: "Dua Lipa",
    dob: "Aug 22, 1995",
    songs: "Levitating, Don't Start Now"
  }
];
const tableBody = document.getElementById("tableBody");

singers.forEach(singer => {
  const row = `
    <tr>
      <td class="fw-bold text-primary">${singer.name}</td>
      <td>${singer.dob}</td>
      <td class="text-success">${singer.songs}</td>
    </tr>
  `;
  tableBody.innerHTML += row;
});
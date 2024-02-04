const parent = document.querySelector(".parent");

window.addEventListener("keydown", (event) => {
  parent.innerHTML = `
  <table>
  <tr>
  <th>
  Key</th>
  <th>
  KeyCode</th>
  <th>
  Code</th>
  </tr>
    <tr>
      <td>${event.key}</td>
      <td>${event.keyCode}</td>
      <td>${event.code}</td>
    </tr>
  </table>
  `;
});

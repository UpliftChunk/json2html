export default function json2html(data) {
  let html = '<table data-user="singasanidurganitishkrishna@gmail.com">';

  html += `
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
  `;

  // Populate the table rows with data
  data.forEach(item => {
    html += '<tr>';
    html += `<td>${item.Name || ""}</td>`;
    html += `<td>${item.Age || ""}</td>`;
    html += '</tr>';
  });

  html += '</tbody></table>';

  return html;
}

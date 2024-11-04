document.getElementById("filterBtn").addEventListener("click", function () {
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const tableBody = document.querySelector("#resultsTable tbody");

  // Clear the current rows
  tableBody.innerHTML = "";

  // Sample data for demonstration purposes
  const data = [
    { date: "2024-10-01", ripe: 150, raw: 10 },
    { date: "2024-10-02", ripe: 200, raw: 15 },
    { date: "2024-10-03", ripe: 100, raw: 20 },
    { date: "2024-10-04", ripe: 250, raw: 30 },
    // Add more sample data or fetch from database
  ];

  // Filter data based on selected date range
  const filteredData = data.filter((row) => {
    return row.date >= startDate && row.date <= endDate;
  });

  // Populate the table with filtered data
  filteredData.forEach((row) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
            <td>${row.date}</td>
            <td>${row.ripe}</td>
            <td>${row.raw}</td>
        `;
    tableBody.appendChild(newRow);
  });

  // If no data matches the filter, display a message
  if (filteredData.length === 0) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td colspan="3">No data available for selected date range.</td>`;
    tableBody.appendChild(newRow);
  }
});

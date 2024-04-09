// JS file: fetchElements.js

// Function to fetch elements from JSON file
function fetchElements() {
  fetch('data.json')
      .then(response => response.json())
      .then(data => {
          // Fetch HTML elements and populate them with data from JSON
          const locationsSection = document.getElementById('locations');
          locationsSection.innerHTML = `
              <article class="location">
                  <h4>${data.locations[0].name}</h4>
                  <iframe src="${data.locations[0].mapSrc}" width="550" height="450" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                  <img src="${data.locations[0].imageSrc}" alt="${data.locations[0].altText}" width="450">
                  <p>${data.locations[0].description}</p>
              </article>
          `;
          
          const wildlifeTableSection = document.getElementById('wildlife-table');
          wildlifeTableSection.innerHTML = `
              <h2>${data.wildlifeTable.title}</h2>
              <table>
                  <thead>
                      <tr>
                          <th>${data.wildlifeTable.columns[0]}</th>
                          <th>${data.wildlifeTable.columns[1]}</th>
                          <th>${data.wildlifeTable.columns[2]}</th>
                      </tr>
                  </thead>
                  <tbody>
                      ${data.wildlifeTable.rows.map(row => `
                          <tr>
                              <td>${row[0]}</td>
                              <td>${row[1]}</td>
                              <td><img src="${row[2]}" alt="${row[0]}" width="200"></td>
                          </tr>
                      `).join('')}
                  </tbody>
              </table>
          `;
      })
      .catch(error => console.log('Error fetching data:', error));
}

// Call the function to fetch elements
fetchElements();

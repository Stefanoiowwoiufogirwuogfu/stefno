// wilpathuwa.js

document.addEventListener("DOMContentLoaded", function() {
  fetch('../wilpathu.json')
      .then(response => response.json())
      .then(data => {
          // Update header
          const header = document.querySelector('header');
          const { logo, title, subTitle, navLinks } = data.html.head;
          header.innerHTML = `
              <div class="container">
                  <img id="logo" src="${logo.src}" alt="${logo.alt}" width="${logo.width}" height="${logo.height}">
                  <div class="text-container">
                      <h1>${title}</h1>
                      <h3>${subTitle}</h3>
                  </div>
              </div>
              <div class="nav-bar">
                  <ul>
                      ${navLinks.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
                  </ul>
              </div>
          `;

          // Update main sections
          const mainSections = document.querySelectorAll('main section');
          mainSections.forEach((section, index) => {
              const sectionData = data.html.body.main.section[index];
              if (sectionData) {
                  section.innerHTML = `
                      <div class="${sectionData.class || ''}">
                          ${sectionData.h4 ? `<h4>${sectionData.h4}</h4>` : ''}
                          ${sectionData.p ? `<p>${sectionData.p}</p>` : ''}
                          ${sectionData.img ? `<img src="${sectionData.img.src}" alt="${sectionData.img.alt}" width="${sectionData.img.width}" />` : ''}
                      </div>
                  `;
              }
          });

          // Update footer
          const footer = document.querySelector('footer');
          footer.innerHTML = `<div class="footer-container"><p>&copy; ${data.html.footer.year} ${data.html.footer.website}. All rights reserved.</p></div>`;
      })
      .catch(error => console.error('Error fetching data:', error));
});

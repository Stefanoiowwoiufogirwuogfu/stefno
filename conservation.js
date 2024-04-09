// conservation.js

document.addEventListener("DOMContentLoaded", function () {
  fetch('../conservation.json')
      .then(response => response.json())
      .then(data => {
          updateHTML(data);
      })
      .catch(error => console.error('Error fetching data:', error));
});

function updateHTML(data) {
  const { html } = data;

  // Update background image
  document.body.style.backgroundImage = `url(${html.body.style.backgroundImage})`;

  // Update header
  const headerContainer = document.querySelector('.container');
  headerContainer.innerHTML = '';
  const { img, div } = html.body.header.div;
  const logoImg = document.createElement('img');
  Object.entries(img).forEach(([key, value]) => {
      logoImg.setAttribute(key, value);
  });
  headerContainer.appendChild(logoImg);
  const textContainer = document.createElement('div');
  textContainer.className = 'text-container';
  const h1 = document.createElement('h1');
  h1.textContent = div.h1;
  const h3 = document.createElement('h3');
  h3.textContent = div.h3;
  textContainer.appendChild(h1);
  textContainer.appendChild(h3);
  headerContainer.appendChild(textContainer);

  // Update Department of Wildlife Conservation
  const deptHeader = document.querySelector('.hdn-1');
  deptHeader.innerHTML = html.body.h4.text;

  // Update Introduction section
  const introSection = document.querySelector('.cnt-2');
  introSection.querySelector('h2').textContent = html.body.section.h2;
  introSection.querySelector('.txt-cnt-2 p').textContent = html.body.section.div[0].p;
  introSection.querySelector('.map-img img').src = html.body.section.div[1].img.src;

  // Update Flex Container
  const flexContainer = document.querySelector('.flex-cnt');
  flexContainer.innerHTML = '';
  html.body.div.div.forEach(item => {
      const div = document.createElement('div');
      const img = document.createElement('img');
      img.src = item.img.src;
      img.width = item.img.width;
      div.appendChild(img);
      flexContainer.appendChild(div);
  });

  // Update footer
  const footer = document.querySelector('footer .footer-container p');
  footer.textContent = html.footer.p;
}

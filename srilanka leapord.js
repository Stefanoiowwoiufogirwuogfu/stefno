// JavaScript file: fetchElements.js

// Fetching JSON data
fetch('../srilanka leapord.json')
  .then(response => response.json())
  .then(data => {
    // Accessing HTML elements
    const title = document.querySelector('title');
    const logo = document.getElementById('logo');
    const navLinks = document.querySelectorAll('.nav-bar ul li a');
    const topics = document.querySelectorAll('.topic h4');
    const sections = document.querySelectorAll('section');

    // Updating HTML content with JSON data
    title.textContent = data.html.head.title;

    logo.src = data.html.body.header.div.img.src;
    logo.alt = data.html.body.header.div.img.alt;
    logo.width = data.html.body.header.div.img.width;
    logo.height = data.html.body.header.div.img.height;

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].href = data.html.body.header.div.ul.li[i].a.href;
      navLinks[i].textContent = data.html.body.header.div.ul.li[i].a.text;
    }

    for (let i = 0; i < topics.length; i++) {
      topics[i].textContent = data.html.body.main.div[i].h4;
    }

    for (let i = 0; i < sections.length; i++) {
      sections[i].className = data.html.body.main.div.section[i].class;
      sections[i].querySelector('h3').textContent = data.html.body.main.div.section[i].h3;
      sections[i].querySelector('p').textContent = data.html.body.main.div.section[i].p;
      if (sections[i].className === 'threaths' || sections[i].className === 'threats-to-overcome') {
        sections[i].querySelector('img').src = data.html.body.main.div.section[i].img.src;
        sections[i].querySelector('img').width = data.html.body.main.div.section[i].img.width;
      }
    }
  })
  .catch(error => console.log('Error fetching JSON data:', error));

document.addEventListener("DOMContentLoaded", function() {
  fetch('../yala.json')
  .then(response => response.json())
  .then(data => {
      // Update title
      document.title = data.html.head.title;

      // Update stylesheet link
      const stylesheet = document.querySelector('link[rel="stylesheet"]');
      stylesheet.href = data.html.head.link.href;

      // Update script source
      const script = document.querySelector('script');
      script.src = data.html.head.script.src;
      script.defer = data.html.head.script.defer;

      // Update body background image
      document.body.style.backgroundImage = `url(${data.html.body.style})`;

      // Update logo
      const logo = document.getElementById('logo');
      logo.src = data.html.body.header.div.img.src;
      logo.alt = data.html.body.header.div.img.alt;
      logo.width = data.html.body.header.div.img.width;
      logo.height = data.html.body.header.div.img.height;

      // Update header texts
      const headerTexts = document.querySelectorAll('.text-container h1, .text-container h3');
      headerTexts[0].textContent = data.html.body.header.div.div.h1;
      headerTexts[1].textContent = data.html.body.header.div.div.h3;

      // Update navigation links
      const navLinks = document.querySelectorAll('.nav-bar ul li a');
      navLinks.forEach((link, index) => {
          link.href = data.html.body.header.div.class.nav-bar.ul.li[index].a.href;
          link.textContent = data.html.body.header.div.class.nav-bar.ul.li[index].a.text;
      });

      // Update about section
      const aboutSection = document.getElementById('about');
      aboutSection.querySelector('.yala').textContent = data.html.body.main.section[0].p.text;
      aboutSection.querySelector('.cnt-1 p').textContent = data.html.body.main.section[0].section.div.p;

      // Update history section
      const historySection = document.getElementById('historybg');
      historySection.querySelector('.history h4').textContent = data.html.body.main.section[1].div.h4;
      historySection.querySelector('.history p').textContent = data.html.body.main.section[1].div.p;

      // Update location section
      const locationSection = document.getElementById('locationbg');
      locationSection.querySelector('.location h4').textContent = data.html.body.main.section[2].div.h4;
      locationSection.querySelector('.location img').src = data.html.body.main.section[2].div.img.src;
      locationSection.querySelector('.location img').alt = data.html.body.main.section[2].div.img.alt;
      locationSection.querySelector('.location img').width = data.html.body.main.section[2].div.img.width;
      locationSection.querySelector('.location p').textContent = data.html.body.main.section[2].div.p;

      // Update wildlife section
      const wildlifeSection = document.querySelector('.wildlifebg');
      wildlifeSection.querySelector('.wildlife h4').textContent = data.html.body.main.section[3].div.h4;
      wildlifeSection.querySelector('.wildlife div img#push').src = data.html.body.main.section[3].div.div.img[0].src;
      wildlifeSection.querySelector('.wildlife div img').forEach((img, index) => {
          img.src = data.html.body.main.section[3].div.div.img[index + 1].src;
          img.alt = data.html.body.main.section[3].div.div.img[index + 1].alt;
          img.width = data.html.body.main.section[3].div.div.img[index + 1].width;
      });
      wildlifeSection.querySelector('.wildlife p').textContent = data.html.body.main.section[3].div.p;

      // Update conservation section
      const conservationSection = document.querySelector('.conservation');
      conservationSection.querySelector('.conservation-efforts h4').textContent = data.html.body.main.section[4].div.h4;
      conservationSection.querySelector('.conservation-efforts img').src = data.html.body.main.section[4].div.img.src;
      conservationSection.querySelector('.conservation-efforts img').alt = data.html.body.main.section[4].div.img.alt;
      conservationSection.querySelector('.conservation-efforts img').width = data.html.body.main.section[4].div.img.width;
      conservationSection.querySelector('.conservation-efforts p').textContent = data.html.body.main.section[4].div.p;
  })
  .catch(error => console.error('Error fetching data:', error));
});

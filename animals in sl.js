// Fetching the JSON data
fetch('animals in sl.json')
  .then(response => response.json())
  .then(data => {
    // Accessing the sections
    const sections = data.sections;

    // Dynamically accessing the data
    sections.forEach(section => {
      const sectionClass = section.class;
      const sectionChildren = section.div.children;

      // Accessing specific elements within the section
      sectionChildren.forEach(child => {
        if (child.h4) {
          const subtext = child.h4.text;
          console.log('Subtext:', subtext);
        } else if (child.div) {
          const imageSrc = child.div.children[0].img.src;
          console.log('Image source:', imageSrc);
        } else if (child.p) {
          const paragraphText = child.p.text;
          console.log('Paragraph text:', paragraphText);
        }
      });
    });
  })
  .catch(error => console.error('Error fetching data:', error));

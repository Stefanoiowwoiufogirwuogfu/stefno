fetch('index.json')
  .then(response => response.json())
  .then(data => {
    // Accessing sections
    const sections = data.sections;

    // Looping through sections
    sections.forEach(section => {
      const sectionClass = section.class;
      const sectionChildren = section.children || section.div.children; // Handling different structure for cnt-2 and cnt-3

      // Looping through section children
      sectionChildren.forEach(child => {
        const elementType = Object.keys(child)[0]; // Getting the element type (e.g., 'p', 'h4', 'div')
        const elementAttributes = child[elementType]; // Getting the attributes of the element

        // Creating the element
        const element = document.createElement(elementType);

        // Adding attributes to the element
        Object.keys(elementAttributes).forEach(attribute => {
          if (attribute !== 'text' && attribute !== 'x-text') { // Exclude 'text' and 'x-text' attributes
            element.setAttribute(attribute, elementAttributes[attribute]);
          }
        });

        // Checking if 'x-text' attribute exists
        if (elementAttributes['x-text']) {
          // Dynamically setting text content
          const dynamicText = document.createTextNode(elementAttributes['x-text']);
          element.appendChild(dynamicText);
        } else {
          // Setting static text content
          const staticText = document.createTextNode(elementAttributes['text']);
          element.appendChild(staticText);
        }

        // Appending the element to the section with the specified class
        document.querySelector(`.${sectionClass}`).appendChild(element);
      });
    });
  })
  .catch(error => console.error('Error fetching data:', error));

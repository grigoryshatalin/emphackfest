const { JSDOM } = require('jsdom');
const axios = require('axios');

function redmondcrawler(){
const websiteurl = "https://www.redmond.gov/265/Old-Fire-House-Teen-Center"
const parentlocation = "#secondaryMenusecondaryNav"
const childlocation = "a.navMainItem"
axios.get(websiteurl)
  .then((response) => {
    const html = response.data;

    // Create a new JSDOM instance
    const dom = new JSDOM(html);

    // Now you can work with the DOM using jsdom
    const document = dom.window.document;

    // Example: Access and manipulate elements
    const heading = document.querySelector(parentlocation).querySelectorAll(childlocation)
    // console.log(heading[0].innerHTML)
    for(let i=0; i<heading.length; i++){
        console.log(heading[i].innerHTML.replace(/&\w+;/g, ''));
    }
  })
  .catch((error) => {
    console.error('Error fetching HTML:', error);
  });
}
function bellevuecrawler(){
  const websiteurl = "https://bellevuewa.gov/volunteering/teen"
  const parentlocation = "ul"
  const childlocation = "a"
  
  axios.get(websiteurl)
    .then((response) => {
      const html = response.data;
  
      // Create a new JSDOM instance
      const dom = new JSDOM(html);
  
      // Now you can work with the DOM using jsdom
      const document = dom.window.document;
  
      // Example: Access and manipulate elements
      const heading = document.querySelectorAll(parentlocation)[9].querySelectorAll(childlocation)
      // console.log(heading[0].innerHTML)
      for(let i=0; i<heading.length; i++){
          console.log(heading[i].innerHTML.replace(/&\w+;/g, ''));
      }
    })
    .catch((error) => {
      console.error('Error fetching HTML:', error);
    });
  }
  function seattlecrawler() {
    const websiteurl = "https://www.seattle.gov/youth-programs";
    const parentlocation = "div.content";
  
    axios.get(websiteurl)
      .then((response) => {
        const html = response.data;
  
        // Create a new JSDOM instance
        const dom = new JSDOM(html);
  
        // Now you can work with the DOM using jsdom
        const document = dom.window.document;
  
        // Example: Access and manipulate elements
        const headings = document.querySelectorAll(parentlocation);
  
        headings.forEach((heading) => {
          const extractedData = extractTextFromHTML(heading);
          console.log('Title: ' + extractedData.title);
          console.log('Excerpt: ' + extractedData.excerpt);
        });
      })
      .catch((error) => {
        console.error('Error fetching HTML:', error);
      });
  }
  
  function extractTextFromHTML(heading) {
    const titleElement = heading.querySelector('.cardTitle');
    const excerptElement = heading.querySelector('.cardExcerpt');
  
    const title = titleElement ? titleElement.textContent.trim() : '';
    const excerpt = excerptElement ? excerptElement.textContent.trim() : '';
  
    return {
      title: title,
      excerpt: excerpt
    };
  }
  



module.exports = {
  redmondcrawler, bellevuecrawler, seattlecrawler
};

// volunteercrawler("https://bellevuewa.gov/volunteering/teen", "ul.menu", "menu-item")

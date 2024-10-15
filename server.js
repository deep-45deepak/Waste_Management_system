//Array used in traverse across file it verify input for further operation
const Glass = ["glass","glass bottle","window glass","mirror","jar","glass beaker",
"mug","wine cork","glass pebbles","glass frit","glass picture frame","glass marble",
  "old television","light bulb","wine cork","led bulb","glass pebbles"];

const plastic = ["plastic","polythene","pvc pipe","pipes","pipe","plastic bottle","bottle","plastic bags","toys","plastic straws","plastic cups","plastic film","plastic buckets","plastic cards","plastic sunglasses","plastic headphone","plastic keyboard keys","plastic mouse","plastic watch strap",];

const paper = ["paper","newspaper","magazine","cardboard","tissue paper","paper bags","gift wrapping paper","envelopes","letters","paper cups","file holders","flyers","pulp","filter paper","posters","calenders","greeting card","cards","books","milk cartons","paper towels","paper napkins","egg carton","disposal coffee cups","pizza box","paper plates","paper cups",];

const electronic = ["electronic","smartphones","gaming console","television","scanners","printers","fax machines","dvd player","music system","music player","earbuds","earphones","computer","refrigerators","ac","Air conditioners","dryers","microwaves","toaster","vacuum cleaner","oven","motors","led light","cable","fluorescent lamp"];

const metal = ["metal","iron","machinery","car parts","can","foil","batteries","cell","thermometers","aluminum can","metallic paints","iron nails"];

const organic = ["organic","food","food waste","eggshell","dairy products","fruit peels","vegetables peels","tea bags","manure","wood ashes","flowers"];

// DOM manipulation
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("submitBtn");
const content = document.getElementById("activeWasteInfo");
const result = document.getElementById("result");

// clicking effect
searchButton.onclick = () =>{
  searchButton.style.backgroundColor = "darkgreen";
}

// function to calculate the index for traverse across the file.
function findIndexPlusOne(arr, input) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === input) {
      return i+1;
    }
  }
  return null;
}


// add event listener for on btn click operation.
searchButton.addEventListener("click", (e) => {
  content.style.display = "block";
  content.style.padding = "5em";
  e.preventDefault();
  // input value of the user.
  const wasteType = searchInput.value.trim().toLowerCase();
  console.log("Input is : ", wasteType);
  // index returned dby the index function
  const organicIndex = findIndexPlusOne(organic, wasteType);
  if (organicIndex !== null) {
    // open file.
    fetch("./database/organic.txt")
      .then((response) => response.text())
      .then((fileContent) => {
        const idx = organicIndex;
        console.log(idx);
        const startIndex = fileContent.indexOf(idx.toString());
        const endIndex = fileContent.indexOf(">>", startIndex);
        const relevantContent = fileContent.substring(startIndex, endIndex);
        result.innerText = relevantContent;
        resultTitle.innerText = wasteType;
      });
  }

  const electronicIndex = findIndexPlusOne(electronic, wasteType);
  if (electronicIndex !== null) {
    // open file
    fetch("./database/electronics.txt")
      .then((response) => response.text())
      .then((fileContent) => {
        const idx = electronicIndex;
        console.log(idx);
        const startIndex = fileContent.indexOf(idx.toString());
        const endIndex = fileContent.indexOf(">>", startIndex);
        const relevantContent = fileContent.substring(startIndex, endIndex);
        result.innerText = relevantContent;
        resultTitle.innerText = wasteType;
      });
  }

  const paperIndex = findIndexPlusOne(paper, wasteType);
  if (paperIndex !== null) {
    fetch("./database/paper.txt")
      .then((response) => response.text())
      .then((fileContent) => {
        const idx = paperIndex;
        console.log(idx);
        const startIndex = fileContent.indexOf(idx.toString());
        const endIndex = fileContent.indexOf(">>", startIndex);
        const relevantContent = fileContent.substring(startIndex, endIndex);
        result.innerText = relevantContent;
        resultTitle.innerText = wasteType;
      });
  }

  const metalIndex = findIndexPlusOne(metal, wasteType);
  if (metalIndex !== null) {
    fetch("./database/metal.txt")
      .then((response) => response.text())
      .then((fileContent) => {
        const idx = metalIndex;
        console.log(idx);
        const startIndex = fileContent.indexOf(idx.toString());
        const endIndex = fileContent.indexOf(">>", startIndex);
        const relevantContent = fileContent.substring(startIndex, endIndex);
        result.innerText = relevantContent;
        resultTitle.innerText = wasteType;
      });
  }

  const glassIndex = findIndexPlusOne(Glass, wasteType);
  if (glassIndex !== null) {
    fetch("./database/glass.txt")
      .then((response) => response.text())
      .then((fileContent) => {
        const idx = glassIndex;
        console.log(idx);
        const startIndex = fileContent.indexOf(idx.toString());
        const endIndex = fileContent.indexOf(">>", startIndex);
        const relevantContent = fileContent.substring(startIndex, endIndex);
        result.innerText = relevantContent;
        resultTitle.innerText = wasteType;
      });
  }

  const plasticIndex = findIndexPlusOne(plastic, wasteType);
  if (plasticIndex !== null) {
    fetch("./database/plastic.txt")
      .then((response) => response.text())
      .then((fileContent) => {
        const idx = plasticIndex;
        console.log(idx);
        const startIndex = fileContent.indexOf(idx.toString());
        const endIndex = fileContent.indexOf(">>", startIndex);
        const relevantContent = fileContent.substring(startIndex, endIndex);
        result.innerText = relevantContent;
        resultTitle.innerText = wasteType;
      });
  } else {
    result.innerText = "Not Found \nSorry we are working on it.";
  }
});

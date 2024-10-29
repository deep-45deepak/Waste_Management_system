//Array used in traverse across file it verify input for further operation
const Glass = ["glass","glass bottle","window glass","mirror","jar","glass beaker",
"mug","wine cork","glass pebbles","glass frit","glass picture frame","glass marble",
  "old television","light bulb","wine cork","led bulb","glass pebbles"];

const plastic = ["plastic","polythene","pvc pipe","pipes","pipe","plastic bottle","bottle","plastic bags","toys","plastic straws","plastic cups","plastic film","plastic buckets","plastic cards","plastic sunglasses","plastic headphone","plastic keyboard keys","plastic mouse","plastic watch strap"];

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
  e.preventDefault();
  content.style.display = "block";
  content.style.padding = "5em";
  // content.style.textAlign = "center";
  // content.style.width = "60vw";
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
        // console.log(idx);
        const startIndex = fileContent.indexOf(idx.toString());
        const endIndex = fileContent.indexOf(">>", startIndex);
        const relevantContent = fileContent.substring(startIndex, endIndex);
        result.innerText = relevantContent;
      });
  }

  const electronicIndex = findIndexPlusOne(electronic, wasteType);
  if (electronicIndex !== null) {
    // open file
    fetch("./database/electronics.txt")
      .then((response) => response.text())
      .then((fileContent) => {
        const idx = electronicIndex;
        // console.log(idx);
        const startIndex = fileContent.indexOf(idx.toString());
        const endIndex = fileContent.indexOf(">>", startIndex);
        const relevantContent = fileContent.substring(startIndex, endIndex);
        result.innerText = relevantContent;
      });
  }

  const paperIndex = findIndexPlusOne(paper, wasteType);
  if (paperIndex !== null) {
    fetch("./database/paper.txt")
      .then((response) => response.text())
      .then((fileContent) => {
        const idx = paperIndex;
        // console.log(idx);
        const startIndex = fileContent.indexOf(idx.toString());
        const endIndex = fileContent.indexOf(">>", startIndex);
        const relevantContent = fileContent.substring(startIndex, endIndex);
        result.innerText = relevantContent;
      });
  }

  const metalIndex = findIndexPlusOne(metal, wasteType);
  if (metalIndex !== null) {
    fetch("./database/metal.txt")
      .then((response) => response.text())
      .then((fileContent) => {
        const idx = metalIndex;
        // console.log(idx);
        const startIndex = fileContent.indexOf(idx.toString());
        const endIndex = fileContent.indexOf(">>", startIndex);
        const relevantContent = fileContent.substring(startIndex, endIndex);
        result.innerText = relevantContent;
      });
  }

  const glassIndex = findIndexPlusOne(Glass, wasteType);
  if (glassIndex !== null) {
    fetch("./database/glass.txt")
      .then((response) => response.text())
      .then((fileContent) => {
        const idx = glassIndex;
        // console.log(idx);
        const startIndex = fileContent.indexOf(idx.toString());
        const endIndex = fileContent.indexOf(">>", startIndex);
        const relevantContent = fileContent.substring(startIndex, endIndex);
        result.innerText = relevantContent;
      });
  }

  const plasticIndex = findIndexPlusOne(plastic, wasteType);
  if (plasticIndex !== null) {
    fetch("./database/plastic.txt")
      .then((response) => response.text())
      .then((fileContent) => {
        const idx = plasticIndex;
        // console.log(idx);
        const startIndex = fileContent.indexOf(idx.toString());
        const endIndex = fileContent.indexOf(">>", startIndex);
        const relevantContent = fileContent.substring(startIndex, endIndex);
        result.innerText = relevantContent;
      });
  } else {
    result.innerText = "Not Found \nSorry we are working on it.";
    result.style.width = "80vw";
  }
});



// function to check for the image of waste.

function getImage(input) {
  const wasteTypes = {
    glass: ["glass","glass bottle","window glass","mirror","jar","glass beaker",
  "mug","wine cork","glass pebbles","glass frit","glass picture frame","glass marble",
  "old television","light bulb","wine cork","led bulb","glass pebbles"],
    paper: ["paper","newspaper","magazine","cardboard","tissue paper","paper bags","gift wrapping paper","envelopes","letters","paper cups","file holders","flyers","pulp","filter paper","posters","calenders","greeting card","cards","books","milk cartons","paper towels","paper napkins","egg carton","disposal coffee cups","pizza box","paper plates","paper cups"],
    plastic: ["plastic","polythene","pvc pipe","pipes","pipe","plastic bottle","bottle","plastic bags","toys","plastic straws","plastic cups","plastic film","plastic buckets","plastic cards","plastic sunglasses","plastic headphone","plastic keyboard keys","plastic mouse","plastic watch strap"],
    metal: ["metal","iron","machinery","car parts","can","foil","batteries","cell","thermometers","aluminum can","metallic paints","iron nails"],
    electronic: ["electronic","smartphones","gaming console","television","scanners","printers","fax machines","dvd player","music system","music player","earbuds","earphones","computer","refrigerators","ac","Air conditioners","dryers","microwaves","toaster","vacuum cleaner","oven","motors","led light","cable","fluorescent lamp"],
    organic: ["organic","food","food waste","eggshell","dairy products","fruit peels","vegetables peels","tea bags","manure","wood ashes","flowers"]
  };

  for (const type in wasteTypes) {
    if (wasteTypes[type].includes(input) && type=="glass") {
      return `https://media.istockphoto.com/id/1313851024/video/young-man-male-hand-dropping-glass-plastic-bottle-into-recycle-bin-and-there-are-waste.mp4?s=mp4-640x640-is&k=20&c=_n-9ISggtq_vrODOC5GbQDHgwcOHvbGA8Rn6oOKYkZc=`;
    }else if(wasteTypes[type].includes(input) && type=="paper"){
      return `https://media.istockphoto.com/id/1446715733/video/white-paper.mp4?s=mp4-640x640-is&k=20&c=Wfh-HmQnsgxUdHCx5UWHOa-d3zZ-_EnyTRQTY0dz7EQ=`;
    }else if(wasteTypes[type].includes(input) && type=="plastic"){
      return `https://media.istockphoto.com/id/1129528570/video/waste-pollution-on-beach.mp4?s=mp4-640x640-is&k=20&c=o0ivxphA-fKtiCdR8LYHwIh7Wzl-DXLyQpIEQ3TQulY=`;
    }else if(wasteTypes[type].includes(input) && type=="metal"){
      return `https://media.istockphoto.com/id/1393638816/video/teenage-boy-throwing-garbage-to-separated-garbage-bins.mp4?s=mp4-640x640-is&k=20&c=wpTU-5Q3VKy5iEAJRLgVHU1YI8Wwy0QqRc9bv68amnU=`;
    }else if(wasteTypes[type].includes(input) && type=="organic"){
      return `https://media.istockphoto.com/id/1358881648/video/eco-friendly-asian-lgbtqia-people-are-composting-kitchen-waste-stock.mp4?s=mp4-640x640-is&k=20&c=ATKMs6n_hAL-t119b7tm57KI6G4bvQzjb3y6bzczgRc=`;
    }else if(wasteTypes[type].includes(input) && type=="electronic"){
      return `https://media.istockphoto.com/id/1776265487/video/electronic-waste-management-beautiful-asian-woman-puts-electronic-waste-into-a-plastic-bin-to.mp4?s=mp4-640x640-is&k=20&c=AdYQaGAmecrk4oa-XgtjJv883tJ-4GT_FS7Gochf5V8=`;
    }
  }
  return "https://media.istockphoto.com/id/1157150650/video/colored-garbage-bins-for-environmental-protection.mp4?s=mp4-640x640-is&k=20&c=xASMj0EJH0Mqp7Fcv4O1u-F84hGWZZVcb_rjb6_gtto=";
}

// image of waste.

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const wasteName = searchInput.value.trim();
  // console.log(wasteType);
  const image = getImage(wasteName);
  console.log(image);
  const activeWasteInfoContainer = document.querySelector("#resultImage");
  activeWasteInfoContainer.innerHTML =
  `
          <div class="flex justify-center items-center">
               <video control loop autoplay muted style="height:auto;width:auto;" src="${image}" alt="${wasteName} class="rounded-lg min-w-full h-auto" />
          </div>
  `;
  activeWasteInfoContainer.style.margin = "2em";
  activeWasteInfoContainer.style.height = "30vh";
  activeWasteInfoContainer.style.width = "40vw";
});


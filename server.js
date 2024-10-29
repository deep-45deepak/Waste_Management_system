// Array categories for waste types used for verification
const wasteCategories = {
    glass: ["glass", "glass bottle", "window glass", "mirror", "jar", "glass beaker",
      "mug", "wine cork", "glass pebbles", "glass frit", "glass picture frame", "glass marble",
      "old television", "light bulb", "wine cork", "led bulb", "glass pebbles"
    ],
    plastic: ["plastic", "polythene", "pvc pipe", "pipes", "pipe", "plastic bottle", "bottle",
      "plastic bags", "toys", "plastic straws", "plastic cups", "plastic film", "plastic buckets",
      "plastic cards", "plastic sunglasses", "plastic headphone", "plastic keyboard keys",
      "plastic mouse", "plastic watch strap"
    ],
    paper: ["paper", "newspaper", "magazine", "cardboard", "tissue paper", "paper bags",
      "gift wrapping paper", "envelopes", "letters", "paper cups", "file holders", "flyers",
      "pulp", "filter paper", "posters", "calendars", "greeting card", "cards", "books",
      "milk cartons", "paper towels", "paper napkins", "egg carton", "disposable coffee cups",
      "pizza box", "paper plates"
    ],
    electronic: ["electronic", "smartphones", "gaming console", "television", "scanners", "printers",
      "fax machines", "dvd player", "music system", "music player", "earbuds", "earphones", "computer",
      "refrigerators", "ac", "air conditioners", "dryers", "microwaves", "toaster", "vacuum cleaner",
      "oven", "motors", "led light", "cable", "fluorescent lamp"
    ],
    metal: ["metal", "iron", "machinery", "car parts", "can", "foil", "batteries", "cell",
      "thermometers", "aluminum can", "metallic paints", "iron nails"
    ],
    organic: ["organic", "food", "food waste", "eggshell", "dairy products", "fruit peels",
      "vegetable peels", "tea bags", "manure", "wood ashes", "flowers"
    ]
  };

  // DOM Elements
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("submitBtn");
  const content = document.getElementById("activeWasteInfo");
  const result = document.getElementById("result");
  const resultImage = document.getElementById("resultImage");

  // Style the search button on click
  searchButton.addEventListener("click", () => {
    searchButton.style.backgroundColor = "darkgreen";
  });

  // Function to find the index of a waste item in a category
  const findIndexPlusOne = (arr, input) => arr.indexOf(input) + 1 || null;

  // Function to fetch and display content from the database
  const fetchAndDisplayContent = (category, index) => {
    const filePath = `./database/${category}.txt`;

    fetch(filePath)
      .then(response => response.text())
      .then(fileContent => {
        const startIndex = fileContent.indexOf(index.toString());
        const endIndex = fileContent.indexOf(">>", startIndex);
        result.innerText = fileContent.substring(startIndex, endIndex);
      })
      .catch(() => {
        result.innerText = "Not Found\nSorry, we are working on it.";
      });
  };

  // Function to get video URL based on waste type
  const getWasteVideoUrl = (input) => {
    const videoUrls = {
      glass: "https://media.istockphoto.com/id/1313851024/video/young-man-male-hand-dropping-glass-plastic-bottle-into-recycle-bin-and-there-are-waste.mp4?s=mp4-640x640-is&k=20&c=_n-9ISggtq_vrODOC5GbQDHgwcOHvbGA8Rn6oOKYkZc=",
      paper: "https://media.istockphoto.com/id/1446715733/video/white-paper.mp4?s=mp4-640x640-is&k=20&c=Wfh-HmQnsgxUdHCx5UWHOa-d3zZ-_EnyTRQTY0dz7EQ=",
      plastic: "https://media.istockphoto.com/id/1129528570/video/waste-pollution-on-beach.mp4?s=mp4-640x640-is&k=20&c=o0ivxphA-fKtiCdR8LYHwIh7Wzl-DXLyQpIEQ3TQulY=",
      metal: "https://media.istockphoto.com/id/1393638816/video/teenage-boy-throwing-garbage-to-separated-garbage-bins.mp4?s=mp4-640x640-is&k=20&c=wpTU-5Q3VKy5iEAJRLgVHU1YI8Wwy0QqRc9bv68amnU=",
      organic: "https://media.istockphoto.com/id/1358881648/video/eco-friendly-asian-lgbtqia-people-are-composting-kitchen-waste-stock.mp4?s=mp4-640x640-is&k=20&c=ATKMs6n_hAL-t119b7tm57KI6G4bvQzjb3y6bzczgRc=",
      electronic: "https://media.istockphoto.com/id/1776265487/video/electronic-waste-management-beautiful-asian-woman-puts-electronic-waste-into-a-plastic-bin-to.mp4?s=mp4-640x640-is&k=20&c=AdYQaGAmecrk4oa-XgtjJv883tJ-4GT_FS7Gochf5V8=",
      default: "https://media.istockphoto.com/id/1832597308/video/endless-swirling-green-leaves-recycling-natural-materials-concept-of-using-clean-energy-from.jpg?s=640x640&k=20&c=OiJ3i71RLIelD6HmHp-WVUEafcBOd__19VNLQMq30vs="
    };

    for (const type in wasteCategories) {
      if (wasteCategories[type].includes(input)) return videoUrls[type];
    }
    return videoUrls.default;
  };

  // Display video for the identified waste type
  const displayWasteVideo = (input) => {
    const videoUrl = getWasteVideoUrl(input);
    resultImage.innerHTML = `
      <div class="flex justify-center items-center">
        <video controls loop autoplay muted class="rounded-lg" style="height:auto; width:auto;" src="${videoUrl}" alt="${input}" />
      </div>`;
    resultImage.style.margin = "2em";
    resultImage.style.height = "30vh";
    resultImage.style.width = "40vw";
  };

  // Main event listener for the search button
  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const wasteType = searchInput.value.trim().toLowerCase();
    content.style.display = "block";
    content.style.padding = "5em";

    // Check if input matches any category and fetch/display content
    for (const category in wasteCategories) {
      const index = findIndexPlusOne(wasteCategories[category], wasteType);
      if (index) {
        fetchAndDisplayContent(category, index);
        displayWasteVideo(wasteType);
        return;
      }
    }
    result.innerText = "Not Found\nSorry, we are working on it.";
    resultImage.innerHTML = '';
  });

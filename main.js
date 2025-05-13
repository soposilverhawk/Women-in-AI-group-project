const sliderSection = document.getElementById("slider-section");
let sliderData = [];
let sliderCount = 0;

fetch("sliderData.json")
  .then((res) => res.json())
  .then((data) => {
    // saves data to a local array to manipulate it easier
    sliderData = data;

    // renders the first slider item on first load of the page
    renderSliderContent();
  })
  .catch((error) => console.log(error));

// Handle clicks using event delegation to have listeners attached to each next and previous buttons
sliderSection.addEventListener("click", (e) => {
  const leftBtn = e.target.closest(".slider-control-left");
  const rightBtn = e.target.closest(".slider-control-right");

  if (leftBtn && sliderCount > 0) {
    sliderCount--;
    renderSliderContent();
  } else if (rightBtn && sliderCount < sliderData.length - 1) {
    sliderCount++;
    renderSliderContent();
  }
});

// renders slider description HTML and slider background img through styles
function renderSliderContent() {
  sliderSection.innerHTML = renderSliderDescriptionHTML(
    sliderData[sliderCount],
    sliderCount + 1,
    sliderData.length
  );

  sliderSection.style.background = `url(${sliderData[sliderCount].img})`;
  sliderSection.style.backgroundRepeat = "no-repeat";
  sliderSection.style.backgroundPosition = "center";
}

// helper function that renders slider description HTML
function renderSliderDescriptionHTML(
  { description, category, postDate },
  sliderItemCounter,
  sliderTotalItems
) {
  return `
    <div class="img-description-container">
      <div class="description-category-date-container">
        <p>
          <span class="category">${category}</span> &bull;
          <span class="date">${postDate}</span>
        </p>
      </div>
      <div class="description-txt">
        <h2>${description}</h2>
      </div>
      <div class="slider-controls-container slider-controls-desktop flex">
        <button class="slider-control-left slider-controls flex">
          <img src="./imgs/general-icons/arrow-left.png" alt="previous slider arrow" class="slider-controls" />
        </button>
        <p class="slider-numeration">
          <span id="current-slider-num-display">${sliderItemCounter}</span> /
          <span id="total-sliders-num-display">${sliderTotalItems}</span>
        </p>
        <button class="slider-control-right slider-controls">
          <img src="./imgs/general-icons/arrow-right.png" alt="next slider arrow" class="slider-controls flex" />
        </button>
      </div>
      <div class="slider-controls-container slider-controls-tablet-and-mobile flex">
        <button class="slider-control-left slider-controls flex">
          <img src="./imgs/general-icons/arrow-left.png" alt="previous slider arrow" class="slider-controls" />
        </button>
        <p class="slider-numeration">
          <span id="current-slider-num-display">${sliderItemCounter}</span> /
          <span id="total-sliders-num-display">${sliderTotalItems}</span>
        </p>
        <button class="slider-control-right slider-controls">
          <img src="./imgs/general-icons/arrow-right.png" alt="next slider arrow" class="slider-controls flex" />
        </button>
      </div>
    </div>
  `;
}

//burgerMenu
const hamburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
function toggleDropdown() {
  const dropdown = document.getElementById("dropdown-content"); // ან შენი კლასი თუ სხვაა
  dropdown.classList.toggle("show");
  console.log("taso");
}

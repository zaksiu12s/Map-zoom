{
  const map = document.querySelector("[data-id='map']");
  map.addEventListener("click", (e) => {
    zoom(e);
  });
}

// functions
function zoom(e) {
  const element = e.currentTarget;
  element.classList.toggle("active");

  if (!element.classList.contains("active")) {
    return;
  }

  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);

  x = (offsetX / element.offsetWidth) * 100;
  y = (offsetY / element.offsetHeight) * 100;

  element.style.backgroundPosition = x + "% " + y + "%";
}

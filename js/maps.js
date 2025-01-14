document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map-noivo").setView([38.819506, -9.124657], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([38.819506, -9.124657]).addTo(map);
});

document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map-noiva").setView([38.824351, -9.122824], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([38.824351, -9.122824]).addTo(map);
});

document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map-igreja").setView([38.826478, -9.12471], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([38.826478, -9.12471]).addTo(map);
});

document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map-quinta").setView([38.677882, -8.75453], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([38.677882, -8.75453]).addTo(map);
});

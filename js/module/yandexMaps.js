const map = L.map('map').setView([55.723151, 37.565021], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([55.723151, 37.565021]).addTo(map).bindPopup('GAME OVER - новый формат игр и отдыха').openPopup();

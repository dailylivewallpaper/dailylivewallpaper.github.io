fetch("apps.json")
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById("appGrid");
    data.forEach(app => {
      const card = document.createElement("div");
      card.className = "app-card";
      card.innerHTML = `
        <div class="app-cover-container">
          <img class="app-cover" src="${app.cover}" alt="${app.name}" loading="lazy">
        </div>
        <div class="app-info">
          <img class="app-icon" src="${app.icon}" alt="${app.name}" loading="lazy">
          <div class="app-text">
            <div class="app-name">${app.name}</div>
            <div class="app-desc">${app.short_desc}</div>
          </div>
        </div>
      `;
      card.addEventListener("click", () => {
        window.open(app.link, "_blank"); // Mở link ở tab mới
      });
      grid.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading apps.json", err));

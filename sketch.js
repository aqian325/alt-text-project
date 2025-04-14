let altTexts;

function preload() {
  altTexts = loadJSON("alttexts.json");
}

function setup() {
  noCanvas();
  const container = select("#grid");

  for (let i = 0; i < altTexts.length; i++) {
    let entry = altTexts[i];
    let tile = createDiv().addClass("tile");
    let img = createImg("images/" + entry.filename, entry.alt);
    img.parent(tile);
    container.child(tile);

    tile.mousePressed(() => showOverlay.call(tile, entry));
  }

  select("#closeBtn").mousePressed(hideOverlay);
}

function showOverlay(entry) {
  let tile = this.elt;
  let rect = tile.getBoundingClientRect();

  let clone = tile.cloneNode(true);
  clone.classList.add("clone-tile");
  document.body.appendChild(clone);

  clone.style.left = `${rect.left}px`;
  clone.style.top = `${rect.top}px`;
  clone.style.width = `${rect.width}px`;
  clone.style.height = `${rect.height}px`;

  void clone.offsetWidth;

  clone.style.left = `50%`;
  clone.style.top = `50%`;
  clone.style.transform = `translate(-50%, -50%) scale(1.8)`;

  setTimeout(() => {
    select("#overlayImg").attribute("src", "images/" + entry.filename);
    select("#overlayText").html(entry.alt);
    select("#overlay").removeClass("hidden");
    clone.remove();
  }, 400);
}

function hideOverlay() {
  select("#overlay").addClass("hidden");
}

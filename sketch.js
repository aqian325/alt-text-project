let data;

function preload() {
  // Load your cleaned JSON file
  data = loadJSON("alttexts_cleaned.json");
}

function setup() {
  noCanvas();
  const container = createDiv().id("grid");

  for (let i = 0; i < data.length; i++) {
    const entry = data[i];

        // 🟢 DEBUG HERE: Check what's coming from your JSON
        console.log("entry:", entry);
        console.log("filename:", entry.filename);
        console.log("ALT-TEXT:", entry["ALT-TEXT"]);
    
    const tile = createDiv().addClass("tile");

    const img = createImg("img/" + entry.filename, entry["ALT-TEXT"]).addClass("tile-img");
    const label = createDiv(entry["ALT-TEXT"]).addClass("alt-text");

    img.parent(tile);
    label.parent(tile);
    tile.parent(container);

    tile.mousePressed(() => {
      showDetail(entry);
    });
  }

  select("#closeBtn").mousePressed(() => {
    select("#detail-panel").removeClass("show");
  });
}

function showDetail(entry) {
  select("#detail-img").attribute("src", "img/" + entry.filename);
  select("#alt").html(entry["ALT-TEXT"]);
  select("#caption").html(entry["IMAGE CAPTION"]);
  select("#description").html(entry["IMAGE DESCRIPTION"]);
  select("#reflection").html(entry["REFLECTION"]);
  select("#sources").html(entry["SOURCES"]);
  select("#detail-panel").addClass("show");
}
console.log(data);

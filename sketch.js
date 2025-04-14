let table;

function preload() {
  table = loadTable("alttexts_cleaned.csv", "csv", "header");
}

function setup() {
  noCanvas();
  const container = select("#grid");

  for (let i = 0; i < table.getRowCount(); i++) {
    const row = table.getRow(i);
    const filename = row.getString("filename");
    const altText = row.getString("ALT-TEXT");

    const tile = createDiv().addClass("tile");

    const img = createImg("img/" + filename, altText).addClass("tile-img");
    const label = createDiv(altText).addClass("alt-text");

    img.parent(tile);
    label.parent(tile);
    tile.parent(container);

    // Pass row data into detail view on click
    tile.mousePressed(() => {
      showDetail(row);
    });
  }

  // Close the detail panel
  select("#closeBtn").mousePressed(() => {
    select("#detail-panel").removeClass("show");
  });
}

function showDetail(row) {
  select("#detail-img").attribute("src", "img/" + row.getString("filename"));
  select("#alt").html(row.getString("ALT-TEXT"));
  select("#caption").html(row.getString("IMAGE-CAPTION"));
  select("#description").html(row.getString("IMAGE-DESCRIPTION"));
  select("#reflection").html(row.getString("REFLECTION"));
  select("#sources").html(row.getString("SOURCES"));
  select("#detail-panel").addClass("show");
}

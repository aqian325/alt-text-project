let table;

function preload() {
  table = loadTable("alt-text-info-final0502.csv", "csv", "header");
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
    label.html(`${altText}<div class="name-tag">${row.getString("student-name")}</div>`);

    label.parent(tile);
    img.parent(tile);
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
  const filename = row.getString("filename");
  const altText = row.getString("ALT-TEXT");

  // Set image src and alt attributes directly
  const detailImg = document.getElementById("detail-img");
  detailImg.src = "img/" + filename;
  detailImg.alt = altText;

  // Populate the rest of the panel
  select("#student-name").html(row.getString("student-name"));
  select("#caption").html(row.getString("IMAGE-CAPTION"));
  select("#description").html(row.getString("IMAGE-DESCRIPTION"));
  select("#reflection").html(row.getString("REFLECTION"));
  select("#sources").html(row.getString("SOURCES"));

  select("#detail-panel").addClass("show");
}

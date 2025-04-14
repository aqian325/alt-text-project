let filenames = [
  "M162_B011_F049_PNS_GarmetWorkers_1985-1988_002.jpg",
  "M163_B012_F032_PNS_PRA_TuftsExpansion_nd_001.jpg",
  // "M163_B012_F032_PNS_PRA_TuftsExpansion_nd_002.jpg",
  "M210_B011_F041_CRCBP_P&LGarmentWorkers_001.jpg",
  "M210_B011_F041_CRCBP_P&LGarmentWorkers_002.jpg",
  "M210_B051_F002_AV_Photographs_Chinatown_001.jpg",
  // "M210_B051_F002_AV_Photographs_Chinatown_002.jpg",
  "M210_B051_F006_ChinatownHistoricalPhoto_nd_001.jpg",
  // "M210_B051_F006_ChinatownHistoricalPhoto_nd_002.jpg",
  "M210_B051_F006_ChinatownHistoricalPhoto_nd_003.jpg",
  // "M210_B051_F006_ChinatownHistoricalPhoto_nd_004.jpg",
  "M210_B051_F006_ChinatownHistoricalPhoto_nd_005.jpg",
  // "M210_B051_F006_ChinatownHistoricalPhoto_nd_006.jpg",
  "M210_B051_F006_ChinatownHistoricalPhoto_nd_007.jpg",
  // "M210_B051_F006_ChinatownHistoricalPhoto_nd_008.jpg",
  "M210_B051_F006_ChinatownHistoricalPhoto_nd_009.jpg",
  // "M210_B051_F006_ChinatownHistoricalPhoto_nd_010.jpg",
  "M210_B051_F006_ChinatownHistoricalPhoto_nd_011.jpg",
  // "M210_B051_F006_ChinatownHistoricalPhoto_nd_012.jpg",
  "M210_B051_F021_ContactSheets_nd_001.jpg",
  "M210_B051_F052_EducationInChina_nd_001.jpg",
  "M210_B052_F007_ImmigrantRightsRally_001.jpg",
  "M210_B052_F037_ParcelC_nd_001.jpg"
];

let altText = [
  "A black and white portrait of a young girl in a formal looking business blazer looks into the camera...",
  "A 222black and white portrait of a young girl in a formal looking business blazer looks into the camera...",
  "A 333black and white portrait of a young girl in a formal looking business blazer looks into the camera...",
  "A 444black and white portrait of a young girl in a formal looking business blazer looks into the camera...",
  "A 555black and white portrait of a young girl in a formal looking business blazer looks into the camera...",
  "A 666black and white portrait of a young girl in a formal looking business blazer looks into the camera...",
  "A 777black and white portrait of a young girl in a formal looking business blazer looks into the camera...",
  "A 888black and white portrait of a young girl in a formal looking business blazer looks into the camera...",
  "A 999black and white portrait of a young girl in a formal looking business blazer looks into the camera...",
  "A 000black and white portrait of a young girl in a formal looking business blazer looks into the camera...",
  "A black and white portrait of a young girl in a formal looking business blazer looks into the camera...",
  "A black and white portrait of a young girl in a formal looking business blazer looks into the camera...",
  "A 000black and white portrait of a young girl in a formal looking business blazer looks into the camera...",
  "A 000black and white portrait of a young girl in a formal looking business blazer looks into the camera...",
  "A black and white portrait of a young girl in a formal looking business blazer looks into the camera..."
  

];

function setup() {
  noCanvas();
  const container = createDiv().id("grid");

  for (let i = 0; i < filenames.length; i++) {
    const tile = createDiv().addClass("tile");

    const img = createImg("img/" + filenames[i], altText).addClass("tile-img");
    const label = createDiv(altText[i]).addClass("alt-text");

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

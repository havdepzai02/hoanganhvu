/* ==========================================================================
   MA TRẬN DỮ LIỆU CHUẨN XÁC 100% — TỔ 2: MỘT BỮA NO (NAM CAO)
   Căn cứ trực tiếp từ build_deck.py, build_assets.py và camera_matrix.json
   ========================================================================== */

const SW = 13.333;
const SH = 7.5;

// Tọa độ và kích thước tuyệt đối của từng Layer trích xuất từ camera_matrix.json
const SCENES = [
  // CẢNH 01 (0–8 s)
  {
    id: 1, dur_ms: 8000, style: "open",
    team: "TỔ 2", title: "MỘT BỮA NO", thesis: "Nam Cao", body: "Cái đói, thân phận và lòng người",
    scrim: { w: 8.2, a0: 0.88, a1: 0 },
    layers: {
      "layer-BG_Village":         [-1.0, -0.562, 15.333, 8.625, 1],
      "layer-Hero_Roofs":          [-1.0, -0.562, 15.333, 8.625, 1],
      "layer-FG_BlurredObjects":   [-1.0, -0.562, 15.333, 8.625, 1],
      "layer-FG_Dust":            [-1.0, -0.562, 15.333, 8.625, 0.5]
    },
    callouts: [],
    notes: `Mở đầu: Tổ 2 giới thiệu truyện ngắn Một bữa no của Nam Cao.
[MH] Toàn cảnh làng quê là hình minh họa nghệ thuật do nhóm dựng bằng code, không phải ảnh tư liệu và không tái hiện địa danh cụ thể trong truyện.`
  },

  // CẢNH 02 (8–20 s)
  {
    id: 2, dur_ms: 12000, style: "mid",
    title: "01. NAM CAO", thesis: "Nhìn thẳng vào đời sống của người nghèo",
    body: "Cây bút hiện thực xuất sắc của văn học Việt Nam trước 1945, quan tâm đến số phận người nghèo và chiều sâu tâm lý con người.",
    panel: [0.5, 2.903, 5.25, 3.817],
    layers: {
      "layer-BG_Interior":  [-1.303, -0.843, 16.33, 9.186, 1],
      "layer-BG_Light":     [-1.373, -0.907, 16.56, 9.315, 1],
      "layer-Hero_NamCao":   [6.857, 2.67, 6.6, 4.8, 1],
      "layer-FG_DoorFrame": [-1.607, -1.123, 17.327, 9.746, 0.7],
      "layer-FG_Dust":      [-1.653, -1.166, 17.48, 9.832, 0.5]
    },
    callouts: [
      { label: "Hiện thực", anchor: [10.157, 6.174], chip: [9.476, 5.184, 1.361, 0.38] },
      { label: "Thấu hiểu con người", anchor: [12.203, 5.55], chip: [9.563, 4.56, 2.289, 0.38] }
    ],
    notes: `[PT] Nam Cao (Trần Hữu Tri) là nhà văn hiện thực tiêu biểu giai đoạn 1930–1945; ngòi bút nhìn thẳng vào đời sống người nghèo và đi sâu vào tâm lý.
[MH] Bàn viết và đèn dầu là hình minh họa nghệ thuật của nhóm — KHÔNG phải ảnh chân dung hay ảnh tư liệu của nhà văn.`
  },

  // CẢNH 03 (20–33 s)
  {
    id: 3, dur_ms: 13000, style: "mid",
    title: "02. CÁI ĐÓI", thesis: "Cái ăn trở thành sức ép của sự sống",
    body: "Bà cụ goá bụa, con trai đã mất; ốm yếu, hết vốn buôn bán, bị chủ cho thôi việc trông trẻ. Cái đói dồn bà đến đường cùng.",
    panel: [0.5, 3.204, 5.25, 3.516],
    layers: {
      "layer-BG_Interior":    [-2.506, -1.263, 17.825, 10.027, 1],
      "layer-BG_Light":       [-2.853, -1.425, 18.4, 10.35, 1],
      "layer-Hero_Character": [7.243, 2.86, 3.298, 4.03, 1],
      "layer-Hero_Table":     [7.11, 5.547, 3.562, 1.781, 1],
      "layer-FG_DoorFrame":   [-4.012, -1.964, 20.317, 11.428, 0.7],
      "layer-FG_Dust":        [-4.243, -2.072, 20.7, 11.644, 0.5]
    },
    callouts: [
      { label: "Thiếu thốn", anchor: [8.714, 6.438], chip: [6.909, 5.047, 1.455, 0.38] },
      { label: "Thân phận mong manh", anchor: [9.221, 5.52], chip: [9.571, 4.53, 2.521, 0.38] }
    ],
    notes: `[VB] Chồng mất lúc con chào đời, con trai mất khi chưa kịp nuôi bà lúc già; bà ốm, hết vốn, đi trông trẻ bị cho thôi việc rồi đói kéo dài.
[PT] Cái đói là sức ép bao trùm, thúc đẩy toàn bộ tình huống.
[MH] Căn nhà ván, nón treo tường, mâm cơm nhỏ là chi tiết minh họa của nhóm; nhân vật vẽ không nét mặt.`
  },

  // CẢNH 04 (33–46 s)
  {
    id: 4, dur_ms: 13000, style: "mid",
    title: "03. MỘT BỮA NO", thesis: "Bữa ăn nhỏ mở ra bi kịch lớn",
    body: "Nhan đề nghe như may mắn, nhưng ẩn nghịch lý: bà cụ đói lả được ăn no ở nhà bà phó Thụ rồi chết sau chừng nửa tháng.",
    panel: [0.5, 3.618, 5.25, 3.102],
    layers: {
      "layer-BG_Interior":    [-5.962, -3.13, 23.307, 13.11, 0.6],
      "layer-BG_Light":       [-7.107, -3.722, 25.147, 14.145, 0.6],
      "layer-Hero_Character": [4.983, -0.584, 6.127, 7.489, 0.38],
      "layer-Hero_Table":     [6.427, 2.89, 6.84, 3.42, 1],
      "layer-FG_Dust":        [-11.687, -6.093, 32.507, 18.285, 0.6]
    },
    callouts: [
      { label: "Tình huống nghịch lý", anchor: [8.615, 4.6], chip: [4.765, 2.81, 2.35, 0.38] },
      { label: "Ý nghĩa nhan đề", anchor: [10.941, 4.6], chip: [9.979, 2.81, 1.925, 0.38] }
    ],
    notes: `[VB] Bà ăn đến quá no, tối về đau bụng, nôn, tiêu chảy rồi kiết lị; khoảng nửa tháng sau thì chết.
[PT] Nghịch lý: cái 'no' vốn là điều mong ước lại thành nguyên nhân dẫn đến cái chết — nhan đề mang sắc thái mỉa mai, xót xa.
[MH] Mâm cơm trong hình là minh họa, không khẳng định đúng từng món ăn trong truyện.`
  },

  // CẢNH 05 (46–59 s)
  {
    id: 5, dur_ms: 13000, style: "mid",
    title: "04. THÂN PHẬN CON NGƯỜI", thesis: "Hoàn cảnh đẩy con người vào tủi cực",
    body: "Bà tìm đến nhà bà phó Thụ, nơi cháu gái ở đợ. Bị coi như người ăn xin và bị nói mỉa, bà vẫn nhẫn nhịn vì không còn chỗ nương tựa.",
    panel: [0.5, 2.903, 5.25, 3.817],
    layers: {
      "layer-BG_Interior":    [-3.632, -1.629, 19.818, 11.148, 1],
      "layer-BG_Light":       [-4.24, -1.875, 20.853, 11.73, 1],
      "layer-Hero_Character": [6.607, 0.062, 6.17, 7.541, 1],
      "layer-FG_DoorFrame":   [-6.265, -2.695, 24.303, 13.671, 0.7],
      "layer-FG_Dust":        [-6.67, -2.859, 24.993, 14.059, 0.5]
    },
    callouts: [
      { label: "Hoàn cảnh", anchor: [11.666, 5.039], chip: [10.937, 3.649, 1.458, 0.38] },
      { label: "Phẩm giá", anchor: [9.877, 2.4], chip: [8.204, 2.21, 1.323, 0.38] }
    ],
    notes: `[VB] Đi bộ đến nhà bà phó Thụ gặp cháu gái; bà phó Thụ tưởng là người ăn xin và nói giọng mỉa mai.
[PT] Sự nhẫn nhục của bà là hệ quả của đói nghèo, không phải sự yếu đuối về nhân cách.
[MH] Hình người ngồi cúi đầu, ngược sáng không nét mặt diễn tả số phận bất hạnh.`
  },

  // CẢNH 06 (59–73 s)
  {
    id: 6, dur_ms: 14000, style: "mid",
    title: "05. NỖI TỦI CỰC", thesis: "Nhu cầu sống và phẩm giá va chạm",
    body: "Tay run, bà làm đổ nước mắm; mọi người buông bát rồi mà bà vẫn ăn tiếp, cháu gái xấu hổ quay đi. Miếng ăn thành miếng nhục.",
    panel: [0.5, 2.903, 5.25, 3.817],
    layers: {
      "layer-BG_Interior": [-3.08, -1.403, 18.323, 10.307, 0.8],
      "layer-BG_Light":    [-3.56, -1.597, 19.013, 10.695, 0.8],
      "layer-Hero_Hands":   [-2.527, -0.359, 21.528, 8.28, 1],
      "layer-FG_Dust":     [-5.48, -2.374, 21.773, 12.247, 0.5]
    },
    callouts: [
      { label: "Bàn tay run", anchor: [11.638, 3.284], chip: [10.884, 1.894, 1.508, 0.38] },
      { label: "Miếng ăn – miếng nhục", anchor: [8.646, 3.533], chip: [7.382, 2.543, 2.527, 0.38] },
      { label: "Vệt nước mắm đổ", anchor: [12.327, 6.679], chip: [9.944, 5.289, 2.033, 0.38] }
    ],
    notes: `[VB] Trong bữa cơm, tay bà run làm đổ nước mắm; bà phó Thụ buông đũa thì cả nhà dừng theo, riêng bà vẫn ăn tiếp; đứa cháu xấu hổ tránh nhìn.
[PT] Nhu cầu sinh tồn thắng lòng tự trọng nhưng để lại nỗi nhục: miếng ăn đồng thời là miếng nhục.
[MH] Cận cảnh bàn tay run (bóng kép) là cách diễn tả bằng hình ảnh của nhóm.`
  },

  // CẢNH 07 (73–86 s)
  {
    id: 7, dur_ms: 13000, style: "mid",
    title: "06. GIÁ TRỊ HIỆN THỰC", thesis: "Phơi bày sức ép của nghèo đói",
    body: "Giữa làng quê nghèo thời thuộc địa, bà cụ ốm yếu bị đẩy khỏi mọi chỗ làm rồi chết sau một bữa no hiếm hoi: một bản cáo trạng xã hội.",
    panel: [0.5, 2.903, 5.25, 3.817],
    layers: {
      "layer-BG_Village":       [-0.545, -0.692, 15.333, 8.625, 1],
      "layer-Hero_Roofs":        [-0.3, -0.763, 15.333, 8.625, 1],
      "layer-FG_BlurredObjects": [-0.09, -0.822, 15.333, 8.625, 1],
      "layer-FG_Dust":          [-0.02, -0.842, 15.333, 8.625, 0.5]
    },
    callouts: [
      { label: "Đời sống nông thôn", anchor: [7.98, 4.154], chip: [8.33, 3.964, 2.215, 0.38] },
      { label: "Số phận người nghèo", anchor: [12.58, 4.671], chip: [9.87, 4.481, 2.36, 0.38] }
    ],
    notes: `[PT] Truyện phơi bày cảnh nghèo đói của nông dân trước Cách mạng tháng Tám và thái độ thờ ơ, khắc nghiệt của những người có chút địa vị.
[MH] Cảnh làng quê là minh họa chung, không tái hiện địa danh cụ thể của truyện.`
  },

  // CẢNH 08 (86–99 s)
  {
    id: 8, dur_ms: 13000, style: "mid",
    title: "07. GIÁ TRỊ NHÂN ĐẠO", thesis: "Thấu hiểu nỗi đau, trân trọng con người",
    body: "Nam Cao không chỉ tả cái đói của thể xác. Ông cho thấy nỗi nhục của người già nghèo và gợi ta nhìn thấy nhân phẩm sau hình hài đáng thương.",
    panel: [0.5, 2.903, 5.25, 3.817],
    layers: {
      "layer-BG_Interior":    [-4.575, -2.114, 21.313, 11.989, 1],
      "layer-BG_Light":       [-5.4, -2.472, 22.693, 12.765, 1],
      "layer-Hero_Character": [6.363, -0.45, 6.808, 8.321, 1],
      "layer-FG_DoorFrame":   [-8.15, -3.666, 27.293, 15.353, 0.7],
      "layer-FG_Dust":        [-8.7, -3.905, 28.213, 15.87, 0.5]
    },
    callouts: [
      { label: "Cảm thông", anchor: [8.67, 3.399], chip: [6.847, 3.209, 1.473, 0.38] },
      { label: "Nhân phẩm", anchor: [9.971, 2.129], chip: [9.213, 1.139, 1.517, 0.38] }
    ],
    notes: `[PT] Giá trị nhân đạo thể hiện ở cái nhìn xót thương người nghèo và ở việc đòi lại nhân phẩm cho họ.
[MH] Ánh sáng ấm từ cửa chỉ là gợi tả cảm xúc xót xa, không báo hiệu kết thúc có hậu.`
  },

  // CẢNH 09 (99–113 s)
  {
    id: 9, dur_ms: 14000, style: "mid",
    title: "08. NGHỆ THUẬT", thesis: "Chi tiết đời thường, sức gợi sâu sắc",
    body: "Tình huống nghịch lý, chi tiết đời thường (bàn tay run, vệt nước mắm đổ) và lời nhận xét lạnh lùng của bà phó Thụ ở cuối truyện tạo giọng kể chua xót.",
    panel: [0.5, 2.903, 5.25, 3.817],
    layers: {
      "layer-BG_Interior":    [-1.942, -0.983, 16.828, 9.466, 1],
      "layer-BG_Light":       [-2.16, -1.08, 17.173, 9.66, 1],
      "layer-Hero_Character": [7.04, 0.886, 4.404, 5.383, 0.9],
      "layer-Hero_Table":     [7.517, 5.015, 4.37, 2.185, 0.95],
      "layer-FG_DoorFrame":   [-2.885, -1.403, 18.323, 10.307, 0.7],
      "layer-FG_Dust":        [-3.03, -1.468, 18.553, 10.436, 0.5]
    },
    callouts: [
      { label: "Tình huống nghịch lý", anchor: [8.915, 6.064], chip: [6.215, 4.674, 2.35, 0.38] },
      { label: "Chi tiết đời thường", anchor: [10.401, 6.064], chip: [10.751, 4.674, 2.114, 0.38] },
      { label: "Giọng kể chua xót", anchor: [9.374, 2.555], chip: [6.943, 2.365, 2.08, 0.38] }
    ],
    notes: `[VB] Cuối truyện, bà phó Thụ nhận xét bà cụ chết vì no và răn đám người hầu (diễn đạt lại theo bản dịch).
[PT] Nghệ thuật xây dựng mâu thuẫn đỉnh điểm, ngòi bút miêu tả tâm lý sắc sảo.`
  },

  // CẢNH 10 (113–127 s)
  {
    id: 10, dur_ms: 14000, style: "close",
    team: "TỔ 2 — MỘT BỮA NO", title: "09. GIÁ TRỊ TÁC PHẨM",
    thesis: "Đằng sau cái đói là câu chuyện về phẩm giá con người",
    body: "Cảm ơn thầy cô và các bạn đã lắng nghe",
    scrim: { w: 9.0, a0: 0.90, a1: 0 },
    layers: {
      "layer-BG_Interior": [-1.0, -0.562, 15.333, 8.625, 0.85],
      "layer-BG_Light":    [-1.0, -0.562, 15.333, 8.625, 0.85],
      "layer-Hero_Table":  [8.557, 5.245, 3.42, 1.71, 0.95, "assets/hero_table_empty.png"],
      "layer-FG_Dust":     [-1.0, -0.562, 15.333, 8.625, 0.5]
    },
    callouts: [],
    notes: `Kết: Một bữa no không chỉ nói về cái đói của thể xác mà còn về phẩm giá con người bị chà đạp; đó là đóng góp của Nam Cao ở mảng hiện thực nhân đạo.
[MH] Mâm cơm trống là hình ảnh gợi suy ngẫm của nhóm, không phải chi tiết nguyên văn.`
  }
];

const ALL_LAYER_IDS = [
  "layer-BG_Village", "layer-BG_Interior", "layer-BG_Light",
  "layer-Hero_Roofs", "layer-Hero_NamCao", "layer-Hero_Character",
  "layer-Hero_Table", "layer-Hero_Hands",
  "layer-FG_BlurredObjects", "layer-FG_DoorFrame", "layer-FG_Dust"
];

/* ==========================================================================
   STATE & CONTROL LOGIC
   ========================================================================== */
let currentIndex = 0;
let isPlaying = true;
let sceneTimer = null;

// Khởi tạo các thanh tiến trình nhỏ (Progress Dots)
const progressDotsContainer = document.getElementById("progress-dots");
for (let i = 0; i < 10; i++) {
  const dot = document.createElement("div");
  dot.className = "prog-item";
  dot.id = `prog-dot-${i}`;
  progressDotsContainer.appendChild(dot);
}

// Cập nhật các thanh tiến trình
function updateProgressBars(index) {
  for (let i = 0; i < 10; i++) {
    const el = document.getElementById(`prog-dot-${i}`);
    el.className = "prog-item";
    if (i === index) el.classList.add("active");
    else if (i < index) el.classList.add("past");
  }
}

/**
 * Điều khiển vị trí, kích thước và Morphing các lớp ảnh
 */
function renderLayers(scene, durSec) {
  const activeIds = Object.keys(scene.layers);

  // 1. Tắt các layer không thuộc cảnh
  ALL_LAYER_IDS.forEach(id => {
    if (!activeIds.includes(id)) {
      const el = document.getElementById(id);
      if (el) gsap.to(el, { opacity: 0, duration: durSec * 0.7, overwrite: "auto" });
    }
  });

  // 2. Chuyển động Morph & Parallax cho các layer đang hoạt động
  for (const [id, val] of Object.entries(scene.layers)) {
    const el = document.getElementById(id);
    if (!el) continue;

    const [x, y, w, h, opacity, customSrc] = val;
    if (customSrc && el.getAttribute("src") !== customSrc) {
      el.setAttribute("src", customSrc);
    } else if (id === "layer-Hero_Table" && !customSrc && el.getAttribute("src") !== "assets/hero_table.png") {
      el.setAttribute("src", "assets/hero_table.png");
    }

    const left = (x / SW) * 100;
    const top = (y / SH) * 100;
    const width = (w / SW) * 100;
    const height = (h / SH) * 100;

    gsap.to(el, {
      left: `${left}%`,
      top: `${top}%`,
      width: `${width}%`,
      height: `${height}%`,
      opacity: opacity,
      duration: durSec,
      ease: "power2.inOut",
      overwrite: "auto"
    });
  }
}

/**
 * Hiệu ứng Text & Panel chuẩn thứ tự XML (Shape-First -> Content-Second)
 */
function renderTypography(scene) {
  const glassPanel = document.getElementById("hud-glass-panel");
  const cinemaPanel = document.getElementById("hud-cinema-panel");
  const scrim = document.getElementById("scrim-overlay");

  if (scene.style === "open" || scene.style === "close") {
    // Ẩn panel kính phân tích
    gsap.to(glassPanel, { opacity: 0, duration: 0.3 });

    // Hiển thị Scrim chuyển màu
    scrim.style.width = `${(scene.scrim.w / SW) * 100}%`;
    gsap.to(scrim, { opacity: 1, duration: 0.7, delay: 0.3 });

    // Cập nhật nội dung Typography
    document.getElementById("cinema-team").textContent = scene.team;
    document.getElementById("cinema-title").textContent = scene.title;
    document.getElementById("cinema-thesis").textContent = scene.thesis;
    document.getElementById("cinema-body").textContent = scene.body;

    gsap.set(cinemaPanel, { opacity: 1 });
    gsap.fromTo("#cinema-accent", { opacity: 0, width: 0 }, { opacity: 1, width: "9.75%", duration: 0.4, delay: 0.9 });
    gsap.fromTo("#cinema-team", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, delay: 1.05 });
    gsap.fromTo("#cinema-title", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.9 });
    gsap.fromTo("#cinema-thesis", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, delay: 2.6 });
    gsap.fromTo("#cinema-body", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7, delay: 3.4 });

  } else {
    // Ẩn cinema panel và scrim
    gsap.to(scrim, { opacity: 0, duration: 0.4 });
    gsap.to(cinemaPanel, { opacity: 0, duration: 0.3 });

    // Đặt vị trí panel kính theo đúng tính toán của python-pptx
    const [px, py, pw, ph] = scene.panel;
    glassPanel.style.left = `${(px / SW) * 100}%`;
    glassPanel.style.top = `${(py / SH) * 100}%`;
    glassPanel.style.width = `${(pw / SW) * 100}%`;

    // Cập nhật chữ
    document.getElementById("hud-title").textContent = scene.title;
    document.getElementById("hud-thesis").textContent = scene.thesis;
    document.getElementById("hud-body").textContent = scene.body;

    // Hiệu ứng Fade-in panel kính
    gsap.fromTo(glassPanel, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.8, ease: "power2.out" });
    gsap.fromTo("#hud-accent", { opacity: 0, width: 0 }, { opacity: 1, width: "23%", duration: 0.4, delay: 1.0 });
    gsap.fromTo("#hud-title", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, delay: 1.15 });
    gsap.fromTo("#hud-thesis", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, delay: 1.8 });
    gsap.fromTo("#hud-body", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7, delay: 2.4 });
  }
}

/**
 * Hiệu ứng Callout: Đường kẻ + chấm neo + chip khung trước, chữ sau đúng 150ms
 */
function renderCallouts(scene) {
  // Reset trạng thái
  for (let i = 1; i <= 3; i++) {
    gsap.set(`#callout-dot-${i}`, { opacity: 0 });
    gsap.set(`#callout-line-${i}`, { strokeDashoffset: 20 });
    gsap.set(`#callout-chip-${i}`, { opacity: 0, scale: 0.85 });
    gsap.set(`#callout-text-${i}`, { opacity: 0 });
  }

  if (!scene.callouts || scene.callouts.length === 0) return;

  scene.callouts.forEach((callout, idx) => {
    const i = idx + 1;
    const [ax, ay] = callout.anchor;
    const [cx, cy, cw, ch] = callout.chip;

    // Tính điểm nối biên gần nhất của chip (ex, ey)
    const ex = Math.min(Math.max(ax, cx), cx + cw);
    const ey = Math.min(Math.max(ay, cy), cy + ch);

    const dot = document.getElementById(`callout-dot-${i}`);
    const line = document.getElementById(`callout-line-${i}`);
    const chip = document.getElementById(`callout-chip-${i}`);
    const text = document.getElementById(`callout-text-${i}`);

    dot.setAttribute("cx", ax);
    dot.setAttribute("cy", ay);
    line.setAttribute("d", `M ${ex} ${ey} L ${ax} ${ay}`);

    chip.style.left = `${(cx / SW) * 100}%`;
    chip.style.top = `${(cy / SH) * 100}%`;
    chip.style.width = `${(cw / SW) * 100}%`;
    chip.style.height = `${(ch / SH) * 100}%`;
    text.textContent = callout.label;

    const t0 = (1100 + idx * 350) / 1000;

    // Khung + đường + chấm xuất hiện đồng thời
    gsap.to(dot, { opacity: 1, duration: 0.5, delay: t0 });
    gsap.to(line, { strokeDashoffset: 0, duration: 0.5, delay: t0, ease: "power2.out" });
    gsap.to(chip, { opacity: 1, scale: 1, duration: 0.4, delay: t0, ease: "back.out(1.1)" });

    // Chữ xuất hiện sau đúng 150ms
    gsap.to(text, { opacity: 1, duration: 0.45, delay: t0 + 0.15 });
  });
}

/**
 * Chuyển đổi cảnh chính
 */
function goToScene(index) {
  if (index < 0) index = 0;
  if (index >= SCENES.length) index = 0;
  currentIndex = index;

  const scene = SCENES[currentIndex];
  const durSec = (scene.id in [4, 6, 10]) ? 1.3 : 1.2;

  renderLayers(scene, durSec);
  renderTypography(scene);
  renderCallouts(scene);
  updateProgressBars(currentIndex);

  // Cập nhật Speaker Notes & Controls
  document.getElementById("notes-content").textContent = scene.notes;
  document.getElementById("scene-index").textContent = `${String(currentIndex + 1).padStart(2, "0")} / 10`;
  document.getElementById("timeline-progress").style.width = `${((currentIndex + 1) / SCENES.length) * 100}%`;

  restartAutoPlay();
}

function restartAutoPlay() {
  if (sceneTimer) clearTimeout(sceneTimer);
  if (isPlaying) {
    sceneTimer = setTimeout(() => {
      goToScene(currentIndex + 1);
    }, SCENES[currentIndex].dur_ms);
  }
}

/* ==========================================================================
   EVENT LISTENERS
   ========================================================================== */
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") goToScene(currentIndex + 1);
  else if (e.code === "ArrowLeft") goToScene(currentIndex - 1);
  else if (e.code === "Space") {
    e.preventDefault();
    togglePlay();
  } else if (e.code === "KeyN") toggleNotes();
  else if (e.code === "KeyF") toggleFullScreen();
});

document.getElementById("btn-next").addEventListener("click", () => goToScene(currentIndex + 1));
document.getElementById("btn-prev").addEventListener("click", () => goToScene(currentIndex - 1));

function togglePlay() {
  isPlaying = !isPlaying;
  const btn = document.getElementById("btn-play-pause");
  btn.textContent = isPlaying ? "❚❚ Tạm dừng" : "▶ Tiếp tục";
  if (isPlaying) restartAutoPlay();
  else if (sceneTimer) clearTimeout(sceneTimer);
}
document.getElementById("btn-play-pause").addEventListener("click", togglePlay);

function toggleNotes() {
  document.getElementById("speaker-notes-panel").classList.toggle("active");
}
document.getElementById("btn-toggle-notes").addEventListener("click", toggleNotes);
document.getElementById("close-notes").addEventListener("click", () => {
  document.getElementById("speaker-notes-panel").classList.remove("active");
});

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}
document.getElementById("btn-fullscreen").addEventListener("click", toggleFullScreen);

window.addEventListener("DOMContentLoaded", () => {
  goToScene(0);
});
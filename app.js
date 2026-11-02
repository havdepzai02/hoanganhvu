/* ==========================================================================
   TỔ 2 — BÀI THƠ 'NHÀN' (NGUYỄN BỈNH KHIÊM) — CONTROLLER ENGINE
   Tọa độ neo Callout được định vị CHUẨN XÁC VÀO TỪNG ĐỐI TƯỢNG ĐỒ HỌA
   ========================================================================== */

const SW = 13.333;
const SH = 7.5;

const SCENES_DATA = [
  // 01. MỞ ĐẦU
  {
    id: 1, dur_ms: 8000, style: "open",
    team: "TỔ 2", title: "NHÀN", thesis: "Nguyễn Bỉnh Khiêm",
    body: "Bức chân dung tinh thần & Tuyên ngôn sống của bậc đại trí thức thế kỷ XVI",
    scrim: { w: 8.5 },
    layers: {
      "layer-BG_Mountain":   [-1.0, -0.562, 15.333, 8.625, 1],
      "layer-BG_Mist":       [-1.0, -0.562, 15.333, 8.625, 0.8],
      "layer-Hero_Pavilion": [-1.0, -0.562, 15.333, 8.625, 1],
      "layer-FG_Bamboo":     [-1.0, -0.562, 15.333, 8.625, 1],
      "layer-FG_Leaves":     [-1.0, -0.562, 15.333, 8.625, 0.6]
    },
    callouts: [],
    notes: `Mở đầu: Giới thiệu thi phẩm 'Nhàn' trích trong 'Bạch Vân quốc ngữ thi' của Tuyết Giang Phu Tử Nguyễn Bỉnh Khiêm.`
  },

  // 02. SECTION I: PHẦN MỞ BÀI
  {
    id: 2, dur_ms: 6000, style: "section",
    team: "PHẦN THỨ NHẤT", title: "I. PHẦN MỞ BÀI", thesis: "Bối cảnh thời đại & Vị thế tác giả",
    body: "Nguyễn Bỉnh Khiêm — Nhà thơ lớn của dân tộc giữa thế kỷ XVI đầy biến động",
    scrim: { w: 9.0 },
    layers: {
      "layer-BG_Mountain":   [-1.1, -0.65, 15.8, 8.9, 1],
      "layer-BG_Mist":       [-1.2, -0.7, 16.0, 9.0, 0.85],
      "layer-Hero_Pavilion": [-0.8, -0.45, 15.6, 8.8, 1],
      "layer-FG_Bamboo":     [-1.2, -0.7, 16.2, 9.1, 0.8],
      "layer-FG_Leaves":     [-1.2, -0.7, 16.4, 9.2, 0.5]
    },
    callouts: [],
    notes: `Giới thiệu mục I: Bối cảnh xã hội thế kỷ XVI phân tranh Nam - Bắc triều và quyết định cáo quan về ở ẩn để giữ trọn thiên lương.`
  },

  // 03. CHI TIẾT MỞ BÀI: Tác giả & Tác phẩm
  {
    id: 3, dur_ms: 13000, style: "mid",
    title: "I. MỞ BÀI: TÁC GIẢ & TÁC PHẨM", thesis: "Chân dung tinh thần bậc đại trí thức",
    body: "Nguyễn Bỉnh Khiêm (1491-1585) cáo quan về ẩn tại am Bạch Vân, sống thanh đạm giữa thiên nhiên. 'Nhàn' là tuyên ngôn sống giữ trọn nhân cách kẻ sĩ giữa thời tao loạn.",
    panel: [0.5, 3.0, 5.4, 3.8],
    layers: {
      "layer-BG_Mountain":   [-1.3, -0.84, 16.33, 9.18, 1],
      "layer-BG_Mist":       [-1.37, -0.9, 16.56, 9.31, 0.9],
      "layer-Hero_Pavilion": [-0.6, -0.3, 16.2, 9.1, 1],
      "layer-FG_Bamboo":     [-1.6, -1.12, 17.32, 9.74, 0.7],
      "layer-FG_Leaves":     [-1.65, -1.16, 17.48, 9.83, 0.5]
    },
    // Điểm neo chính xác: Am Bạch Vân bên phải (x=12.0, y=5.3) và Cội Tùng bên trái (x=3.1, y=3.2)
    callouts: [
      { label: "Bạch Vân am", anchor: [12.0, 5.3], chip: [9.8, 4.2, 2.0, 0.38] },
      { label: "Cội tùng quân tử", anchor: [3.1, 3.2], chip: [1.8, 2.2, 2.2, 0.38] }
    ],
    notes: `Nguyễn Bỉnh Khiêm đỗ Trạng nguyên, khi thấy gian thần lộng hành đã dâng sớ chém 7 nịnh thần; không được chấp thuận bèn cáo quan về quê mở trường dạy học, dựng am Bạch Vân.`
  },

  // 04. SECTION II: PHÂN TÍCH NỘI DUNG
  {
    id: 4, dur_ms: 6000, style: "section",
    team: "PHẦN THỨ HAI", title: "II. PHÂN TÍCH NỘI DUNG", thesis: "Ba phương diện cốt lõi của chữ 'Nhàn'",
    body: "1. Lối sống hòa hợp thiên nhiên • 2. Vẻ đẹp thôn dã bốn mùa • 3. Triết lý nhân sinh thoát tục",
    scrim: { w: 9.0 },
    layers: {
      "layer-BG_Mountain":   [-1.0, -0.562, 15.333, 8.625, 1],
      "layer-BG_Mist":       [-1.1, -0.6, 15.6, 8.8, 0.8],
      "layer-Hero_Pavilion": [-0.9, -0.5, 15.5, 8.7, 0.9],
      "layer-FG_Bamboo":     [-1.1, -0.6, 15.8, 8.9, 0.8],
      "layer-FG_Leaves":     [-1.1, -0.6, 16.0, 9.0, 0.5]
    },
    callouts: [],
    notes: `Giới thiệu mục II: Đi sâu phân tích bài thơ qua 3 bình diện: Lối sống ung dung, Bức tranh thiên nhiên sinh hoạt bốn mùa và Triết lý sống đứng trên danh lợi.`
  },

  // 05. NỘI DUNG 1 (ĐỀ): Tư thế ung dung
  {
    id: 5, dur_ms: 14000, style: "mid",
    title: "II.1. LỐI SỐNG HÒA HỢP THIÊN NHIÊN", thesis: "Một mai, một cuốc, một cần câu / Thơ thẩn dầu ai vui thú nào",
    body: "Điệp từ 'một' lặp lại 3 lần gắn với vật dụng lao động chất phác. Từ láy 'thơ thẩn' gợi tư thế thong dong, ung dung tự tại, chủ động lựa chọn cuộc sống đủ dùng.",
    panel: [0.5, 3.0, 5.4, 3.8],
    layers: {
      "layer-BG_Mountain": [-2.5, -1.26, 17.82, 10.02, 1],
      "layer-BG_Mist":     [-2.8, -1.42, 18.4, 10.35, 0.8],
      "layer-Hero_Hermit": [6.8, 2.2, 4.2, 5.1, 1],
      "layer-Hero_Tools":  [6.5, 4.8, 4.4, 2.4, 1],
      "layer-FG_Bamboo":   [-3.8, -1.8, 20.0, 11.2, 0.7],
      "layer-FG_Leaves":   [-4.0, -2.0, 20.5, 11.5, 0.5]
    },
    // Điểm neo chính xác: Lưỡi mai & cuốc (x=8.2, y=6.0) và đầu cần câu trúc (x=7.5, y=2.9)
    callouts: [
      { label: "Mai & Cuốc nhà nông", anchor: [8.2, 6.0], chip: [6.8, 4.9, 2.3, 0.38] },
      { label: "Cần câu trúc thoát tục", anchor: [7.5, 2.9], chip: [6.2, 1.9, 2.4, 0.38] }
    ],
    notes: `Đây không phải là sự bất lực của kẻ cùng đường phải lui về, mà là sự lựa chọn có ý thức, tự do tự tại của người đã thấu tỏ thói đời.`
  },

  // 06. NỘI DUNG 1 (THỰC): Triết lý Dại - Khôn
  {
    id: 6, dur_ms: 14000, style: "mid",
    title: "II.1. TRIẾT LÝ DẠI - KHÔN", thesis: "Ta dại, ta tìm nơi vắng vẻ / Người khôn, người đến chốn lao xao",
    body: "Cách nói ngược mỉa mai: Tự nhận 'dại' khi về nơi vắng vẻ (thanh tịnh, giữ tâm trong sạch); gọi đời là 'khôn' khi đến chốn lao xao (trường danh lợi bon chen, cạm bẫy).",
    panel: [0.5, 3.0, 5.4, 3.8],
    layers: {
      "layer-BG_Mountain":   [-2.8, -1.3, 18.0, 10.1, 1],
      "layer-Hero_Contrast": [-0.6, -0.3, 16.0, 9.0, 1],
      "layer-Hero_Hermit":   [4.5, 2.6, 3.4, 4.1, 0.85],
      "layer-FG_Bamboo":     [-4.2, -1.9, 20.5, 11.5, 0.6],
      "layer-FG_Leaves":     [-4.5, -2.0, 21.0, 11.8, 0.5]
    },
    // Điểm neo chính xác: Dòng suối nơi vắng vẻ bên trái (x=3.2, y=5.8) và Cổng phủ chốn lao xao bên phải (x=11.2, y=4.2)
    callouts: [
      { label: "Nơi vắng vẻ (Tâm an)", anchor: [3.2, 5.8], chip: [1.8, 4.8, 2.4, 0.38] },
      { label: "Chốn lao xao (Cạm bẫy)", anchor: [11.2, 4.2], chip: [9.2, 3.2, 2.5, 0.38] }
    ],
    notes: `Cái dại của tác giả là đỉnh cao của sự khôn ngoan, tỉnh táo; còn cái khôn của thói đời thực chất là sự u mê trong vòng xoáy danh vọng.`
  },

  // 07. NỘI DUNG 2 (LUẬN): Bốn mùa thôn dã
  {
    id: 7, dur_ms: 14000, style: "mid",
    title: "II.2. VẺ ĐẸP CUỘC SỐNG THÔN DÃ", thesis: "Thu ăn măng trúc, đông ăn giá / Xuân tắm hồ sen, hạ tắm ao",
    body: "Bức tranh bốn mùa tuần hoàn tươi đẹp. Món ăn dân dã, thanh đạm (măng trúc, giá đỗ); sinh hoạt tự nhiên, gần gũi (tắm hồ sen, tắm ao). Sống hòa hợp tuyệt đối với vũ trụ.",
    panel: [0.5, 3.0, 5.4, 3.8],
    layers: {
      "layer-BG_Mountain": [-5.8, -3.0, 23.0, 12.9, 0.6],
      "layer-BG_Mist":     [-6.8, -3.5, 25.0, 14.0, 0.6],
      "layer-Hero_Seasons": [6.2, 2.2, 6.8, 4.2, 1],
      "layer-FG_Leaves":   [-10.5, -5.5, 31.0, 17.5, 0.5]
    },
    // Điểm neo chính xác: Đĩa măng trúc (x=8.2, y=4.4) và Hoa sen mùa xuân (x=11.0, y=3.8)
    callouts: [
      { label: "Măng trúc & Giá đỗ", anchor: [8.2, 4.4], chip: [6.8, 3.4, 2.3, 0.38] },
      { label: "Hoa sen mùa xuân", anchor: [11.0, 3.8], chip: [9.6, 2.8, 2.1, 0.38] }
    ],
    notes: `Tác giả không hề than thở sự thanh bần mà xem đó là thú vui tao nhã. Ăn uống, tắm mát giản dị trở thành niềm hạnh phúc tự nhiên đích thực.`
  },

  // 08. NỘI DUNG 3 (KẾT): Triết lý nhân sinh
  {
    id: 8, dur_ms: 14000, style: "mid",
    title: "II.3. TRIẾT LÝ NHÂN SINH THOÁT TỤC", thesis: "Rượu đến cội cây ta sẽ uống / Nhìn xem phú quý tựa chiêm bao",
    body: "Tư thế ung dung uống rượu dưới gốc cây không cần khuôn phép. Vận dụng điển tích giấc mộng Thuần Vu Phần: Phú quý vinh hoa chỉ là giấc mộng hư ảo, chóng tàn.",
    panel: [0.5, 3.0, 5.4, 3.8],
    layers: {
      "layer-BG_Mountain": [-4.5, -2.1, 21.2, 11.9, 0.8],
      "layer-BG_Mist":     [-5.2, -2.4, 22.5, 12.6, 0.8],
      "layer-Hero_HoeTree": [5.8, 1.0, 7.2, 5.8, 1],
      "layer-Hero_Hermit":  [4.5, 2.5, 3.5, 4.4, 0.8],
      "layer-FG_Leaves":   [-7.5, -3.5, 27.0, 15.2, 0.5]
    },
    // Điểm neo chính xác: Chén rượu gốm bên gốc hòe (x=7.8, y=5.6) và Tòa thành mộng ảo Hòe An (x=10.6, y=2.8)
    callouts: [
      { label: "Chén rượu cội hòe", anchor: [7.8, 5.6], chip: [6.4, 4.6, 2.1, 0.38] },
      { label: "Phú quý tựa chiêm bao", anchor: [10.6, 2.8], chip: [8.8, 1.8, 2.5, 0.38] }
    ],
    notes: `Nhàn ở đây là Nhàn tâm: Giữ tâm hồn thanh thản, đứng trên mọi danh lợi bon chen, nhìn thấu sự vô thường của vinh hoa phú quý.`
  },

  // 09. SECTION III: PHÂN TÍCH NGHỆ THUẬT
  {
    id: 9, dur_ms: 6000, style: "section",
    team: "PHẦN THỨ BA", title: "III. PHÂN TÍCH NGHỆ THUẬT", thesis: "5 nét đặc sắc làm nên kiệt tác thơ Nôm",
    body: "Ngôn ngữ mộc mạc • Phép đối chuẩn mực • Hình ảnh đời thường • Lối nói ngược • Điển tích hàm súc",
    scrim: { w: 9.0 },
    layers: {
      "layer-BG_Mountain":   [-1.1, -0.6, 15.5, 8.7, 1],
      "layer-BG_Mist":       [-1.2, -0.7, 16.0, 9.0, 0.8],
      "layer-Hero_Nom":      [6.4, 2.2, 5.2, 3.6, 0.9],
      "layer-FG_Bamboo":     [-1.2, -0.7, 16.2, 9.1, 0.7],
      "layer-FG_Leaves":     [-1.2, -0.7, 16.4, 9.2, 0.5]
    },
    callouts: [],
    notes: `Giới thiệu mục III: Khám phá những thành tựu thi pháp xuất sắc của thể thơ Đường luật viết bằng chữ Nôm dân tộc.`
  },

  // 10. NGHỆ THUẬT 1: Ngôn ngữ Nôm mộc mạc
  {
    id: 10, dur_ms: 13000, style: "mid",
    title: "III.1. NGÔN NGỮ NÔM MỘC MẠC", thesis: "Đóng góp lớn cho thơ ca dân tộc",
    body: "Sử dụng chữ Nôm với những từ ngữ đời thường, bình dị: mai, cuốc, măng trúc, giá, ao... Thể hiện đại tự 'Nhàn' tinh luyện và dấu ấn triện Bạch Vân Cư Sĩ.",
    panel: [0.5, 3.0, 5.4, 3.8],
    layers: {
      "layer-BG_Mountain": [-2.0, -0.9, 16.8, 9.4, 1],
      "layer-BG_Mist":     [-2.3, -1.0, 17.2, 9.6, 0.8],
      "layer-Hero_Nom":    [6.2, 1.8, 6.4, 4.6, 1],
      "layer-FG_Leaves":   [-3.5, -1.5, 19.0, 10.7, 0.5]
    },
    // Điểm neo chính xác: Đại tự 閑 (x=9.2, y=3.8) và Ấn triện đỏ 白雲居士 (x=11.2, y=5.0)
    callouts: [
      { label: "Đại tự 閑 (Nhàn)", anchor: [9.2, 3.8], chip: [7.8, 2.8, 2.1, 0.38] },
      { label: "Ấn triện Bạch Vân Cư Sĩ", anchor: [11.2, 5.0], chip: [9.5, 4.0, 2.3, 0.38] }
    ],
    notes: `Nguyễn Bỉnh Khiêm là cây đại thụ đưa thơ Nôm đạt đến độ tinh luyện, tự nhiên như lời nói thường ngày mà vẫn mang chiều sâu tư tưởng uyên bác.`
  },

  // 11. NGHỆ THUẬT 2: Phép đối tài tình, chặt chẽ
  {
    id: 11, dur_ms: 13000, style: "mid",
    title: "III.2. PHÉP ĐỐI CHẶT CHẼ, TÀI TÌNH", thesis: "Chuẩn mực thi pháp Đường luật",
    body: "Đối lập sắc sảo ở hai câu thực: Ta dại / Người khôn — Nơi vắng vẻ / Chốn lao xao. Đối xứng bốn mùa ở hai câu luận: Thu / Đông — Xuân / Hạ; Măng trúc / Giá — Hồ sen / Ao.",
    panel: [0.5, 3.0, 5.4, 3.8],
    layers: {
      "layer-BG_Mountain": [-2.2, -1.0, 17.0, 9.5, 1],
      "layer-Hero_Nom":    [6.4, 1.8, 5.5, 3.8, 0.95],
      "layer-Hero_Tools":  [5.8, 4.8, 3.8, 2.1, 0.8],
      "layer-FG_Leaves":   [-4.0, -1.8, 20.0, 11.2, 0.5]
    },
    // Điểm neo chính xác trên văn bản cuộn thư tịch
    callouts: [
      { label: "Bút pháp đối ngẫu", anchor: [8.5, 3.2], chip: [7.2, 2.2, 2.2, 0.38] },
      { label: "Nhịp điệu cân đối", anchor: [10.2, 3.2], chip: [8.9, 2.2, 2.1, 0.38] }
    ],
    notes: `Phép đối không chỉ làm cho câu thơ hài hòa về âm luật mà còn làm nổi bật sự phân định rạch ròi giữa hai lối sống, hai nhân cách.`
  },

  // 12. NGHỆ THUẬT 3: Hình ảnh đời thường giàu sức gợi
  {
    id: 12, dur_ms: 13000, style: "mid",
    title: "III.3. HÌNH ẢNH ĐỜI THƯỜNG GIÀU SỨC GỢI", thesis: "Vượt thoát khỏi ước lệ cổ điển",
    body: "Không sử dụng các hình ảnh ước lệ cao sang (long phượng, mai lan cúc trúc), tác phẩm đưa chất liệu cuộc sống đời thường vào thơ: cuốc đất, câu cá, ăn măng, tắm ao.",
    panel: [0.5, 3.0, 5.4, 3.8],
    layers: {
      "layer-BG_Mountain": [-2.8, -1.3, 18.0, 10.1, 1],
      "layer-Hero_Tools":   [6.2, 2.2, 4.6, 2.9, 1],
      "layer-Hero_Seasons": [7.6, 4.0, 5.0, 3.0, 0.9],
      "layer-FG_Leaves":    [-4.5, -2.0, 21.0, 11.8, 0.5]
    },
    // Điểm neo chính xác vào công cụ và đĩa măng
    callouts: [
      { label: "Vật dụng điền viên", anchor: [8.4, 3.6], chip: [7.0, 2.6, 2.1, 0.38] },
      { label: "Ẩm thực thanh khiết", anchor: [10.2, 5.2], chip: [8.8, 4.2, 2.2, 0.38] }
    ],
    notes: `Nét hiện đại trong thơ trung đại: Đưa cái đẹp dung dị của đời thường thành biểu tượng của nhân cách thanh cao.`
  },

  // 13. NGHỆ THUẬT 4 & 5: Nói ngược & Điển tích
  {
    id: 13, dur_ms: 13000, style: "mid",
    title: "III.4 & III.5. NÓI NGƯỢC & ĐIỂN TÍCH", thesis: "Trí tuệ uyên thâm & Nụ cười thâm trầm",
    body: "Nói ngược 'ta dại - người khôn' vừa hóm hỉnh vừa châm biếm sâu cay. Điển tích giấc mộng Nam Kha được lồng ghép tự nhiên, nâng tầm tư tưởng tác phẩm.",
    panel: [0.5, 3.0, 5.4, 3.8],
    layers: {
      "layer-BG_Mountain": [-3.5, -1.6, 19.5, 10.9, 0.85],
      "layer-Hero_HoeTree": [6.2, 1.2, 6.6, 5.5, 1],
      "layer-FG_Leaves":   [-6.0, -2.8, 24.0, 13.5, 0.5]
    },
    // Điểm neo chuẩn vào gốc hòe và ảo ảnh thành Hòe An
    callouts: [
      { label: "Nghệ thuật nói mỉa", anchor: [8.0, 4.6], chip: [6.6, 3.6, 2.2, 0.38] },
      { label: "Điển tích Hòe An", anchor: [10.5, 3.2], chip: [9.0, 2.2, 2.1, 0.38] }
    ],
    notes: `Sự kết hợp hoàn hảo giữa cái cười triết lý dân gian và trí tuệ uyên bác của bậc túc nho.`
  },

  // 14. SECTION IV: ĐÁNH GIÁ TỔNG KẾT
  {
    id: 14, dur_ms: 6000, style: "section",
    team: "PHẦN THỨ TƯ", title: "IV. ĐÁNH GIÁ TỔNG KẾT", thesis: "Bài học sống còn nguyên giá trị thời đại",
    body: "Tuyên ngôn nhân cách • Bản lĩnh kẻ sĩ • Hướng về lối sống thanh cao, cân bằng",
    scrim: { w: 9.0 },
    layers: {
      "layer-BG_Mountain":   [-1.1, -0.6, 15.5, 8.7, 1],
      "layer-BG_Mist":       [-1.2, -0.7, 16.0, 9.0, 0.85],
      "layer-Hero_Pavilion": [-0.8, -0.45, 15.6, 8.8, 0.9],
      "layer-FG_Bamboo":     [-1.2, -0.7, 16.2, 9.1, 0.7],
      "layer-FG_Leaves":     [-1.2, -0.7, 16.4, 9.2, 0.5]
    },
    callouts: [],
    notes: `Giới thiệu mục IV: Tổng kết giá trị tác phẩm và bài học nhân sinh sâu sắc đối với cuộc sống hôm nay.`
  },

  // 15. KẾT THÚC: Giá trị tác phẩm & Lời cảm ơn
  {
    id: 15, dur_ms: 14000, style: "close",
    team: "TỔ 2 — BÀI THƠ NHÀN", title: "IV. TỔNG KẾT & Ý NGHĨA", thesis: "Chữ 'Nhàn' giữa dòng đời hiện đại",
    body: "'Nhàn' là đỉnh cao của trí tuệ và đạo đức: nhàn tâm để giữ vững cốt cách trước cám dỗ vật chất. Cảm ơn thầy cô và các bạn đã lắng nghe!",
    scrim: { w: 8.5 },
    layers: {
      "layer-BG_Mountain":   [-1.0, -0.562, 15.333, 8.625, 0.9],
      "layer-BG_Mist":       [-1.0, -0.562, 15.333, 8.625, 0.8],
      "layer-Hero_Pavilion": [-0.6, -0.35, 15.5, 8.7, 0.9],
      "layer-FG_Leaves":     [-1.0, -0.562, 15.333, 8.625, 0.5]
    },
    callouts: [],
    notes: `Bài học cho hôm nay: Biết sống chậm lại, trân trọng những giá trị bình dị và giữ tâm hồn an yên giữa nhịp sống xô bồ.`
  }
];

const ALL_LAYER_IDS = [
  "layer-BG_Mountain", "layer-BG_Mist", "layer-Hero_Pavilion",
  "layer-Hero_Hermit", "layer-Hero_Tools", "layer-Hero_Contrast",
  "layer-Hero_Seasons", "layer-Hero_HoeTree", "layer-Hero_Nom",
  "layer-FG_Bamboo", "layer-FG_Leaves"
];

let currentIndex = 0;
let isPlaying = true;
let sceneTimer = null;

// Khởi tạo hàng 15 thanh tiến trình nhỏ
const progressRow = document.getElementById("progress-bars-row");
for (let i = 0; i < SCENES_DATA.length; i++) {
  const dot = document.createElement("div");
  dot.className = "prog-item";
  dot.id = `prog-dot-${i}`;
  progressRow.appendChild(dot);
}

function updateProgressDots(index) {
  for (let i = 0; i < SCENES_DATA.length; i++) {
    const el = document.getElementById(`prog-dot-${i}`);
    el.className = "prog-item";
    if (i === index) el.classList.add("active");
    else if (i < index) el.classList.add("past");
  }
}

/**
 * Hiệu ứng Morph Camera Parallax 2.5D mượt mà
 */
function renderLayers(scene, durSec) {
  const activeIds = Object.keys(scene.layers);

  ALL_LAYER_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!activeIds.includes(id)) {
      gsap.to(el, { opacity: 0, duration: durSec * 0.7, overwrite: "auto" });
    }
  });

  for (const [id, val] of Object.entries(scene.layers)) {
    const el = document.getElementById(id);
    if (!el) continue;

    const [x, y, w, h, opacity] = val;
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
 * Hiệu ứng Text & Panel chuẩn Shape-First -> Content-Second
 */
function renderTypography(scene) {
  const glassPanel = document.getElementById("hud-glass-panel");
  const cinemaPanel = document.getElementById("hud-cinema-panel");
  const scrim = document.getElementById("scrim-overlay");

  if (scene.style === "open" || scene.style === "close" || scene.style === "section") {
    gsap.to(glassPanel, { opacity: 0, duration: 0.3 });

    scrim.style.width = `${(scene.scrim.w / SW) * 100}%`;
    gsap.to(scrim, { opacity: 1, duration: 0.6, delay: 0.2 });

    const teamEl = document.getElementById("cinema-team");
    teamEl.textContent = scene.team;
    if (scene.style === "section") {
      teamEl.style.color = "var(--red-tag)";
    } else {
      teamEl.style.color = "var(--gold)";
    }

    document.getElementById("cinema-title").textContent = scene.title;
    document.getElementById("cinema-thesis").textContent = scene.thesis;
    document.getElementById("cinema-body").textContent = scene.body;

    gsap.set(cinemaPanel, { opacity: 1 });
    gsap.fromTo("#cinema-accent", { opacity: 0, width: 0 }, { opacity: 1, width: "9.5%", duration: 0.4, delay: 0.6 });
    gsap.fromTo("#cinema-team", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.75 });
    gsap.fromTo("#cinema-title", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 1.0 });
    gsap.fromTo("#cinema-thesis", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, delay: 1.4 });
    gsap.fromTo("#cinema-body", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7, delay: 1.8 });

  } else {
    gsap.to(scrim, { opacity: 0, duration: 0.4 });
    gsap.to(cinemaPanel, { opacity: 0, duration: 0.3 });

    const [px, py, pw, ph] = scene.panel;
    glassPanel.style.left = `${(px / SW) * 100}%`;
    glassPanel.style.top = `${(py / SH) * 100}%`;
    glassPanel.style.width = `${(pw / SW) * 100}%`;

    document.getElementById("hud-title").textContent = scene.title;
    document.getElementById("hud-thesis").textContent = scene.thesis;
    document.getElementById("hud-body").textContent = scene.body;

    gsap.fromTo(glassPanel, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.7, ease: "power2.out" });
    gsap.fromTo("#hud-accent", { opacity: 0, width: 0 }, { opacity: 1, width: "22%", duration: 0.4, delay: 0.9 });
    gsap.fromTo("#hud-title", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, delay: 1.0 });
    gsap.fromTo("#hud-thesis", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, delay: 1.3 });
    gsap.fromTo("#hud-body", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7, delay: 1.7 });
  }
}

/**
 * Hiệu ứng Callout: Mũi tên và chấm neo chỉ chuẩn xác từng chi tiết
 */
function renderCallouts(scene) {
  for (let i = 1; i <= 2; i++) {
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

    const t0 = 1.0 + idx * 0.35;

    gsap.to(dot, { opacity: 1, duration: 0.45, delay: t0 });
    gsap.to(line, { strokeDashoffset: 0, duration: 0.5, delay: t0, ease: "power2.out" });
    gsap.to(chip, { opacity: 1, scale: 1, duration: 0.4, delay: t0, ease: "back.out(1.1)" });
    gsap.to(text, { opacity: 1, duration: 0.45, delay: t0 + 0.15 });
  });
}

function goToScene(index) {
  if (index < 0) index = 0;
  if (index >= SCENES_DATA.length) index = 0;
  currentIndex = index;

  const scene = SCENES_DATA[currentIndex];
  const durSec = 1.25;

  renderLayers(scene, durSec);
  renderTypography(scene);
  renderCallouts(scene);
  updateProgressDots(currentIndex);

  document.getElementById("notes-content").textContent = scene.notes;
  document.getElementById("scene-index").textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${SCENES_DATA.length}`;
  document.getElementById("timeline-progress").style.width = `${((currentIndex + 1) / SCENES_DATA.length) * 100}%`;

  restartAutoPlay();
}

function restartAutoPlay() {
  if (sceneTimer) clearTimeout(sceneTimer);
  if (isPlaying) {
    sceneTimer = setTimeout(() => {
      goToScene(currentIndex + 1);
    }, SCENES_DATA[currentIndex].dur_ms);
  }
}

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

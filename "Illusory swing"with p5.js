let rects = []; // 存儲長方形的數據
let rectWidth = 50; // 長方形的寬度
let rectHeight = 150; // 長方形的高度
let squareSize = 50; // 正方形的邊長
let spacing = 1.5; // 間距
let direction = 1; // 移動方向：1 為向右，-1 為向左

function setup() {
  createCanvas(400, 200); // 畫布大小
  noStroke(); // 去掉邊框

  let startX = 20; // 起始 x 座標
  let startY = height / 2 - rectHeight / 2; // 長方形 y 座標
  
  // 設置圖形排列
  rects.push({ x: startX, y: startY, color: color(0, 0, 255) }); // 藍色長方形
  startX += rectWidth + spacing;
  rects.push({ x: startX, y: startY, color: color(0) }); // 黑色正方形
  startX += squareSize + spacing;
  rects.push({ x: startX, y: startY, color: color(0, 0, 255) }); // 藍色長方形
  startX += rectWidth + spacing;
  rects.push({ x: startX, y: startY, color: color(0) }); // 黑色正方形
  startX += squareSize + spacing;
  rects.push({ x: startX, y: startY, color: color(0, 0, 255) }); // 藍色長方形
}

function draw() {
  background(255); // 重繪背景，避免殘影

  // 遍歷圖形，繪製長方形和正方形
  for (let i = 0; i < rects.length; i++) {
    fill(rects[i].color); // 根據顏色繪製
    if (i % 2 === 0) {
      // 長方形
      rect(rects[i].x, rects[i].y, rectWidth, rectHeight);
    } else {
      // 正方形
      rect(rects[i].x, rects[i].y + (rectHeight - squareSize) / 2, squareSize, squareSize);
    }
  }

  // 每隔 0.1 秒更新長方形的 x 坐標，實現向左和向右的循環移動
  if (frameCount % 6 === 0) { // 60fps -> 每 6 幀大約是 0.1 秒
    for (let i = 0; i < rects.length; i++) {
      if (i % 2 === 0) { // 只讓長方形移動
        rects[i].x += direction; // 改變 x 坐標
      }
    }
    // 反轉方向
    if (frameCount % 12 === 0) {
      direction *= -1; // 每 0.1 秒反轉一次方向
    }
  }
}

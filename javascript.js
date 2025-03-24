document.addEventListener('DOMContentLoaded', function() {
  const spriteImage = new Image();
  spriteImage.src = 'all.png'; // 確保 all.png 檔案存在於相同目錄或指定正確路徑
  spriteImage.onload = function() {
    const spriteWidth = 55.3;
    const spriteHeight = 92;
    const frameCount = 7;
    let currentFrame = 0;

    const canvas = document.createElement('canvas');
    canvas.width = spriteWidth;
    canvas.height = spriteHeight;
    canvas.style.position = 'relative'; // 相對定位
    canvas.style.display = 'inline-block'; // 讓 canvas 變成行內元素
    canvas.style.verticalAlign = 'middle'; // 垂直對齊
    canvas.style.marginLeft = '10px'; // 調整水平位置
    canvas.style.top = '0px'; // 調整垂直位置

    const ctx = canvas.getContext('2d');

    function drawFrame(frameX) {
      ctx.clearRect(0, 0, spriteWidth, spriteHeight);
      ctx.drawImage(
        spriteImage,
        frameX * spriteWidth,
        0,
        spriteWidth,
        spriteHeight,
        0,
        0,
        spriteWidth,
        spriteHeight
      );
    }

    function updateFrame() {
      currentFrame = (currentFrame + 1) % frameCount;
      drawFrame(currentFrame);
    }

    // 設定定時器，每隔一段時間更新畫面
    setInterval(updateFrame, 100); // 每 100 毫秒更新一次

    // 找到 "吳哲宇" 的 h1 元素
    const nameElement = document.querySelector('h1');
    // 將 canvas 插入到 h1 元素後面
    nameElement.parentNode.insertBefore(canvas, nameElement.nextSibling);
  };
});

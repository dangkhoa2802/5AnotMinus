 // Lấy đối tượng canvas từ DOM
 var canvas = document.getElementById("snow");
 var ctx = canvas.getContext("2d");

 // Tạo mảng chứa các bông tuyết
 var flakes = [];

 // Hàm tạo bông tuyết
 function createFlake() {
   // Tạo bông tuyết mới với các thuộc tính ngẫu nhiên
   var flake = {
     x: Math.random() * canvas.width,
     y: -Math.random() * canvas.height,
     radius: Math.random() * 4 + 2,
     speed: 1.5,
     angle: Math.random() * Math.PI*2,
     opacity: Math.random(),
   };
   flakes.push(flake); // Thêm bông tuyết vào mảng
 }

 // Hàm vẽ bông tuyết
 function drawFlake(flake) {
   // Cài đặt màu sắc và độ mờ cho bông tuyết
   ctx.fillStyle = `rgba(0, 255, 179, ${flake.opacity})`;
   ctx.beginPath();
   ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
   ctx.closePath();
   ctx.fill();
 }

 // Hàm cập nhật vị trí của bông tuyết
 function updateFlake(flake) {
   // Tính toán vị trí mới của bông tuyết dựa trên tốc độ và góc di chuyển
   var vx = Math.cos(flake.angle) * flake.speed;
   var vy = Math.sin(flake.angle) * flake.speed;
   flake.x += vx;
   flake.y += vy;

   // Nếu bông tuyết đã rơi hết màn hình, đặt lại vị trí và tốc độ di chuyển
   if (flake.y > canvas.height) {
     flake.x = Math.random() * canvas.width;
     flake.y = -Math.random() * canvas.height;
     flake.speed = Math.random() * 3 + 1;
   }
 }

 // Hàm loop để vẽ bông tuyết liên tục
 function loop() {
   // Xóa canvas
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   // Vẽ từng bông tuyết trong mảng
   flakes.forEach(function (flake) {
     drawFlake(flake);
     updateFlake(flake);
   });

   // Thêm bông tuyết mới mỗi 100ms
   if (Math.random() < 0.05) {
     createFlake();
   }

   // Lặp lại hàm loop
   requestAnimationFrame(loop);
 }

 // Bắt đầu loop
 loop();
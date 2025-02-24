document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("bg-video");
    let volumeSlider = document.getElementById("volume-slider");
    let clickScreen = document.querySelector(".click");

    // Mặc định âm lượng = 0, nhạc bị tắt
    video.volume = 0.0;
    video.muted = true;

    // Khi kéo thanh trượt, cập nhật âm lượng video
    volumeSlider.addEventListener("input", function () {
        video.volume = volumeSlider.value;
        if (video.volume > 0) {
            video.muted = false; // Nếu âm lượng > 0 thì bật tiếng
        } else {
            video.muted = true;  // Nếu kéo về 0 thì tắt tiếng
        }
    });

    // Khi nhấn vào màn hình
    clickScreen.addEventListener("click", function () {
        clickScreen.classList.add("hidden"); // Ẩn phần "Click to enter"

        // Bật nhạc (mở tiếng video)
        video.muted = false;
        video.volume = 0.8; // Đặt mức âm lượng mặc định là 80%
    });
});
document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('viewCount')) {
      localStorage.setItem('viewCount', '0');
    }
    // Lấy số lượt view hiện tại và chuyển đổi thành số
    let count = parseInt(localStorage.getItem('viewCount'), 10);
    // Tăng số lượt view lên 1
    count++;
    // Lưu lại số lượt view mới vào localStorage
    localStorage.setItem('viewCount', count.toString());
    // Cập nhật hiển thị trên trang
    document.getElementById('view-count').textContent = count;
  });
  
// Tạo module utils bằng IIFE để giả lập Singleton
const utils = (() => {
  // Biến private lưu instance duy nhất
  let instance;

  // Hàm tạo instance mới chứa các hàm tiện ích
  function createInstance() {
    return {
      // Hàm sum nhận nhiều số và trả về tổng
      sum: (...nums) => nums.reduce((a, b) => a + b, 0),
    };
  }

  return {
    // Hàm getInstance sẽ trả về instance duy nhất
    getInstance: () => instance ?? (instance = createInstance()),
    // Nếu instance đã tồn tại, trả về luôn
    // Nếu chưa, gọi createInstance() tạo mới và lưu lại
  };
})();

// Kiểm tra chương trình

// Lấy instance lần đầu
const firstU = utils.getInstance();
// Lấy instance lần hai
const secondU = utils.getInstance();

// So sánh xem có phải cùng 1 đối tượng không
console.log(firstU === secondU); // true → Đúng vì cùng 1 Singleton

// Gọi hàm sum để kiểm tra
console.log(firstU.sum(1, 2, 3, 4, 5)); // 15

// Thử gọi sum qua secondU để chắc chắn
console.log(secondU.sum(10, 20, 30)); // 60

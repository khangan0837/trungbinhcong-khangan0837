// index.js

// Hàm tính trung bình cộng
function calculateAverage(number1, number2) {
    return (number1 + number2) / 2;
  }
  
  // Nhận giá trị từ dòng lệnh
  const args = process.argv.slice(2);
  const number1 = parseFloat(args[0]);
  const number2 = parseFloat(args[1]);
  
  // Kiểm tra xem đầu vào có hợp lệ không
  if (isNaN(number1) || isNaN(number2)) {
    console.log('Vui lòng nhập hai số hợp lệ.');
  } else {
    // Tính trung bình cộng và hiển thị kết quả
    const average = calculateAverage(number1, number2);
    console.log(`Trung bình cộng của ${number1} và ${number2} là: ${average}`);
  }
  
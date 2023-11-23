//bai2
function tinhGiaTriBieuThuc(x, y, z) {
    return 3 * x**2 - 5 * x * y + z**4;
}

// Kiểm tra hàm với x = 5, y = 1, z = 2
const ketQua = tinhGiaTriBieuThuc(5, 1, 2);
console.log("Kết quả:", ketQua);

//bai3
const arr = [5, 1, 4, 2, 7];

console.log("Danh sách các phần tử của mảng:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
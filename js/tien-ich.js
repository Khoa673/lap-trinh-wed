
const listFlowers = [
    { id: "hoado", title: "Hoa Hồng Đỏ", price: 15000, desc: "Biểu tượng kinh điển của tình yêu lãng mạn." },
    { id: "hoaduong", title: "Hoa Hướng Dương", price: 20000, desc: "Biểu tượng của ý chí vươn lên và niềm hy vọng." },
    { id: "tulip", title: "Hoa Tulip", price: 25000, desc: "Mang lại cảm giác thanh lịch, quý phái châu Âu." },
    { id: "tucau", title: "Hoa Cẩm Tú Cầu", price: 30000, desc: "Thể hiện lòng biết ơn và sự chân thành cảm xúc." },
    { id: "hoami", title: "Hoa Cúc Họa Mi", price: 12000, desc: "Mang nét đẹp hoang dại, trong sáng nhẹ nhàng." }
];

// Khởi chạy hệ thống tiện ích ngay khi nạp xong trang
document.addEventListener("DOMContentLoaded", function() {
    initFlowerSelect();
    generateMultiplicationTable(); // Tự động chạy bảng mặc định số 5
});


function switchAuth(type) {
    const loginForm = document.getElementById('form-login');
    const regForm = document.getElementById('form-register');
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');

    if (type === 'login') {
        loginForm.classList.remove('hidden');
        regForm.classList.add('hidden');
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
    } else {
        loginForm.classList.add('hidden');
        regForm.classList.remove('hidden');
        tabLogin.classList.remove('active');
        tabRegister.classList.add('active');
    }
    document.getElementById('auth-message').innerText = "";
}

function handleAuth(event, type) {
    event.preventDefault();
    const msgElement = document.getElementById('auth-message');
    if (type === 'login') {
        const email = document.getElementById('login-email').value;
        msgElement.style.color = "#10b981";
        msgElement.innerText = `🎉 Đăng nhập thành công! Chào mừng thành viên: ${email}`;
    } else {
        const name = document.getElementById('reg-name').value;
        msgElement.style.color = "#2563eb";
        msgElement.innerText = ` Thầy cô chú ý: Tài khoản của [${name}] đã được tạo lập trên hệ thống cấu trúc dữ liệu tạm thời thành công!`;
    }
}


function initFlowerSelect() {
    const selectElement = document.getElementById('invoice-flower-select');
    selectElement.innerHTML = listFlowers.map(flower => 
        `<option value="${flower.id}">${flower.title}</option>`
    ).join('');
    updateUnitPrice();
}

function updateUnitPrice() {
    const selectElement = document.getElementById('invoice-flower-select');
    const selectedId = selectElement.value;
    // Dùng hàm tìm kiếm đối tượng trong mảng bằng JS (.find)
    const flower = listFlowers.find(item => item.id === selectedId);
    
    if (flower) {
        document.getElementById('invoice-price-view').value = flower.price.toLocaleString('vi-VN') + " VNĐ";
    }
    calculateInvoice();
}

function calculateInvoice() {
    const selectElement = document.getElementById('invoice-flower-select');
    const selectedId = selectElement.value;
    const qty = parseInt(document.getElementById('invoice-quantity').value) || 1;
    
    const flower = listFlowers.find(item => item.id === selectedId);
    if (flower) {
        const total = flower.price * qty;
        document.getElementById('invoice-total').innerText = total.toLocaleString('vi-VN') + " VNĐ";
    }
}


function generateMultiplicationTable() {
    const num = parseInt(document.getElementById('math-number').value);
    const resultDiv = document.getElementById('multiplication-result');
    
    if (isNaN(num) || num < 1 || num > 10) {
        resultDiv.innerHTML = "<p style='color:red;'>Vui lòng nhập số hợp lệ từ 1 đến 10.</p>";
        return;
    }

    let htmlTable = `<h3>BẢNG CỬU CHƯƠNG ${num}</h3><ul>`;
    // Vòng lặp thuật toán cơ bản xuất bảng cửu chương
    for (let i = 1; i <= 10; i++) {
        htmlTable += `<li>${num} x ${i} = <strong>${num * i}</strong></li>`;
    }
    htmlTable += "</ul>";
    resultDiv.innerHTML = htmlTable;
}

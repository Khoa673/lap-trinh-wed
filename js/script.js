// Dữ liệu chi tiết của 6 loại hoa (Đã sửa lại khóa trùng khớp với id trên URL của file HTML)
const flowerData = {
    "hoado": {
        title: "Hoa Hồng Đỏ",
        price: "15.000 VNĐ / cành",
        img: "../assets/hoado.jfif",
        desc: "Biểu tượng kinh điển của tình yêu nồng cháy, sự lãng mạn và đam mê. Hoa hồng đỏ tại cửa hàng được tuyển chọn từ Đà Lạt, cánh dày mịn màng, form dáng chuẩn và giữ được hương thơm tự nhiên rất lâu."
    },
    "hoaduong": {
        title: "Hoa Hướng Dương",
        price: "25.000 VNĐ / cành",
        img: "../assets/hoaduong.jfif",
        desc: "Đại diện cho niềm hy vọng, sự ấm áp, trường thọ và lòng kiên định luôn hướng về phía mặt trời. Thích hợp tặng chúc mừng sinh nhật, lễ tốt nghiệp hoặc khai trương."
    },
    "tulip": {
        title: "Hoa Tulip",
        price: "40.000 VNĐ / cành",
        img: "../assets/tulip.jfif",
        desc: "Loài hoa mang nét quý phái, thanh lịch, đại diện cho lời tuyên bố về một tình yêu hoàn hảo. Hoa được nhập khẩu trực tiếp từ Hà Lan với công nghệ bảo quản tối tân giữ trọn sắc màu."
    },
    "tucau": {
        title: "Hoa Cẩm Tú Cầu",
        price: "60.000 VNĐ / bó",
        img: "../assets/tucau.jfif",
        desc: "Thể hiện sự biết ơn chân thành và những cảm xúc trọn vẹn từ trái tim. Điểm đặc biệt của loại hoa này là những cụm hoa hình cầu lớn đan xen nhiều sắc màu dịu nhẹ từ xanh, hồng đến tím."
    },
    "hoami": {
        title: "Hoa Cúc Họa Mi",
        price: "30.000 VNĐ / bó",
        img: "../assets/hoami.jfif",
        desc: "Mang vẻ đẹp thuần khiết, mộc mạc và dịu dàng của những ngày chớm đông. Cánh hoa mỏng manh trắng muốt ôm lấy nhụy vàng tinh khôi đem lại cảm giác bình yên, thư thái."
    },
    "diep": {
        title: "Hoa Lan Hồ Điệp",
        price: "250.000 VNĐ / chậu",
        img: "../assets/diep.jfif",
        desc: "Được mệnh danh là nữ hoàng của các loài hoa lan, biểu trưng cho sự giàu sang, phú quý, phong thủy thịnh vượng và cốt cách thanh cao. Hoa cực kỳ bền màu, có thể trưng bày từ 1 đến 2 tháng."
    }
};

// Logic xử lý hiển thị nội dung trên trang chi-tiet.html
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const flowerId = urlParams.get('id');

    if (flowerId && flowerData[flowerId]) {
        const flower = flowerData[flowerId];
        
        // Kiểm tra nếu các phần tử DOM tồn tại thì mới gán giá trị
        if (document.getElementById("detail-title")) {
            document.getElementById("detail-title").innerText = flower.title;
            document.getElementById("detail-price").innerText = flower.price;
            document.getElementById("detail-description").innerText = flower.desc;
            
            // ĐÃ SỬA: Tìm đúng id="detail-img" của thẻ <img> và thay đổi thuộc tính src thành đường dẫn ảnh .jfif
            if (document.getElementById("detail-img")) {
                document.getElementById("detail-img").src = flower.img;
            }
        }
    }
});

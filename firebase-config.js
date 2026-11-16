// ============================================================================
// CẤU HÌNH FIREBASE — điền thông tin project Firebase của bạn vào đây.
// Lấy các giá trị này tại: Firebase Console > Project settings > General
// > phần "Your apps" > Web app > SDK setup and configuration.
// Đây KHÔNG phải là thông tin bí mật (an toàn khi để công khai trên GitHub),
// vì quyền truy cập thực sự được kiểm soát bởi Firestore Security Rules
// và Firebase Authentication — xem hướng dẫn trong README.md.
// ============================================================================

export const firebaseConfig = {
  apiKey: "AIzaSyCduajuXe2J_5RR-dNvhzdP5D7_eq2s8WQ",
  authDomain: "lich-cong-tac-ldvp.firebaseapp.com",
  projectId: "lich-cong-tac-ldvp",
  storageBucket: "lich-cong-tac-ldvp.firebasestorage.app",
  messagingSenderId: "53233702693",
  appId: "1:53233702693:web:2ae1cc055559d400222ccc",
};

// Tên 6 chức danh Lãnh đạo Văn phòng Tỉnh uỷ (có thể sửa trực tiếp trong
// trang Quản lý danh sách lãnh đạo ở giao diện nhập liệu; đây chỉ là giá
// trị khởi tạo lần đầu khi chưa có dữ liệu trong Firestore).
export const DEFAULT_LEADERS = [
  {
    id: "l1",
    name: "Đ/c Lê Văn Miều",
    title: "Tỉnh uỷ viên, Chánh Văn phòng Tỉnh uỷ",
  },
  {
    id: "l2",
    name: "Đ/c Nông Thị Thuỳ Trang",
    title: "Phó Chánh Văn phòng Tỉnh uỷ",
  },
  {
    id: "l3",
    name: "Đ/c Mạc Thuỳ Linh",
    title: "Phó Chánh Văn phòng Tỉnh uỷ",
  },
  {
    id: "l4",
    name: "Đ/c Hoàng Văn Kiên",
    title: "Phó Chánh Văn phòng Tỉnh uỷ",
  },
  {
    id: "l5",
    name: "Đ/c Phạm Xuân Tùng",
    title: "Phó Chánh Văn phòng Tỉnh uỷ",
  },
  {
    id: "l6",
    name: "Đ/c Hoàng Thị Thu Trang",
    title: "Phó Chánh Văn phòng Tỉnh uỷ",
  },
];

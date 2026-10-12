# QUY TẮC ĐÁNH GIÁ & VẬN HÀNH TEST ADS THỢ ĐẤT MỎ

Tài liệu vận hành test ad gọn nhẹ cho Trung với ngân sách tối thiểu, đo lường trực tiếp cuộc gọi/tin nhắn tại Cẩm Phả.

---

## 1. KẾ HOẠCH NGÂN SÁCH & LỊCH CHẠY TUẦN TỰ

- **Tổng ngân sách dự kiến:** 300.000 VNĐ (Trần tối đa: 500.000 VNĐ).
- **Tổng thời gian:** 20 ngày, chạy tuần tự từng dịch vụ:
  - **Giai đoạn 1 (Ngày 1 – Ngày 10):** Chạy **Camera K1** (~15.000 VNĐ/ngày).
  - **Giai đoạn 2 (Ngày 11 – Ngày 20):** Chạy **IT / Máy tính M1** (~15.000 VNĐ/ngày).
- **Mục tiêu cốt lõi:** Đo chi phí thực tế trên mỗi liên hệ (Cost Per Lead). Tốc độ có khách thật và đo đạc thực tế quan trọng hơn mọi lý thuyết.

---

## 2. CHECKLIST KIỂM TRA KỸ THUẬT (KHI CHI ~75.000 ĐỒNG MÀ 0 HIỂN THỊ / 0 CLICK)

Nếu quảng cáo đã cắn khoảng 75.000 VNĐ (hoặc sau 3–4 ngày) mà ghi nhận **0 lượt hiển thị hoặc 0 lượt click**, kiểm tra ngay 3 điểm:
1. **Trạng thái ad:** Chiến dịch có đang thực sự "Đang hoạt động" (Active) không, hay đang bị kẹt xét duyệt/tạm dừng?
2. **Chính sách duyệt:** Ad có bị Facebook gắn cờ từ chối / hạn chế tài khoản không?
3. **Cấu hình nút bấm:** Số hotline (`0888 942 247`), nút gọi điện (`tel:0888942247`) hoặc nút gửi tin nhắn Messenger đã cài đặt đúng chưa?

---

## 3. GHI NHẬN LIÊN HỆ VÀO `ops/leads.csv`

Mỗi khi có khách gọi hotline `0888 942 247` hoặc nhắn tin:
1. **Hỏi thăm nguồn:** *"Anh/chị biết số bên em từ đâu ạ?"*
2. **Ghi nhận ngay 1 dòng vào `ops/leads.csv`:**
   - **`source`**: Ghi rõ nguồn (`fb_ad_k1`, `fb_ad_m1`, `fb_unknown`, `direct`, `referral`).
   - **Khách hỏi gì:** Ghi rõ nhu cầu cụ thể vào cột `notes` (ví dụ: lắp 2 mắt camera gia đình, cài win máy bàn, tư vấn mua case đồ họa...).
   - **`quote_vnd`**: Mức giá Trung báo cho khách.
   - **`status`**: Chốt thành công (`won`) hay chưa chốt/từ chối (`lost`, `contacted`).
   - **`final_vnd` & `profit_vnd`**: Doanh thu thực thu và lợi nhuận ròng của Trung.
   - **`technician`**: Ghi `Trung` (Trung tự làm, không mất phí điều thợ).

---

## 4. THEO DÕI HÀNG NGÀY TRONG `ops/ad-tracker.csv`

Cuối mỗi ngày ghi nhận:
- `spend_vnd`: Số tiền tiêu thực tế (~15.000đ).
- `impressions`, `clicks`: Lượt hiển thị và click.
- `calls`, `leads`: Số cuộc gọi và tin nhắn nhận được.
- Chi phí mỗi liên hệ = `spend_vnd` / `leads`.

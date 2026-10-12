# QUY TẮC ĐÁNH GIÁ & VẬN HÀNH TEST ADS THỢ ĐẤT MỎ

Tài liệu hướng dẫn thực tế cho Trung khi test 3 concept ads không ảnh (N1, N2, N3) cho dịch vụ Điện lạnh tại Cẩm Phả.

---

## 1. NGUYÊN TẮC TEST BAN ĐẦU
- **Mục tiêu số 1:** Tìm ra creative mang về cuộc gọi/tin nhắn đầu tiên với chi phí thấp nhất. Tốc độ ra tiền thắng sự hoàn hảo.
- **Không vội tắt sớm:** Thuật toán quảng cáo cần thời gian máy học để phân phối đến đúng đối tượng có nhu cầu tại địa bàn Cẩm Phả.

---

## 2. TIÊU CHÍ ĐÁNH GIÁ CHI TIẾT

### A. Thời gian chạy tối thiểu
- **Tối thiểu 3 ngày liên tục** cho mỗi creative trước khi đưa ra bất kỳ kết luận nào.
- Không tắt hoặc chỉnh sửa ad trong vòng 24–48 giờ đầu tiên.

### B. Ngân sách chi tiêu tối thiểu trước khi kết luận
- **Tối thiểu 100.000 VNĐ – 150.000 VNĐ** cho mỗi creative trước khi đánh giá.

### C. Khi nào TẮT quảng cáo (Kill Criteria)?
Tắt creative ngay khi vi phạm một trong các điều kiện sau:
1. **Không có phản hồi:** Đã chi đủ 150.000 VNĐ (hoặc chạy qua 3 ngày) mà đạt **0 cuộc gọi / 0 tin nhắn**.
2. **Chi phí lead vượt ngưỡng trần:** Chi phí cho 1 cuộc gọi/tin nhắn (Cost Per Lead) vượt quá ngưỡng cho phép:  
   `[CPL tối đa: chờ Trung xác nhận; công thức = lợi nhuận Trung trên 1 job × tỉ lệ chốt]`  
   *(Nếu chi phí cho 1 cuộc gọi cao hơn mức này thì chạy tiếp sẽ bị lỗ).*

### D. Khi nào GIỮ và TĂNG NGÂN SÁCH (Scale Criteria)?
- Creative mang về cuộc gọi/tin nhắn với chi phí nằm dưới ngưỡng CPL tối đa và thợ nhận việc hoàn thành có lãi.
- Tăng ngân sách từ từ (tối đa **20% – 30% mỗi ngày**), không nhân đôi ngân sách đột ngột tránh làm gãy phân phối của thuật toán.

---

## 3. ĐO NGUỒN CUỘC GỌI & GHI NHẬN `ops/leads.csv`

Khi khách gọi tới số hotline `0888 942 247`:
1. **Hỏi thăm nguồn:** Hỏi tự nhiên người gọi xem họ thấy quảng cáo nào (ví dụ: *"Bác thấy bài đăng máy không mát hay bài thợ tại Cẩm Phả ạ?"*).
2. **Ghi vào cột `source` của `ops/leads.csv`:**
   - Thấy quảng cáo sự cố máy không mát -> Ghi: `fb_ad_n1`
   - Thấy quảng cáo thợ địa phương Cẩm Phả -> Ghi: `fb_ad_n2`
   - Thấy quảng cáo bảo dưỡng vệ sinh -> Ghi: `fb_ad_n3`
   - Khách vãng lai / người quen -> Ghi: `direct` hoặc `referral`
3. Điền đầy đủ các thông tin: ngày, dịch vụ, tên/SĐT khách, khu vực phường tại Cẩm Phả, hiện tượng hỏng.

---

## 4. CÁC CHỈ SỐ BẮT BUỘC GHI VÀO `ops/ad-tracker.csv` MỖI NGÀY

Vào cuối mỗi ngày (hoặc sáng hôm sau), mở file `ops/ad-tracker.csv` và nhập chính xác một dòng dữ liệu cho mỗi chiến dịch/creative đang chạy:

1. **`date`**: Ngày ghi nhận (định dạng `YYYY-MM-DD`, ví dụ: `2026-10-13`).
2. **`campaign`**: Tên chiến dịch (ví dụ: `DL_N1_PROBLEM`, `DL_N2_LOCAL`, `DL_N3_MAINT`).
3. **`service`**: Điền `Điện lạnh`.
4. **`spend_vnd`**: Số tiền VNĐ quảng cáo đã chi tiêu thực tế trong ngày (lấy từ cột Amount Spent).
5. **`impressions`**: Số lượt hiển thị.
6. **`clicks`**: Số lượt nhấp.
7. **`calls`**: Số cuộc gọi đổ về số hotline `0888 942 247` từ quảng cáo.
8. **`leads`**: Tổng số liên hệ nhận được (calls + tin nhắn).
9. **`jobs_won`**: Số job thực tế đã chốt thành công và dispatch cho bạn bè thợ đi làm.
10. **`revenue_vnd`**: Doanh thu tổng từ khách hàng.
11. **`profit_vnd`**: Lợi nhuận ròng thực nhận của Trung sau khi trừ tiền trả cho thợ và chi phí quảng cáo.

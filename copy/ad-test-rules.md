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
- **Tối thiểu 100.000 VNĐ – 150.000 VNĐ** cho mỗi creative.
- Với CPM tại khu vực Cẩm Phả ước tính khoảng 30.000 – 50.000 VNĐ, mức chi tiêu 100.000 – 150.000 VNĐ sẽ đạt khoảng 2.000 – 4.000 lượt hiển thị, đủ cỡ mẫu thống kê để đánh giá phản hồi thực tế của khách hàng.

### C. Khi nào TẮT quảng cáo (Kill Criteria)?
Tắt creative ngay khi vi phạm một trong các điều kiện sau:
1. **Không có phản hồi:** Đã chi đủ 150.000 VNĐ (hoặc chạy qua 3 ngày) mà đạt **0 cuộc gọi / 0 tin nhắn**.
2. **Chi phí lead quá cao:** Chi phí cho 1 cuộc gọi/tin nhắn (Cost Per Lead) vượt quá **80.000 VNĐ** (ăn mòn lợi nhuận hoa hồng của 1 job sửa chữa nhỏ).
3. **Mức độ tương tác quá thấp:** Sau khi chi 50.000 VNĐ mà tỷ lệ CTR (Click-Through Rate) dưới **1.0%** và tần suất lặp lại cao nhưng không ai bấm gọi.

### D. Khi nào GIỮ và TĂNG NGÂN SÁCH (Scale Criteria)?
- Creative mang về cuộc gọi/tin nhắn với chi phí **≤ 40.000 – 50.000 VNĐ/lead** và thợ nhận việc hoàn thành thành công.
- Tăng ngân sách từ từ (tối đa **20% – 30% mỗi ngày**), không nhân đôi ngân sách đột ngột tránh làm gãy phân phối của thuật toán.

---

## 3. CÁC CHỈ SỐ BẮT BUỘC GHI VÀO `ops/ad-tracker.csv` MỖI NGÀY

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

---

## 4. QUY TRÌNH XỬ LÝ KHI CÓ CUỘC GỌI
1. Khách gọi tới `0888 942 247` -> Trung ghi ngay thông tin vào `ops/leads.csv` (tên, số điện thoại, địa chỉ phường tại Cẩm Phả, hiện tượng hỏng).
2. Gọi ngay cho thợ điện lạnh phụ trách khu vực đó để điều phối.
3. Khi hoàn thành công việc: cập nhật trạng thái `won` hoặc `lost`, số tiền thu và chi cho thợ vào `ops/leads.csv`.

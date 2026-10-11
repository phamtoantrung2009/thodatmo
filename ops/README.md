# HƯỚNG DẪN VẬN HÀNH & KINH TẾ ĐƠN VỊ (UNIT ECONOMICS) — THỢ ĐẤT MỎ

Hệ thống điều phối dịch vụ kỹ thuật tại Cẩm Phả, Quảng Ninh.  
Đầu mối tiếp nhận việc: **Trung** · Hotline: **0888 942 247** · Domain: **datmo.io.vn**

---

## 1. Cấu trúc bảng theo dõi

### 1.1 `ops/leads.csv` — Sổ theo dõi đầu việc và khách hàng
Bảng này ghi nhận từng khách hàng liên hệ và hành trình xử lý đơn hàng.

| Cột | Ý nghĩa | Ghi chú |
|---|---|---|
| `id` | Mã đơn hàng | Quy ước: `DM-YY##` (ví dụ `DM-2601`, `DM-2602`) |
| `date` | Ngày nhận thông tin | Định dạng: `YYYY-MM-DD` |
| `source` | Kênh tiếp cận | Facebook Ad, Hotline trực tiếp, Giới thiệu, Zalo |
| `service` | Dịch vụ yêu cầu | Điện lạnh, Camera, Điện nước, Máy tính, Solar, Bảo trì |
| `customer` | Tên khách hàng | |
| `phone` | Số điện thoại khách | |
| `area` | Khu vực tại Cẩm Phả | Cẩm Trung, Cẩm Thành, Cẩm Thạch, Cẩm Bình, Cửa Ông, Mông Dương... |
| `status` | Trạng thái xử lý | `Mới tiếp nhận` → `Đã báo giá` → `Đã điều thợ` → `Đang xử lý` → `Hoàn thành` / `Hủy` |
| `quote_vnd` | Giá báo ban đầu (VNĐ) | Báo trước khi làm, không tự tiện tăng giá |
| `final_vnd` | Doanh thu thực thu (VNĐ) | Tiền thực tế khách thanh toán |
| `technician` | Tên thợ phụ trách | Thợ đối tác nhận việc |
| `tech_cost_vnd`| Tiền trả cho thợ (VNĐ) | Theo thỏa thuận khoán hoặc tỷ lệ phân chia |
| `other_cost_vnd`| Chi phí phát sinh (VNĐ) | Vật tư mua hộ, xăng xe hỗ trợ (nếu có) |
| `profit_vnd` | Lợi nhuận gộp đơn (VNĐ) | `final_vnd - tech_cost_vnd - other_cost_vnd` |
| `notes` | Ghi chú chi tiết | Tình trạng máy, phản hồi của khách, bảo hành |

---

### 1.2 `ops/ad-tracker.csv` — Sổ theo dõi hiệu quả quảng cáo

| Cột | Ý nghĩa |
|---|---|
| `date` | Ngày chạy quảng cáo (`YYYY-MM-DD`) |
| `campaign` | Tên chiến dịch (VD: `FB_CamPha_DienLanh_Test01`) |
| `service` | Hạng mục dịch vụ chạy ads |
| `spend_vnd` | Ngân sách quảng cáo đã chi trong ngày (VNĐ) |
| `impressions` | Số lượt hiển thị |
| `clicks` | Số lượt click vào quảng cáo |
| `calls` | Số cuộc gọi ghi nhận từ ad |
| `leads` | Tổng số liên hệ/tin nhắn có nhu cầu thực tế |
| `jobs_won` | Số đơn chốt thành công và làm xong |
| `revenue_vnd` | Tổng doanh thu đem lại từ các đơn này |
| `profit_vnd` | Tổng lợi nhuận gộp từ các đơn hoàn thành |

---

## 2. Công thức đo lường & Kinh tế đơn vị (Formulas)

### 2.1 Hiệu quả quảng cáo (Top funnel)
- **Tỷ lệ nhấp (CTR - Click-Through Rate):**
  $$\text{CTR} = \frac{\text{clicks}}{\text{impressions}} \times 100\%$$
- **Chi phí cho mỗi Lead (CPL - Cost Per Lead):**
  $$\text{CPL} = \frac{\text{spend\_vnd}}{\text{leads}}$$
  *(Mục tiêu giai đoạn test Điện lạnh: giữ CPL dưới mức kỳ vọng để đảm bảo biên lợi nhuận)*

### 2.2 Tỷ lệ chuyển đổi & Giá vốn khách hàng (Conversion & CAC)
- **Tỷ lệ chốt đơn (Close Rate / Conversion Rate):**
  $$\text{Close Rate} = \frac{\text{jobs\_won}}{\text{leads}} \times 100\%$$
- **Chi phí thu hút mỗi khách hàng trả tiền (CAC - Customer Acquisition Cost):**
  $$\text{CAC per Job} = \frac{\text{spend\_vnd}}{\text{jobs\_won}}$$

### 2.3 Lợi nhuận đơn vị & Dòng tiền (Unit Economics)
- **Lợi nhuận gộp mỗi việc (Gross Profit per Job):**
  $$\text{Profit per Job} = \text{final\_vnd} - \text{tech\_cost\_vnd} - \text{other\_cost\_vnd}$$
- **Lợi nhuận ròng sau chi phí quảng cáo (Net Profit after Ad Spend):**
  $$\text{Net Profit} = \sum \text{profit\_vnd} - \sum \text{spend\_vnd}$$
- **Tỷ suất lợi nhuận trên chi phí quảng cáo (ROAS):**
  $$\text{ROAS} = \frac{\text{revenue\_vnd}}{\text{spend\_vnd}}$$

### 2.4 Thanh toán cho thợ (Payout to Technician)
- Thợ nhận tiền khoán theo công việc hoặc thỏa thuận cố định trước khi xuất phát:
  $$\text{Payout to Technician} = \text{tech\_cost\_vnd}$$
- Quy tắc điều phối: Báo rõ đầu việc + địa chỉ + giá nhận cho thợ trước khi đi; khách thanh toán trực tiếp hoặc chuyển khoản về đầu mối `0888 942 247`. Đối soát tiền thợ trong ngày hoặc ngay sau khi hoàn thành bàn giao.

---

## 3. Quy trình điều phối 5 bước (Operating Workflow)

1. **Tiếp nhận:** Khách gọi/nhắn hotline `0888 942 247`. Ghi ngay vào `leads.csv`.
2. **Khảo sát/Định giá sơ bộ:** Hỏi triệu chứng hư hỏng, chủng loại máy, địa bàn tại Cẩm Phả. Báo khung giá hoặc báo thợ qua kiểm tra trực tiếp.
3. **Điều phối (Dispatch):** Liên hệ thợ kỹ thuật phụ trách khu vực gần nhất. Chuyển thông tin khách, địa chỉ, triệu chứng.
4. **Xử lý & Nghiệm thu:** Thợ báo giá chính xác cho khách trước khi làm. Sau khi làm xong, kiểm tra vận hành, dán tem bảo hành và lập phiếu bàn giao.
5. **Thanh toán & Chăm sóc:** Thu tiền, đối soát chi phí cho thợ, cập nhật trạng thái `Hoàn thành` vào `leads.csv`.

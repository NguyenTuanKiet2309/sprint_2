export default function Product() {
  return (
    <>
      <section
        className="brand_section layout_padding2"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="brand_heading" style={{ color: "black" }}>
            <h3 className="custom_heading" style={{ color: "black" }}>
              ĐẠI LÝ ROLEX CHÍNH THỨC TẠI VIỆT NAM
            </h3>
            <p className="font-weight-bold">
              Đồng hồ Rolex được chế tạo từ những nguyên liệu thô tốt nhất và
              được lắp ráp tỉ mỉ đến từng chi tiết. Mỗi thành phần được thiết
              kế, phát triển và sản xuất với độ chính xác cao nhất tiêu chuẩn.
            </p>
          </div>
        </div>
        <div className="container-fluid brand_item-container">
          <div className="col-md-3">Tìm Kiếm ở đây</div>
          <div className="col-md-9">
            <div className="row">
              <div className="brand_item-box col-md-3">
                <div className="brand_img-box  item-1 ">
                  <a style={{ color: "#fff" }}>Xem Chi Tiết</a>
                </div>
                <div className="brand_detail-box">
                  <h6 className>Rolex DateJust</h6>
                  <button>Thêm Giỏ Hàng</button>
                </div>
              </div>
              <div className="brand_item-box col-md-3" style={{margin: "30px 50px 0 50px"}}>
                <div className="brand_img-box  item-2">
                  <a style={{ color: "#fff" }}>Xem Chi Tiết</a>{" "}
                </div>
                <div className="brand_detail-box">
                  <h6 className>Rolex Day-Date</h6>
                  <button>Thêm Giỏ Hàng</button>
                </div>
              </div>
              <div className="brand_item-box col-md-3">
                <div className="brand_img-box  item-3">
                  <a style={{ color: "#fff" }}>Xem Chi Tiết</a>{" "}
                </div>
                <div className="brand_detail-box">
                  <h6 className>Rolex CosmoGrahp Daytona</h6>
                  <button>Thêm Giỏ Hàng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

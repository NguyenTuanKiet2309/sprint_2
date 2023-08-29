export default function DetailsProduct() {
  return (
    <div className="details">
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a
                  data-fslightbox="mygalley"
                  className="rounded-4"
                  target="_blank"
                  data-type="image"
                  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
                >
                  <img
                    style={{
                      maxWidth: "100%",
                      height: "500px",
                      maxHeight: "100vh",
                      margin: "auto",
                    }}
                    className="rounded-4 fit"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KPvFxMEEYn_oJIQZCSVidnIuizZQElvPJg&usqp=CAU"
                  />
                </a>
              </div>
              {/* <div className="d-flex justify-content-center mb-3">
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  data-type="image"
                  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp"
                >
                  <img
                    width={60}
                    height={60}
                    className="rounded-2"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp"
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  data-type="image"
                  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp"
                >
                  <img
                    width={60}
                    height={60}
                    className="rounded-2"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp"
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  data-type="image"
                  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp"
                >
                  <img
                    width={60}
                    height={60}
                    className="rounded-2"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp"
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  data-type="image"
                  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp"
                >
                  <img
                    width={60}
                    height={60}
                    className="rounded-2"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp"
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  data-type="image"
                  href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
                >
                  <img
                    width={60}
                    height={60}
                    className="rounded-2"
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
                  />
                </a>
              </div> */}
              {/* thumbs-wrap.// */}
              {/* gallery-wrap .end// */}
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                  Rolex Day-Date in 18 ct yellow gold
                  <br />
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fas fa-star-half-alt" />
                    
                  </div>
                 
                  <span className="text-success ms-2">M228238-0061</span>
                </div>
               
                <p>
                  Được chế tác vào năm 1945, Datejust là chiếc đồng hồ
                  chronometer đeo tay tự lên dây và chống thấm nước đầu tiên có
                  màn hình cửa sổ hiển thị ngày tại điểm 3 giờ trên mặt số. Sự
                  kết hợp độc đáo này đã được nâng tầm vào năm 1953 với hiệu ứng
                  phóng đại của ống kính Cyclops trên màn hình hiển thị.
                </p>
                <div className="row">
                  <dt className="col-3">Type</dt>
                  <dd className="col-9">Regular</dd>
                  <dt className="col-3">Màu</dt>
                  <dd className="col-9">Xanh</dd>
                  <dt className="col-3">Đường kính mặt</dt>
                  <dd className="col-9">36mm</dd>
                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">Reebook</dd>
                </div>
                <hr />
                <div className="row mb-4">
                  
                  {/* col.// */}
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div
                      className="input-group mb-3"
                      style={{ width: "170px" }}
                    >
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <input
                        type="text"
                        className="form-control text-center border border-secondary"
                        placeholder={14}
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-plus" />
                      </button>
                    </div>
                  </div>
                </div>
                <a href="#" className="btn btn-warning shadow-0">
                  {" "}
                  Buy now{" "}
                </a>
                <a href="#" className="btn btn-primary shadow-0">
                  {" "}
                  <i className="me-1 fa fa-shopping-basket" /> Add to cart{" "}
                </a>
                <a
                  href="#"
                  className="btn btn-light border border-secondary py-2 icon-hover px-3"
                >
                  {" "}
                  <i className="me-1 fa fa-heart fa-lg" /> Save{" "}
                </a>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

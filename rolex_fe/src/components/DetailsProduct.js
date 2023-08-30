import "../details.css";
export default function DetailsProduct() {
  return (
    <div className="pd-wrap">
    <div className="container-fluid form-details">
      <div className="heading-section">
        <h2>Product Details</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div id="slider" className="owl-carousel product-slider">
            <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFsC7gHcH20zlfFQlIqmzvZ0E-RuHE6eiQA&usqp=CAU" />
            </div>
            <div className="item">
              <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
            </div>
            <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
            </div>
            <div className="item">
              <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
            </div>
            <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
            </div>
            <div className="item">
              <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
            </div>
            <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
            </div>
          </div>
          <div id="thumb" className="owl-carousel product-thumb">
            <div className="item">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
            </div>
            <div className="item">
              <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
            </div>
            <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
            </div>
            <div className="item">
              <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
            </div>
            <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
            </div>
            <div className="item">
              <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
            </div>
            <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-dtl">
            <div className="product-info">
              <div className="product-name">Variable Product</div>
              <div className="reviews-counter">
                <div className="rate">
                  <input type="radio" id="star5" name="rate" defaultValue={5} defaultChecked />
                  <label htmlFor="star5" title="text">5 stars</label>
                  <input type="radio" id="star4" name="rate" defaultValue={4} defaultChecked />
                  <label htmlFor="star4" title="text">4 stars</label>
                  <input type="radio" id="star3" name="rate" defaultValue={3} defaultChecked />
                  <label htmlFor="star3" title="text">3 stars</label>
                  <input type="radio" id="star2" name="rate" defaultValue={2} />
                  <label htmlFor="star2" title="text">2 stars</label>
                  <input type="radio" id="star1" name="rate" defaultValue={1} />
                  <label htmlFor="star1" title="text">1 star</label>
                </div>
                <span>3 Reviews</span>
              </div>
              <div className="product-price-discount"><span>$39.00</span><span className="line-through">$29.00</span></div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="size">Size</label>
                <select id="size" name="size" className="form-control">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="color">Color</label>
                <select id="color" name="color" className="form-control">
                  <option>Blue</option>
                  <option>Green</option>
                  <option>Red</option>
                </select>
              </div>
            </div>
            <div className="product-count">
              <label htmlFor="size">Quantity</label>
              <form action="#" className="display-flex">
                <div className="qtyminus">-</div>
                <input type="text" name="quantity" defaultValue={1} className="qty" />
                <div className="qtyplus">+</div>
              </form>
              <a href="#" className="round-black-btn">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div className="product-info-tabs">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews (0)</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </div>
          <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
            <div className="review-heading">REVIEWS</div>
            <p className="mb-20">There are no reviews yet.</p>
            <form className="review-form">
              <div className="form-group">
                <label>Your rating</label>
                <div className="reviews-counter">
                  <div className="rate">
                    <input type="radio" id="star5" name="rate" defaultValue={5} />
                    <label htmlFor="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" defaultValue={4} />
                    <label htmlFor="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" defaultValue={3} />
                    <label htmlFor="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" defaultValue={2} />
                    <label htmlFor="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" defaultValue={1} />
                    <label htmlFor="star1" title="text">1 star</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Your message</label>
                <textarea className="form-control" rows={10} defaultValue={""} />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" name className="form-control" placeholder="Name*" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" name className="form-control" placeholder="Email Id*" />
                  </div>
                </div>
              </div>
              <button className="round-black-btn">Submit Review</button>
            </form>
          </div>
        </div>
      </div>
      <div style={{textAlign: 'center', fontSize: '14px', paddingBottom: '20px'}}>Get free icon packs for your next project at <a href="http://iiicons.in/" target="_blank" style={{color: '#ff5e63', fontWeight: 'bold'}}>www.iiicons.in</a></div>
    </div>
  </div>
    // <div className="details">
    //   <section className="py-5">
    //     <div className="container">
    //       <div className="row gx-5">
    //         <aside className="col-lg-6">
    //           <div className="border rounded-4 mb-3 d-flex justify-content-center">
    //             <a
    //               data-fslightbox="mygalley"
    //               className="rounded-4"
    //               target="_blank"
    //               data-type="image"
    //               href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
    //             >
    //               <img
    //                 style={{
    //                   maxWidth: "100%",
    //                   height: "500px",
    //                   maxHeight: "100vh",
    //                   margin: "auto",
    //                 }}
    //                 className="rounded-4 fit"
    //                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KPvFxMEEYn_oJIQZCSVidnIuizZQElvPJg&usqp=CAU"
    //               />
    //             </a>
    //           </div>
    //           {/* <div className="d-flex justify-content-center mb-3">
    //             <a
    //               data-fslightbox="mygalley"
    //               className="border mx-1 rounded-2"
    //               target="_blank"
    //               data-type="image"
    //               href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp"
    //             >
    //               <img
    //                 width={60}
    //                 height={60}
    //                 className="rounded-2"
    //                 src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp"
    //               />
    //             </a>
    //             <a
    //               data-fslightbox="mygalley"
    //               className="border mx-1 rounded-2"
    //               target="_blank"
    //               data-type="image"
    //               href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp"
    //             >
    //               <img
    //                 width={60}
    //                 height={60}
    //                 className="rounded-2"
    //                 src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp"
    //               />
    //             </a>
    //             <a
    //               data-fslightbox="mygalley"
    //               className="border mx-1 rounded-2"
    //               target="_blank"
    //               data-type="image"
    //               href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp"
    //             >
    //               <img
    //                 width={60}
    //                 height={60}
    //                 className="rounded-2"
    //                 src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp"
    //               />
    //             </a>
    //             <a
    //               data-fslightbox="mygalley"
    //               className="border mx-1 rounded-2"
    //               target="_blank"
    //               data-type="image"
    //               href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp"
    //             >
    //               <img
    //                 width={60}
    //                 height={60}
    //                 className="rounded-2"
    //                 src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp"
    //               />
    //             </a>
    //             <a
    //               data-fslightbox="mygalley"
    //               className="border mx-1 rounded-2"
    //               target="_blank"
    //               data-type="image"
    //               href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
    //             >
    //               <img
    //                 width={60}
    //                 height={60}
    //                 className="rounded-2"
    //                 src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
    //               />
    //             </a>
    //           </div> */}
    //           {/* thumbs-wrap.// */}
    //           {/* gallery-wrap .end// */}
    //         </aside>
    //         <main className="col-lg-6">
    //           <div className="ps-lg-3 product_details">
    //             <h4 className="title text-dark">
    //               Rolex Day-Date in 18 ct yellow gold
    //               <br />
    //             </h4>
    //             <div className="d-flex flex-row my-3">
    //               <div className="text-warning mb-1 me-2">
    //                 <i className="fa fa-star" />
    //                 <i className="fa fa-star" />
    //                 <i className="fa fa-star" />
    //                 <i className="fa fa-star" />
    //                 <i className="fas fa-star-half-alt" />
                    
    //               </div>
                 
    //               <span className="text-success ms-2">M228238-0061</span>
    //             </div>
               
    //             <p>
    //               Được chế tác vào năm 1945, Datejust là chiếc đồng hồ
    //               chronometer đeo tay tự lên dây và chống thấm nước đầu tiên có
    //               màn hình cửa sổ hiển thị ngày tại điểm 3 giờ trên mặt số. Sự
    //               kết hợp độc đáo này đã được nâng tầm vào năm 1953 với hiệu ứng
    //               phóng đại của ống kính Cyclops trên màn hình hiển thị.
    //             </p>
    //             <div className="row">
    //               <dt className="col-3">Type</dt>
    //               <dd className="col-9">Regular</dd>
    //               <dt className="col-3">Màu</dt>
    //               <dd className="col-9">Xanh</dd>
    //               <dt className="col-3">Đường kính mặt</dt>
    //               <dd className="col-9">36mm</dd>
    //               <dt className="col-3">Brand</dt>
    //               <dd className="col-9">Reebook</dd>
    //             </div>
    //             <hr />
    //             <div className="row mb-4">
                  
    //               {/* col.// */}
    //               <div className="col-md-4 col-6 mb-3">
    //                 <label className="mb-2 d-block">Quantity</label>
    //                 <div
    //                   className="input-group mb-3"
    //                   style={{ width: "170px" }}
    //                 >
    //                   <button
    //                     className="btn btn-white border border-secondary px-3"
    //                     type="button"
    //                     id="button-addon1"
    //                     data-mdb-ripple-color="dark"
    //                   >
    //                     <i className="fas fa-minus" />
    //                   </button>
    //                   <input
    //                     type="text"
    //                     className="form-control text-center border border-secondary"
    //                     placeholder={14}
    //                     aria-label="Example text with button addon"
    //                     aria-describedby="button-addon1"
    //                   />
    //                   <button
    //                     className="btn btn-white border border-secondary px-3"
    //                     type="button"
    //                     id="button-addon2"
    //                     data-mdb-ripple-color="dark"
    //                   >
    //                     <i className="fas fa-plus" />
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //             <button style={{marginRight:"20px"}}>Mua Ngay</button>
    //             <button>Thêm Giỏ Hàng</button>
             
    //           </div>
    //         </main>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

import "../details.css";
export default function DetailsProduct() {
  return (
    <div className="detail-page">
      <div className="details-product-image row">
        <div className="col-md-6">
          <img src="https://rolex.dafc.com.vn/wp-content/uploads/watch-assets-front-facing/landscape_assets/m226627-0001_modelpage_front_facing_landscape.png"></img>
        </div>
        <div className="col-md-6">
          <div className="detail-product">
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>Rolex</div>
            <div className="name-product-detail">YACHT-MASTER 42</div>
            <div className="describe-product-detail">
              Oyster, 42 mm, titanium RLX
            </div>
            <div className="code-product-detail">m226627</div>

            <div className="describe-product-detail">
              <span id="rlx-mainwatch__price" style={{ display: "block" }}>
                <div dir="ltr" style={{ visibility: "visible" }}>
                  Giá: VND 1,083,772,500
                </div>
              </span>

              <a
                style={{ width: "274px" }}
                href="#model-availability"
                className="model-avail-button"
              >
                NHỮNG DÒNG SẢN PHẨM HIỆN CÓ
              </a>
            </div>
            <div className="rlx-retailer-model-telephone hidden-mobile model-page-call">
              <a
                itemprop="telephone"
                data-retailer-interaction="call"
                className="wa-retailer-interaction contact-watch-call"
                href="tel:+842838230455"
              >
                <span className="characters">+84 96 570 2079</span>
              </a>
            </div>
            <div class="rlx-retailer-model-telephone rlx-retailer-model-whatsapp hidden-mobile">
              <a
                itemprop="zalo"
                class="wa-retailer-interaction zalo-contact contact-watch-call"
                href="https://zalo.me/0965702079"
                target="_blank"
              >
                <span className="characters">Zalo</span>
              </a>
            </div>
            <div className="rlx-retailer-model-email hidden-mobile">
              <a
                itemprop="contact"
                href="#contact-us"
                className="rlx-corner-scrollto-contact-form wa-contact-click wa-contact-model-click"
              >
                <span className="characters">Contact Us</span>
              </a>
            </div>
            <hr/>
          </div>
        </div>
      </div>
    </div>
  );
}

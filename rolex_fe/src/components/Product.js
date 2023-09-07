import { useLocation } from "react-router";
import "../search.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { findProductByCategory } from "../services/ProductsService";
import { findCategoryById } from "../services/CategoryService";

export default function Product() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("categoryId");

  console.log(categoryId);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const ShowProductsByCategory = async () => {
    try {
      const data = await findProductByCategory(categoryId);
      console.log(products);
      setProducts(data);
    } catch (error) {
      console.log("Error products:", error);
    }
  };

  const showCategoryById = async () => {
    try {
      const data = await findCategoryById(categoryId);
      console.log(category);
      setCategory(data);
    } catch (error) {
      console.log("Error category:", error);
    }
  };
  console.log(products);
  console.log(category);
  useEffect(() => {
    ShowProductsByCategory();
    showCategoryById();
  }, []);
  return (
    <>
      <div className="">
        <img
          class="d-main-banner collection-banner alignnone wp-image-11285 size-full"
          src="https://rolex.dafc.com.vn/wp-content/uploads/rolex-watches/family-1908.jpg"
          alt="Family 1908"
          width="100%"
          height="230px"
        ></img>
      </div>
      <section
        className="brand_section layout_padding2"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="brand_heading" style={{ color: "black" }}>
            <h4>
              {category.title}
            </h4>
            <h3 className="custom_heading" style={{ color: "black",fontSize:"23px" }}>
              {category.categoryName}
            </h3>
            <p className="font" style={{textAlign:"center",paddingBottom: "1.5em"}}>{category.descriptions}</p>
          </div>
        </div>

        <div className="container-fluid brand_item-container">
          <div className="col-md-3">
            <div className="filter-wrapper">
              <div className="filter-wrapper">
                <div className="search-filter">
                  <span>Lọc Tìm Kiếm</span>
                  <div className="mobile-filter-button-wrapper">
                    <button className="rlx-grid-filters__header-reset inactive cvp-live-reset">
                      Cập nhật
                    </button>
                  </div>
                </div>
                <div
                  className="cvp-live-filter cvp-checkbox "
                  data-name="tx_gender"
                  data-sid="9c91f3d3cq"
                >
                  <label className="cvp-label">Style</label>
                  <div className="checkbox nu">
                    <label>
                      <input type="checkbox" name="tx_gender" value="nu" />
                      Nữ
                    </label>
                  </div>
                  <div className="checkbox nam">
                    <label>
                      <input type="checkbox" name="tx_gender" value="nam" />
                      Nam
                    </label>
                  </div>
                </div>

                <div
                  className="cvp-live-filter cvp-checkbox "
                  data-name="tx_material"
                  data-sid="9c91f3d3cq"
                >
                  <label className="cvp-label">Material</label>
                  <div className="checkbox oystersteel">
                    <label>
                      <input
                        type="checkbox"
                        name="tx_material"
                        value="oystersteel"
                      />
                      Oystersteel
                    </label>
                  </div>
                  <div className="checkbox oystersteel-and-gold">
                    <label>
                      <input
                        type="checkbox"
                        name="tx_material"
                        value="oystersteel-and-gold"
                      />
                      Oystersteel và vàng
                    </label>
                  </div>
                  <div className="checkbox gold">
                    <label>
                      <input type="checkbox" name="tx_material" value="gold" />
                      Vàng
                    </label>
                  </div>
                </div>
                <div
                  className="cvp-live-filter cvp-radio "
                  data-name="tx_product_cat"
                  data-sid="9c91f3d3cq"
                >
                  <label className="cvp-label">Bộ Sưu Tập</label>
                  <div className="radio"></div>
                  <div className="radio">
                    <a href="/vi/dong-ho-rolex/dong-ho-rolex/">
                      <label>BỘ SƯU TẬP ĐỒNG HỒ ROLEX TẠI VIỆT NAM | RW</label>
                    </a>
                  </div>

                  <div className="radio">
                    <a href="/vi/dong-ho-rolex/rolex-1908/">
                      <label>
                        <input
                          type="radio"
                          name="tx_product_cat"
                          value="rolex-1908"
                        />
                        &nbsp;&nbsp;&nbsp;Rolex 1908
                      </label>
                    </a>
                  </div>

                  <div className="radio">
                    <a href="/vi/dong-ho-rolex/rolex-cosmograph-daytona/">
                      <label>
                        <input
                          type="radio"
                          name="tx_product_cat"
                          value="rolex-cosmograph-daytona"
                        />
                        &nbsp;&nbsp;&nbsp;Rolex Cosmograph Daytona
                      </label>
                    </a>
                  </div>
                  <div className="radio">
                    <a href="/vi/dong-ho-rolex/rolex-datejust/">
                      <label class="currentpage">
                        <input
                          type="radio"
                          name="tx_product_cat"
                          value="rolex-datejust"
                          checked=""
                        />
                        &nbsp;&nbsp;&nbsp;Rolex Datejust
                      </label>
                    </a>
                  </div>
                  <div className="radio">
                    <a href="/vi/dong-ho-rolex/rolex-day-date/">
                      <label>
                        <input
                          type="radio"
                          name="tx_product_cat"
                          value="rolex-day-date"
                        />
                        &nbsp;&nbsp;&nbsp;Rolex Day-Date
                      </label>
                    </a>
                  </div>

                  <div className="radio">
                    <a href="/vi/dong-ho-rolex/rolex-gmt-master-ii/">
                      <label>
                        <input
                          type="radio"
                          name="tx_product_cat"
                          value="rolex-gmt-master-ii"
                        />
                        &nbsp;&nbsp;&nbsp;Rolex GMT-Master II
                      </label>
                    </a>
                  </div>

                  <div className="radio">
                    <a href="/vi/dong-ho-rolex/rolex-oyster-perpetual/">
                      <label>
                        <input
                          type="radio"
                          name="tx_product_cat"
                          value="rolex-oyster-perpetual"
                        />
                        &nbsp;&nbsp;&nbsp;Rolex Oyster Perpetual
                      </label>
                    </a>
                  </div>
                  <div className="radio">
                    <a href="/vi/dong-ho-rolex/rolex-sea-dweller/">
                      <label>
                        <input
                          type="radio"
                          name="tx_product_cat"
                          value="rolex-sea-dweller"
                        />
                        &nbsp;&nbsp;&nbsp;Rolex Sea-Dweller
                      </label>
                    </a>
                  </div>
                  <div className="radio">
                    <a href="/vi/dong-ho-rolex/rolex-sky-dweller/">
                      <label>
                        <input
                          type="radio"
                          name="tx_product_cat"
                          value="rolex-sky-dweller"
                        />
                        &nbsp;&nbsp;&nbsp;Rolex Sky-Dweller
                      </label>
                    </a>
                  </div>
                  <div className="radio">
                    <a href="/vi/dong-ho-rolex/rolex-submariner/">
                      <label>
                        <input
                          type="radio"
                          name="tx_product_cat"
                          value="rolex-submariner"
                        />
                        &nbsp;&nbsp;&nbsp;Rolex Submariner
                      </label>
                    </a>
                  </div>
                  <div className="radio">
                    <a href="/vi/dong-ho-rolex/rolex-yacht-master/">
                      <label>
                        <input
                          type="radio"
                          name="tx_product_cat"
                          value="rolex-yacht-master"
                        />
                        &nbsp;&nbsp;&nbsp;Rolex Yacht-Master
                      </label>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              {products.map((product) => {
                const backgroundImageStyle = {
                  backgroundImage: `url(${product.img})`,
                };
                return (
                  <div className="brand_item-box">
                    <div className="brand_img-box" style={backgroundImageStyle}>
                      <Link
                        // onClick={()=>{HandleShowProducts(categorys.categoryId)}}
                        // to={`/rolex-world/products?categoryId=${product.categoryId}`}
                        style={{ color: "#fff" }}
                      >
                        Xem Chi Tiết
                      </Link>
                    </div>
                    <div className="brand_detail-box">
                      <h6>{product.productName}</h6>
                      <div
                        style={{ fontSize: "13px", fontFamily: "sans-serif" }}
                      >
                        {product.material},{product.size} và {product.color}
                      </div>
                      <button>Thêm Giỏ Hàng</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  findProductByCategory,
  findProductByGender,
} from "../services/ProductsService";
import { findAllCategory, findCategoryById } from "../services/CategoryService";
import { type } from "@testing-library/user-event/dist/type";

export default function Product() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("categoryId");
  const pages = searchParams.get("page");
  const typeId = searchParams.get("typeId");

  console.log(categoryId);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(0);
  const [showSizeFilter, setShowSizeFilter] = useState(true);

  const ShowProductsByCategory = async () => {
    try {
      const data = await findProductByCategory(pages, categoryId);
      setProducts(data);
    } catch (error) {
      console.log("Error products:", error);
    }
  };

  const showProductByGender = async () => {
    try {
      const data = await findProductByGender(0, typeId);
      setProducts(data);
    } catch (error) {
      console.log("Error products:", error);
    }
  };

  const getAllCategory = async () => {
    try {
      const data = await findAllCategory();
      setCategories(data);
    } catch (Error) {
      console.log("Không tìm thấy dữ liệu!!!!");
    }
  };

  const showCategoryById = async () => {
    try {
      const data = await findCategoryById(categoryId);
      setCategory(data);
    } catch (error) {
      console.log("Error category:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllCategory();
    if(categoryId){
      setShowSizeFilter(true);
      ShowProductsByCategory();
      showCategoryById();
    }
    if(typeId){
      showProductByGender();
      setShowSizeFilter(false);
    }

  }, [categoryId, typeId]);
  return (
    <>
      <div className="">
        <img
          class="d-main-banner collection-banner alignnone wp-image-11285 size-full"
          src={
            categoryId
              ? category.images2
              : `https://rolex.dafc.com.vn/wp-content/uploads/rolex-watches/family-lady-datejust.jpg`
          }
          alt=""
          width="100%"
          height="230px"
        ></img>
      </div>
      <section className="brand_section layout_padding2">
        <div className="container " style={{ paddingBottom: "40px" }}>
          <div className=""></div>
          <div className="brand_heading ">
            <h4 style={{ textAlign: "center" }}>
              {categoryId
                ? category.title
                : `Mỗi chiếc đồng hồ viết nên một câu chuyện`}
            </h4>
            <h3 className="custom_heading" style={{ textAlign: "center" }}>
              {categoryId ? category.categoryName : `ROLEX`}
            </h3>
            <div className="font-descriptions">
              {categoryId
                ? category.descriptions
                : `Có một câu chuyện về những chiếc đồng hồ cho tù binh và cuộc đào thoát vĩ đại” diễn ra trong thế chiến thứ 2. Chuyện kể rằng, khi bắt đầu cho chiến tranh thế giới thứ 2, Hoàng gia Anh đã trang bị cho phi công của lực lượng không quân những chiếc đồng hồ Rolex bền chắc. Nhưng, khi bị bắt làm tù binh, những chiếc đồng hồ này đã bị tịch thu. Khi biết điều này, người sáng lập đồng hồ Rolex Hans Wilsdorf đã đề nghị cấp 3000 chiếc đồng hồ cho tù binh và không yêu cầu thanh toán. Thêm một câu chuyện khác nữa, năm 1943, khi còn là một từ nhân trong trại tù binh của Đức, Live James Nutting đã yêu cầu một chiếc Rolex Oyster 3525 Chronograph bằng thép không gỉ và trả từ tiền đóng giày trong trại tù. Đây là chiếc đồng hồ Rolex đã giúp làm nên kỳ tích trong cuộc đào tẩu vĩ đại của 76 tù nhân. Chiếc đồng hồ này, năm 2007, được bán đấu giá với mức giá 66.000 bảng Anh – một con số vô cùng ấn tượng.`}
            </div>
          </div>
        </div>

        <div className="container brand_item-container">
          <div className="col-md-3">
            <div className="filter-wrapper">
              <div className="filter-wrapper">
                <div className="search-filter">
                  <span>Lọc Tìm Kiếm</span>
                  <div className="mobile-filter-button-wrapper">
                    <button
                      className="rlx-grid-filters__header-reset inactive cvp-live-reset"
                      type="reset"
                    >
                      Cập nhật
                    </button>
                  </div>
                </div>
                {
  showSizeFilter && (
                <div
                  className="cvp-live-filter cvp-checkbox "
                  data-name="tx_gender"
                  data-sid="9c91f3d3cq"
                >
                  <label className="cvp-label">Size</label>
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
  )
}
                <div
                  className="cvp-live-filter cvp-checkbox "
                  data-name="tx_material"
                  data-sid="9c91f3d3cq"
                >
                  <label className="cvp-label">Màu sắc</label>
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
                  className="cvp-live-filter cvp-checkbox "
                  data-name="tx_material"
                  data-sid="9c91f3d3cq"
                >
                  <label className="cvp-label">Kích thước</label>
                  <div className="checkbox oystersteel">
                    <label>
                      <input
                        type="checkbox"
                        name="tx_material"
                        value="oystersteel"
                      />
                      Cỡ Nhỏ
                    </label>
                  </div>
                  <div className="checkbox oystersteel-and-gold">
                    <label>
                      <input
                        type="checkbox"
                        name="tx_material"
                        value="oystersteel-and-gold"
                      />
                      Cỡ Trung
                    </label>
                  </div>
                  <div className="checkbox gold">
                    <label>
                      <input type="checkbox" name="tx_material" value="gold" />
                      Cỡ Lớn
                    </label>
                  </div>
                </div>
                <div
                  className="cvp-live-filter cvp-radio "
                  data-name="tx_product_cat"
                  data-sid="9c91f3d3cq"
                >
                  <div className="radio"></div>
                  <div className="radio">
                    <label className="cvp-label">BỘ SƯU TẬP</label>
                  </div>
                  {categories.map((cate) => {
                    return (
                      <div className="radio">
                        <Link
                          to={`/rolex-world/products/list?page=${page}&&categoryId=${cate.categoryId}`}
                        >
                          <label>
                            {/* <input
                              type="radio"
                              name="tx_product_cat"
                              value="rolex-1908"
                            /> */}
                            {cate.categoryName}
                          </label>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 rolex-collection-view">
            <div className="row">
              {products.content &&
                products.content.map((product) => {
                  const backgroundImageStyle = {
                    backgroundImage: `url(${product.img})`,
                  };
                  return (
                    <div className="brand_item-box">
                      <div
                        className="brand_img-box"
                        style={backgroundImageStyle}
                      >
                        <Link
                          // onClick={()=>{HandleShowProducts(categorys.categoryId)}}
                          // to={`/rolex-world/products?categoryId=${product.categoryId}`}
                          style={{ color: "#fff" }}
                        >
                          Xem Chi Tiết
                        </Link>
                      </div>
                      <div className="brand_detail-box">
                        <div className="name-product">
                          <div style={{ fontWeight: "bold", fontSize: "17px" }}>
                            {product.productName}
                          </div>
                        </div>

                        <div className="info-product">
                          {product.material}, {product.size}, {product.color}
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

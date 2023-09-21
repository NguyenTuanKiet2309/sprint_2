import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  findProductASC,
  findProductByCategory,
  findProductByGender,
  findProductDESC,
  findProductsort,
  getProductQuantity,
} from "../services/ProductsService";
import { findAllCategory, findCategoryById } from "../services/CategoryService";
import { type } from "@testing-library/user-event/dist/type";
import {
  addProductToCart,
  countProductOnCart,
  listProductOnCart,
  totalProductOnCart,
} from "../services/CartService";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { updateCart } from "../store/action/CartAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const categoryName = searchParams.get("categoryName");
  const pages = searchParams.get("page");
  const typeId = searchParams.get("typeId");
  const typeNameHome = searchParams.get("typeName");
  const username = localStorage.getItem("username");
  const [showGender, setShowGender] = useState(true);
  const gender = localStorage.getItem("gender");
  const [showSize, setShowSize] = useState(true);
  const [showSmallSize, setShowSmallSize] = useState(true);
  const [showBigSize, setShowBigSize] = useState(true);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(pages);
  const dispatch = useDispatch();
  const [typeName, setTypeName] = useState("");
  const [material, setMaterial] = useState("");
  const [size, setSize] = useState(0);
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [productQuantity, setProductQuantity] = useState({});

  const nextPage = async () => {
    setPage((page) => page + 1);
  };

  const prevPage = async () => {
    setPage((page) => page - 1);
  };
  const handleReset = async () => {
    setTypeName("");
    setMaterial("");
    setSize(0);
    setPage(pages);
    try {
      const data = await findProductByCategory(
        page,
        categoryName,
        typeName,
        material,
        size
      );
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log("Error products:", error);
    }
    const checkboxButtons = document.querySelectorAll('input[type="checkbox"]');
    checkboxButtons.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const ShowProductsByCategory = async () => {
    try {
      if (categoryName) {
        const data = await findProductByCategory(
          page,
          categoryName,
          typeName,
          material,
          size
        );
        console.log(data);
        setProducts(data);
        setShowGender(true);
        setShowSize(true);
        setShowBigSize(true);
        setShowSmallSize(true);
      }
    } catch (error) {
      console.log("Error products:", error);
    }
  };
  const ShowProductsByGender = async () => {
    if (gender == 0) {
      try {
        if (typeNameHome !== "") {
          const data = await findProductByCategory(
            page,
            categoryName,
            typeNameHome,
            material,
            size
          );
          console.log(data);
          setProducts(data);
          setShowGender(false);
          setShowSmallSize(false);
          setShowBigSize(true);
  
        }
      } catch (error) {
        console.log("Error products:", error);
      }
    } else if (gender == 1) {
      try {
        if (typeNameHome !== "") {
          const data = await findProductByCategory(
            page,
            categoryName,
            typeNameHome,
            material,
            size
          );
          console.log(data);
          setProducts(data);
          setShowGender(false);
          setShowSmallSize(true);
          setShowBigSize(false);

        }
      } catch (error) {
        console.log("Error products:", error);
      }
    }
  };

  const handleAddToCart = async (idProduct, nameProduct) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    try {
      const availableQuantity = await getProductQuantity(idProduct);
      const quantityInCart = await countProductOnCart(idProduct, headers);

      if (quantityInCart >= availableQuantity) {
        Swal.fire({
          icon: "error",
          title: "Số lượng sản phẩm trong giỏ hàng đã đạt giới hạn!",
          showConfirmButton: false,
          timer: 1500,
          theme: "light",
        });
      } else {
        await addProductToCart(idProduct, headers);

        Swal.fire(`Đã thêm ${nameProduct} vào giỏ`, {
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const data = await totalProductOnCart(headers);
        dispatch(updateCart(data));
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Vui lòng đăng nhập để mua hàng !");
      navigate("/rolex-world/login");
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
      const data = await findCategoryById(categoryName);
      setCategory(data);
    } catch (error) {
      console.log("Error category:", error);
    }
  };
  const handlePickCategory = async (nameCategory) => {
    setTypeName("");
    setMaterial("");
    setSize(0);
    setPage(pages);
    try {
      const data = await findProductByCategory(
        page,
        nameCategory,
        typeName,
        material,
        size
      );
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log("Error products:", error);
    }
    const checkboxButtons = document.querySelectorAll('input[type="checkbox"]');
    checkboxButtons.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };
  const handleProductSort = async () => {
    try {
      const sort = document.getElementById("price-main").value;
      const data = await findProductsort(page, categoryName, sort);
      setProducts(data);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  function handleMaterial(e) {
    if (material === e.target.value) {
      setMaterial("");
    } else {
      setMaterial(e.target.value);
    }
  }

  function handleSize(e) {
    if (size === e.target.value) {
      setSize("");
    } else {
      setSize(e.target.value);
    }
  }
  function handleType(e) {
    if (typeName === e.target.value) {
      setTypeName("");
    } else {
      setTypeName(e.target.value);
    }
  }


  useEffect(() => {
    // window.scrollTo(0, 0);

    if (typeNameHome) {
      ShowProductsByGender();
    }
    if (categoryName) {
      ShowProductsByCategory();
      showCategoryById();
      handleProductSort();
    }
  }, [categoryName, showGender, typeNameHome, page, material, size, typeName]);

  useEffect(() => {
    getAllCategory();
  }, [categoryName, showGender, typeNameHome, page, material, size, typeName]);
  useEffect(() => {
    getAllCategory();
  }, [material]);
  useEffect(() => {
    ShowProductsByCategory();
    // window.scrollTo(0, 0);
  }, [categoryName, showGender, typeNameHome, page, material, size, typeName]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ROLEX WORLD | Cửa Hàng";
  }, [location]);
  return (
    <>
      <div className="col-lg-12">
        <div className="breadcrumb-text product-more">
          <a href="./home.html">
            <i className="fa fa-home" /> Trang chủ
          </a>
          <span>Cửa Hàng</span>
        </div>
      </div>
      <div className="">
        <img
          class="d-main-banner collection-banner alignnone wp-image-11285 size-full"
          src={
            categoryName
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
              {categoryName
                ? category.title
                : `Mỗi chiếc đồng hồ viết nên một câu chuyện`}
            </h4>
            <h3 className="custom_heading" style={{ textAlign: "center" }}>
              {categoryName ? category.categoryName : `ROLEX`}
            </h3>
            <div className="font-descriptions">
              {categoryName
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
                      onClick={handleReset}
                    >
                      Cập nhật
                    </button>
                  </div>
                </div>

                <label for="price">Sắp xếp theo giá:</label>
                <select
                  name="price-main"
                  id="price-main"
                  onChange={() => {
                    handleProductSort();
                  }}
                >
                  <option id="asc" name="asc" value={2}>
                    Từ thấp đến cao
                  </option>
                  <option id="desc" name="desc" value={1}>
                    Từ cao đến thấp
                  </option>
                </select>

                {showGender && (
                  <div
                    className="cvp-live-filter cvp-checkbox "
                    data-name="tx_gender"
                    data-sid="9c91f3d3cq"
                  >
                    <label className="cvp-label">Size</label>
                    <div className="checkbox nu">
                      <label>
                        <input
                          type="checkbox"
                          name="tx_gender"
                          value="Nữ"
                          checked={typeName === "Nữ"}
                          onChange={handleType}
                        />
                        Nữ
                      </label>
                    </div>
                    <div className="checkbox nam">
                      <label>
                        <input
                          type="checkbox"
                          name="tx_gender"
                          value="Nam"
                          checked={typeName === "Nam"}
                          onChange={handleType}
                        />
                        Nam
                      </label>
                    </div>
                  </div>
                )}
                <div
                  className="cvp-live-filter cvp-checkbox "
                  data-name="tx_material"
                  data-sid="9c91f3d3cq"
                >
                  <label className="cvp-label">Chất Liệu</label>
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        name="tx_material"
                        value="vàng"
                        checked={material === "vàng"}
                        onChange={handleMaterial}
                      />
                      Vàng
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        name="tx_material"
                        value="oystersteel và vàng"
                        checked={material === "oystersteel và vàng"}
                        onChange={handleMaterial}
                      />
                      Oystersteel và vàng
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        name="tx_material"
                        value="vàng everose"
                        checked={material === "vàng everose"}
                        onChange={handleMaterial}
                      />
                      Vàng Everose
                    </label>
                  </div>
                  <div className="checkbox gold">
                    <label>
                      <input
                        type="checkbox"
                        name="tx_material"
                        value="bạch kim"
                        onChange={handleMaterial}
                        checked={material === "bạch kim"}
                      />
                      Bạch Kim
                    </label>
                  </div>
                  <div className="checkbox gold">
                    <label>
                      <input
                        type="checkbox"
                        name="tx_material"
                        value="kim cương"
                        checked={material === "kim cương"}
                        onChange={handleMaterial}
                      />
                      Kim cương
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        name="tx_material"
                        value="Titanium RLX"
                        checked={material === "Titanium RLX"}
                        onChange={handleMaterial}
                      />
                      Titanium RLX
                    </label>
                  </div>
                </div>

                <div
                  className="cvp-live-filter cvp-checkbox "
                  data-name="tx_material"
                  data-sid="9c91f3d3cq"
                  onChange={handleSize}
                >
                  <label className="cvp-label">Kích thước</label>
                  <div className="checkbox">
                    {showSmallSize && (
                      <label>
                        <input
                          type="checkbox"
                          name="tx_size"
                          value="1"
                          checked={size === "1"}
                          onChange={handleSize}
                        />
                        Cỡ Nhỏ
                      </label>
                    )}
                  </div>
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        name="tx_size"
                        value="2"
                        checked={size === "2"}
                        onChange={handleSize}
                      />
                      Cỡ Trung
                    </label>
                  </div>
                  <div className="checkbox">
                    {showBigSize && (
                      <label>
                        <input
                          type="checkbox"
                          name="tx_size"
                          value="3"
                          onChange={handleSize}
                          checked={size === "3"}
                        />
                        Cỡ Lớn
                      </label>
                    )}
                  </div>
                </div>

                <div
                  className="cvp-live-filter cvp-checkbox "
                  data-name="tx_product_cat"
                  data-sid="9c91f3d3cq"
                >
                  <div className="checkbox"></div>
                  <div className="checkbox">
                    <label className="cvp-label">BỘ SƯU TẬP</label>
                  </div>
                  {categories.map((cate) => {
                    return (
                      <div className="checkbox">
                        <Link
                          onClick={(ct) => {
                            handlePickCategory(ct.categoryName);
                          }}
                          to={`/rolex-world/products/list?page=0&&categoryName=${cate.categoryName}&&typeName=${typeName}&&material=${material}&&sizePage=${size}`}
                        >
                          <label>{cate.categoryName}</label>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 rolex-collection-view">
            {products.totalElements == 0 ||
            products.numberOfElement == 0 ||
            products.content == [] ||
            products.empty == true ? (
              <>
                <div className="not-data">Không có sản phẩm</div>
              </>
            ) : (
              <div className="row">
                {products.content &&
                  products.content.map((product, index) => {
                    const backgroundImageStyle = {
                      backgroundImage: `url(${product.img})`,
                    };
                    return (
                      <div className="brand_item-box" key={`product_${index}`}>
                        <div
                          className="brand_img-box"
                          style={backgroundImageStyle}
                        >
                          <Link
                            to={`/rolex-world/details/${product.productId}/${product.categoryId.categoryId}`}
                            style={{ color: "#fff" }}
                          >
                            Xem Chi Tiết
                          </Link>
                        </div>
                        <div className="brand_detail-box">
                          <div className="name-product">
                            <div
                              style={{ fontWeight: "bold", fontSize: "17px" }}
                            >
                              {product.productName}
                            </div>
                          </div>

                          <div className="info-product">
                            {product.designs}, {product.size} mm,{" "}
                            {product.material}
                          </div>
                          <button
                            onClick={() =>
                              handleAddToCart(
                                product.productId,
                                product.productName
                              )
                            }
                          >
                            Thêm Giỏ Hàng
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}

            {products.totalPages > 1 ? (
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="ps-pagination">
                  <ul className="pagination justify-content-center">
                    {page > 0 && (
                      <li className="page-item">
                        <a
                          className="page-link"
                          rel="noindex, nofollow"
                          onClick={() => {
                            prevPage();
                            setActivePage(page - 1);
                          }}
                        >
                          ‹
                        </a>
                      </li>
                    )}
                    {Array.from({ length: products.totalPages }, (_, index) => (
                      <li
                        key={index}
                        className={`page-item${
                          activePage === index ? " active" : ""
                        }`}
                      >
                        <a
                          className="page-link"
                          rel="noindex, nofollow"
                          onClick={() => {
                            setPage(index);
                            setActivePage(index);
                          }}
                        >
                          <sub>{index + 1}</sub>
                        </a>
                      </li>
                    ))}
                    {page < products.totalPages - 1 && (
                      <li className="page-item">
                        <a
                          className="page-link"
                          rel="noindex, nofollow"
                          onClick={() => {
                            nextPage();
                            setActivePage(page + 1);
                          }}
                        >
                          ›
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

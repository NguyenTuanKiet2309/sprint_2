import { useLocation, useNavigate, useParams } from "react-router";
import "../details.css";
import { useEffect, useState } from "react";
import {
  findDetailsByProductId,
  findProductByCategory,
  findSameProductByCategory,
  getProductQuantity,
} from "../services/ProductsService";
import { findImagesByProductId } from "../services/ImagesService";
import CurrencyFormat from "./CurrencyFormat";
import { addProductToCart, countProductOnCart, totalProductOnCart } from "../services/CartService";
import { updateCart } from "../store/action/CartAction";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function DetailsProduct() {
  const Param = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [image, setImage] = useState([]);
  const navigate = useNavigate();
  const [imageMain, setImageMain] = useState("");
  const [sameProduct, setSameProduct] = useState([]);
  const [page, setPage] = useState(0);
  const location = useLocation();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);

  // console.log(Param);

  const findDetailByProductId = async () => {
    try {
      const data = await findDetailsByProductId(
        Param.productId,
        Param.categoryId
      );
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log("Error products:", error);
    }
  };

  const findProductSame = async () => {
    try {
      const data = await findSameProductByCategory(Param.categoryId);
      setSameProduct(data);
      console.log(data);
    } catch (error) {
      console.log("Error products:", error);
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
      } else{
        await addProductToCart(idProduct, headers);
        Swal.fire(`Đã thêm ${nameProduct} vào giỏ`, {
          position: "top-right",
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
      Swal.fire("Bạn hãy đăng nhập để mua hàng nhé !");
      navigate("/rolex-world/login");
    }
  };
  const findImageByProductId = async () => {
    try {
      const data = await findImagesByProductId(Param.productId);
      setImage(data);
    } catch (error) {
      console.log("Error products:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    findDetailByProductId();
    findImageByProductId();
    findProductSame();
  }, [location]);

  useEffect(() => {
    if (image.length != 0) {
      setImageMain(image[0].imageUrl);
    }
  }, [image]);
  const getImgMain = async (imgInput, index) => {
    setImageMain(imgInput);
    setActiveImageIndex(index);
    setActiveThumbnailIndex(index);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ROLEX WORLD | Chi Tiết Sản Phẩm";
  }, [location]);
  return (
    <div className="detail-page">
      {/* <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-11">Bộ Sưu Tập Rolex    {product.productCode}</div> 
      </div> */}
      <div className="row container-fluid">
        <div className="col-lg-12">
          <div className="breadcrumb-text product-more">
            <a href="./home.html">
              <i className="fa fa-home" /> Trang chủ
            </a>
            <span>
              Sản phẩm {product.productName} {product.productCode}
            </span>
          </div>
        </div>
      </div>
      <div
        className="details-product-image row"
        style={{ height: "600px", marginLeft: "0px", marginRight: "0px" }}
      >
        <div className="col-md-6 image-main">
          <img style={{ width: "100%", height: "100%" }} src={imageMain}></img>
        </div>
        <div className="col-md-6">
          <div className="detail-product">
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>Rolex</div>
            <div className="name-product-detail">{product.productName}</div>
            <div className="describe-product-detail">
              {product.designs}, {product.size} mm, {product.material}
            </div>
            <div className="code-product-detail">{product.productCode}</div>

            <div className="describe-product-detail">
              <span id="rlx-mainwatch__price" style={{ display: "block" }}>
                <div dir="ltr" style={{ visibility: "visible" }}>
                  Giá: <CurrencyFormat value={product.price} /> VNĐ
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
                className="rlx-corner-scrollto-contact-form wa-contact-click wa-contact-model-click"
              >
                <span className="characters">Contact Us</span>
              </a>
            </div>
            <hr />
            <div className="row">
              <div className="rlx-mainwatch_desktop rlx-modelpage__img-nav col-md-6">
                <ul>
                  {image.map((img, index) => {
                    return (
                      <li
                        className={
                          activeThumbnailIndex === index ? "" : "rlx-active"
                        }
                      >
                        <a
                          onClick={() => getImgMain(img.imageUrl, index)}
                          href="#"
                          className="thumbnail-class"
                          data-translate3d="0"
                        >
                          <img src={img.imageUrl} alt="" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-md-6">
                <div
                  className="button-details-page"
             
                >
                  <div className="brand_detail-box" style={{ margin: "0px" }}>
                    <button
                      className="button-cart"
                      onClick={() =>
                        handleAddToCart(product.productId, product.productName)
                      }
                    >
                      Thêm Giỏ Hàng
                    </button>

                    <button className="button-pay" style={{ color: "#fff" }}>
                      <Link
                        style={{ color: "#fff" }}
                        to={`/rolex-world/check-out-product/${Param.productId}/${Param.categoryId}`}
                      >
                        Mua Ngay
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="rlx-model-availability rlx-specs rlx-section rlx-margin-top rlx-margin-bottom"
        id="model-availability"
      >
        <div className="rlx-textblock  rlx-textblock-large  rlx-t-center ">
          <hgroup>
            <h2 className="medium-title" style={{ backgroundColor: "#f9f9f9" }}>
              NHỮNG DÒNG SẢN PHẨM HIỆN CÓ
            </h2>
          </hgroup>

          <p className="button-label">
            Tất cả đồng hồ Rolex được lắp ráp bằng tay cực kỳ cẩn thận để đảm
            bảo chất lượng vượt trội. Lẽ tất nhiên, tiêu chuẩn cao như vậy đã
            hạn chế sản lượng của chúng tôi. đôi khi, nhu cầu mua đồng hồ vượt
            quá mức năng suất tiêu chuẩn của Rolex.{" "}
          </p>
          <p className="button-label">
            Do đó, có thể hạn chế lượng có sẵn một số mẫu sản phẩm nhất định.
            Đồng hồ Rolex chỉ được bán độc quyền tại các cửa hàng bán lẻ chính
            thức của Rolex, các địa chỉ nhập hàng hóa đều đặn và quản lý độc lập
            quá trình phân bổ và bán đồng hồ cho khách hàng.
          </p>
          <p className="button-label">
            DAFC tự hào là một phần trong mạng lưới các nhà bán lẻ Rolex chính
            thức trên toàn thế giới và có thể cung cấp thông tin về những chiếc
            đồng hồ Rolex sẵn có.{" "}
          </p>
        </div>
      </section>
      <div>
        <div className="carousel-same_product">
          <div>
            <h2 className="title-same_product">SẢN PHẨM CÙNG LOẠI</h2>
          </div>
          <Carousel responsive={responsive}>
            {sameProduct &&
              sameProduct.map((s, index) => {
                const backgroundImageStyle = {
                  backgroundImage: `url(${s.img})`,
                };
                return (
                  <div className="">
                    <div className="brand_img-box" style={backgroundImageStyle}>
                      <Link
                        to={`/rolex-world/details/${s.productId}/${s.categoryId.categoryId}`}
                        style={{ color: "#fff" }}
                      >
                        Xem Chi Tiết
                      </Link>
                    </div>
                    <div>
                      <div className="brand_detail-box">
                        <div className="name-product">
                          <div
                            className="row"
                            style={{
                              fontWeight: "bold",
                              fontSize: "17px",
                              textAlign: "center",
                            }}
                          >
                            {s.productName}
                          </div>
                        </div>
                        <div className="row name-product">
                          <div
                            style={{
                              fontSize: "13px",
                              justifyContent: "center",
                            }}
                          >
                            {s.designs},{s.size} mm,{s.material}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

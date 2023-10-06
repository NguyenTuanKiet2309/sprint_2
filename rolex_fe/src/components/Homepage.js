import { Link, NavLink } from "react-router-dom";
import image1 from "../530109.jpg";
import image2 from "../530111.jpg";
import image3 from "../530102.jpg";
import { useEffect, useState } from "react";
import { findAllCategory } from "../services/CategoryService";
import { findProductByCategory } from "../services/ProductsService";

export default function HomePage() {
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(0);
  const [typeName, setTypeName] = useState("");
  const [material, setMaterial] = useState("");
  const [size, setSize] = useState(0);
  const [categories, setCategories] = useState("");
  const [typeMan, setTypeMan] = useState("nam");
  const [typeWoman, setTypeWoman] = useState("nu");
  const getAllCategory = async () => {
    try {
      const data = await findAllCategory();
      setCategory(data);
      console.log(category);
    } catch (Error) {
      console.log("Không tìm thấy dữ liệu!!!!");
    }
  };
  //back-top-top
  const [showsScrolBtn, setShowScrolBtn] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowScrolBtn(true) : setShowScrolBtn(false);
    };
    window.addEventListener("scroll", handleButtonVisibility);
    return () => {
      window.addEventListener("scroll", handleButtonVisibility);
    };
  }, []);
  useEffect(() => {
    getAllCategory();
    document.title = "ROLEX WORLD | Trang chủ"
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className=" slider_section position-relative">
        <div id="mycarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#mycarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#mycarousel" data-slide-to="1" className=""></li>
            <li data-target="#mycarousel" data-slide-to="2" className=""></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={image1} />

              <div
                className="carousel-caption d-none d-md-block"
                style={{ color: "#fff" }}
              >
                <h2>VƯỢT THỜI GIAN & THANH LỊCH</h2>
                <h3>CỔ ĐIỂN</h3>
                <span>
                  Hoàn thiện diện mạo hàng ngày của bạn với chiếc đồng hồ dây da
                  cổ điển.
                </span>
              </div>
            </div>

            <div className="carousel-item">
              <img className="d-block w-100" src={image2} />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ color: "#fff" }}
              >
                <h2>VƯỢT THỜI GIAN & THANH LỊCH</h2>
                <h3>SẢN PHẢM BÁN CHẠY</h3>
                <span>Một chiếc đồng hồ Rolex khẳng định địa vị xã hội </span>
              </div>
            </div>

            <div className="carousel-item">
              <img className="d-block w-100" src={image3} />

              <div
                className="carousel-caption d-none d-md-block"
                style={{ color: "#fff" }}
              >
                <h2>VƯỢT THỜI GIAN & THANH LỊCH</h2>
                <h3>ĐĂNG CẤP TỰ TIN</h3>
                <span>Một chiếc vương miện cho mỗi thành tựu</span>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#mycarousel"
            role="button"
            data-slide="prev"
          >
            {" "}
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>{" "}
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#mycarousel"
            role="button"
            data-slide="next"
          >
            {" "}
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>{" "}
            <span className="sr-only">Next</span>{" "}
          </a>
        </div>
      </section>
      {/* end slider section */}
      <div className="bg">
        {/* about section */}

        {/* end about section */}
        {/* brand section */}
        <section
          className="brand_section layout_padding2"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="container">
            <div className="brand_heading-home" style={{ color: "black" }}>
              <div className="custom_heading-home" style={{ color: "black" }}>
                <p>ĐẠI LÝ ROLEX CHÍNH THỨC TẠI VIỆT NAM</p>
              </div>
              <div className="cription">
                <p style={{ textAlign: "center" }}>
                  Đồng hồ Rolex được chế tạo từ những nguyên liệu thô tốt nhất
                  và được lắp ráp tỉ mỉ đến từng chi tiết. Mỗi thành phần được
                  thiết kế, phát triển và sản xuất với độ chính xác cao nhất
                  tiêu chuẩn.
                </p>
              </div>
            </div>
          </div>
          <div className="container brand_item-container">
            {category.map((categorys, index) => {
              const backgroundImageStyle = {
                backgroundImage: `url(${categorys.images})`,
              };
              return (
                <div className="brand_item-boxhome">
                  <div className="brand_img-boxhome" style={backgroundImageStyle}>
                    <Link
                      to={`/rolex-world/products/list?page=${page}&&categoryName=${categorys.categoryName}&&typeName=${typeName}&&material=${material}&&sizePage=${size}`}
                      style={{ color: "#fff" }}
                    >
                      Xem Thêm
                    </Link>
                  </div>
                  <div className="brand_detail-box-home" >
                    <h6 className="name-brand" style={{paddingTop:"10px",fontWeight:"bold",textTransform:"uppercase"}}>{categorys.categoryName}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* end brand section */}
        {/* why section */}
        <section>
          <div className="container">
            <div className="collection-gender">Bộ sưu tập tiêu biểu</div>
            <div className="row">
              <div className="col-md-6">
                <Link
                onClick={()=>{
                  localStorage.setItem("gender",0)
                }}
                  to={`/rolex-world/products/list?page=${page}&&categoryName=${categories}&&typeName=${typeMan}&&material=${material}&&sizePage=${size}`}
                >
                  {" "}
                  <img
                    alt="Đồng hồ nam Rolex"
                    style={{ width: "570px", height: "445px" }}
                    src="https://rolex.dafc.com.vn/wp-content/uploads/2021/04/mens-watches_gmt_master_2-1.jpg.webp"
                  />
                  <div className="gender-rolex">ĐỒNG HỒ NAM ROLEX</div>
                </Link>
              </div>

              <div className="col-md-6">
                {" "}
                <Link
                  onClick={()=>{
                    localStorage.setItem("gender",1)
                  }}
                  to={`/rolex-world/products/list?page=${page}&&categoryName=${categories}&&typeName=${typeWoman}&&material=${material}&&sizePage=${size}`}
                >
                  <img
                    alt="Đồng hồ nữ Rolex"
                    style={{ width: "570px", height: "445px" }}
                    src="https://rolex.dafc.com.vn/wp-content/uploads/2021/04/womens-watches_lady_datejust-1.jpg.webp"
                  />
                  <div className="gender-rolex">ĐỒNG HỒ NỮ ROLEX</div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          className="why_section layout_padding container-fluid"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <div className="container">
            <h3 className="custom_heading">TẠI SAO CHỌN CHÚNG TÔI</h3>
            <p className="font-weight-bold">
              Chúng tôi cam kết mang đến có quý khách hàng một trải nghiệm mua
              hàng tốt nhất
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="img_box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="100px"
                    viewBox="0 -57 512 512"
                    width="100px"
                  >
                    <path d="m506.8125 95.679688-172-94.445313c-2.996094-1.644531-6.628906-1.644531-9.625 0l-64.679688 35.515625c-1.460937.40625-2.824218 1.152344-3.980468 2.183594l-103.339844 56.746094c-3.199219 1.757812-5.1875 5.117187-5.1875 8.765624v20.445313h-115.375c-5.523438 0-10 4.480469-10 10 0 5.523437 4.476562 10 10 10h115.375v36h-57.332031c-5.523438 0-10 4.480469-10 10 0 5.523437 4.476562 10 10 10h57.332031v52h-84c-5.523438 0-10 4.480469-10 10 0 5.523437 4.476562 10 10 10h84v20.449219c0 3.648437 1.988281 7.007812 5.1875 8.765625l172 94.445312c1.5.824219 3.15625 1.234375 4.8125 1.234375s3.3125-.410156 4.8125-1.234375l172-94.445312c3.199219-1.757813 5.1875-5.117188 5.1875-8.765625v-44.78125c0-5.519532-4.476562-10-10-10s-10 4.480468-10 10v38.863281l-152 83.464844v-166.078125l48.339844-26.542969v42.125c0 3.539063 1.867187 6.8125 4.910156 8.609375 1.566406.925781 3.328125 1.390625 5.089844 1.390625 1.65625 0 3.316406-.410156 4.820312-1.238281l36.859375-20.285156c3.191407-1.757813 5.175781-5.113282 5.175781-8.761719v-53.058594l46.804688-25.699219v47.210938c0 5.523437 4.476562 10 10 10s10-4.476563 10-10v-64.113282c0-3.648437-1.988281-7.007812-5.1875-8.765624zm-186.8125 275.207031-152-83.464844v-166.074219l152 83.460938zm10-183.402344-151.222656-83.039063 47.527344-26.097656 151.226562 83.039063zm68.308594-37.507813-151.226563-83.039062 16.394531-9 151.222657 83.039062zm26.886718 44.21875-16.855468 9.277344v-36.1875l16.855468-9.257812zm10.28125-64.628906-151.222656-83.039062 45.746094-25.117188 151.222656 83.035156zm0 0"></path>
                    <path d="m502 198.5625c-2.628906 0-5.210938 1.058594-7.070312 2.929688-1.859376 1.859374-2.929688 4.429687-2.929688 7.070312 0 2.628906 1.070312 5.210938 2.929688 7.070312 1.859374 1.859376 4.441406 2.929688 7.070312 2.929688s5.210938-1.070312 7.070312-2.929688c1.859376-1.859374 2.929688-4.441406 2.929688-7.070312 0-2.640625-1.070312-5.210938-2.929688-7.070312-1.859374-1.871094-4.441406-2.929688-7.070312-2.929688zm0 0"></path>
                    <path d="m24.332031 252.890625h-14.332031c-5.523438 0-10 4.480469-10 10 0 5.523437 4.476562 10 10 10h14.332031c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10zm0 0"></path>
                    <path d="m60.671875 190.890625c0-2.628906-1.070313-5.207031-2.933594-7.066406-1.859375-1.863281-4.4375-2.933594-7.066406-2.933594-2.632813 0-5.210937 1.070313-7.070313 2.933594-1.871093 1.859375-2.929687 4.4375-2.929687 7.066406 0 2.632813 1.058594 5.210937 2.929687 7.070313 1.859376 1.859374 4.4375 2.929687 7.070313 2.929687 2.628906 0 5.207031-1.066406 7.066406-2.929687 1.863281-1.859376 2.933594-4.4375 2.933594-7.070313zm0 0"></path>
                  </svg>
                </div>
                <div className="detail_box">
                  <h5>Chuyển phát nhanh</h5>
                  <p>Giao hàng nhanh, đóng gói cẩn thẩn</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img_box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    height="100px"
                    width="100px"
                  >
                    <path d="M496,319.996c-8.832,0-16,7.168-16,16v112H32v-192h176c8.832,0,16-7.168,16-16c0-8.832-7.168-16-16-16H32v-64h176    c8.832,0,16-7.168,16-16c0-8.832-7.168-16-16-16H32c-17.664,0-32,14.336-32,32v288c0,17.664,14.336,32,32,32h448    c17.664,0,32-14.336,32-32v-112C512,327.164,504.832,319.996,496,319.996z"></path>

                    <path d="M144,319.996H80c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h64c8.832,0,16-7.168,16-16    C160,327.164,152.832,319.996,144,319.996z"></path>

                    <path d="M502.304,81.276l-112-48c-4.064-1.696-8.576-1.696-12.64,0l-112,48c-5.856,2.528-9.664,8.32-9.664,14.72v64    c0,88.032,32.544,139.488,120.032,189.888c2.464,1.408,5.216,2.112,7.968,2.112s5.504-0.704,7.968-2.112    C479.456,299.612,512,248.156,512,159.996v-64C512,89.596,508.192,83.804,502.304,81.276z M480,159.996    c0,73.888-24.448,114.56-96,157.44c-71.552-42.976-96-83.648-96-157.44v-53.44l96-41.152l96,41.152V159.996z"></path>

                    <path d="M442.016,131.484c-6.88-5.44-16.928-4.384-22.496,2.496l-50.304,62.912l-19.904-29.76    c-4.96-7.36-14.912-9.312-22.176-4.448c-7.328,4.896-9.344,14.848-4.448,22.176l32,48c2.848,4.256,7.52,6.88,12.64,7.136    c0.224,0,0.48,0,0.672,0c4.832,0,9.44-2.176,12.512-6.016l64-80C450.016,147.068,448.928,137.02,442.016,131.484z"></path>
                  </svg>
                </div>
                <div className="detail_box">
                  <h5>Thanh toán bảo mật</h5>
                  <p>Cam kết không để lộ thông tin cá nhân của khách hàng</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img_box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    height="100px"
                    width="100px"
                  >
                    <g>
                      <g>
                        <path d="M256,0C131.935,0,31,100.935,31,225c0,13.749,0,120.108,0,122c0,24.813,20.187,45,45,45h17.58    c6.192,17.458,22.865,30,42.42,30c24.813,0,45-20.187,45-45V255c0-24.813-20.187-45-45-45c-19.555,0-36.228,12.542-42.42,30H76    c-5.259,0-10.305,0.915-15,2.58V225c0-107.523,87.477-195,195-195s195,87.477,195,195v17.58c-4.695-1.665-9.741-2.58-15-2.58    h-17.58c-6.192-17.458-22.865-30-42.42-30c-24.813,0-45,20.187-45,45v122c0,24.813,20.187,45,45,45    c4.541,0,8.925-0.682,13.061-1.939C383.45,438.523,366.272,452,346,452h-47.58c-6.192-17.458-22.865-30-42.42-30    c-24.813,0-45,20.187-45,45s20.187,45,45,45c19.555,0,36.228-12.542,42.42-30H346c41.355,0,75-33.645,75-75v-15h15    c24.813,0,45-20.187,45-45c0-1.864,0-108.262,0-122C481,100.935,380.065,0,256,0z M121,255c0-8.271,6.729-15,15-15s15,6.729,15,15    v122c0,8.271-6.729,15-15,15s-15-6.729-15-15V255z M76,270h15v92H76c-8.271,0-15-6.729-15-15v-62C61,276.729,67.729,270,76,270z     M256,482c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S264.271,482,256,482z M391,377c0,8.271-6.729,15-15,15    s-15-6.729-15-15V255c0-8.271,6.729-15,15-15s15,6.729,15,15V377z M451,347c0,8.271-6.729,15-15,15h-15v-92h15    c8.271,0,15,6.729,15,15V347z"></path>
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div className="detail_box">
                  <h5>Hỗ trợ hàng đầu</h5>
                  <p>Luôn đi đầu trong việc hỗ trợ khách hàng 24/7</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img_box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    height="100px"
                    width="100px"
                  >
                    <g>
                      <g>
                        <path d="M288.502,32.502c-108.328,0-198.827,77.485-219.166,179.899l-42.482-53.107L0,180.784l68.769,85.961    c3.352,4.178,8.338,6.447,13.427,6.447c2.596,0,5.226-0.585,7.685-1.805l103.153-51.577l-15.387-30.757l-75.8,37.892    c14.063-90.5,92.27-160.059,186.655-160.059c104.271,0,189.114,84.843,189.114,189.114s-84.843,189.114-189.114,189.114v34.384    C411.735,479.498,512,379.233,512,256S411.735,32.502,288.502,32.502z"></path>
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div className="detail_box">
                  <h5>Hoàn trả 180 ngày</h5>
                  <p>1 đổi 1 trong 180 ngày với sản phẩm lỗi</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end why section */}
      </div>
      {/* client section */}
      <section className="client_section layout_padding-bottom">
        <div className="container">
          <h3 className="custom_heading">Đánh giá của khách hàng</h3>
          <p className="font-weight-bold">
            RolexWorld tự hào là website có lượng đánh giá nhiều nhất tại Việt
            Nam
          </p>
        </div>
        <div className="container-fluid" />
        <div
          id="carouselExample2Controls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="detail_box">
                      <div className="img_box">
                        <img src="images/client.jpg" alt="" />
                      </div>
                      <div className="name_box">
                        <h5>Công Nam</h5>
                        <h6>Nghệ An</h6>
                      </div>
                    </div>
                    <div className="detail_text">
                      <p>
                        Đang dùng em này để đi chơi, cực kỳ hài lòng, chất lượng
                        hơn hẳn nếu so với đồng hồ máy Nhật nhé, hàng của shop
                        bao chính hãng, anh em cứ mạnh dạn order nhé ^^ nhân
                        viên shop cũng rất niềm nở, nhiệt tình 👍👍
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="detail_box">
                      <div className="img_box">
                        <img src="images/client.jpg" alt="" />
                      </div>
                      <div className="name_box">
                        <h5>Võ Văn Thái</h5>
                        <h6>Quảng Nam</h6>
                      </div>
                    </div>
                    <div className="detail_text">
                      <p>
                        Mình đặt hàng ngày 5/5/2023 Hôm ni 9/5/2023 em nó đã cập
                        bến . Cho shop 5 điểm . Rất uy tín… Giờ giấc chính xác
                        của đồng hồ thế nào thì chưa biết, mình mới đeo có mấy
                        tiếng đồng hồ, thời gian tới sẽ đánh giá cụ thể
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="detail_box">
                      <div className="img_box">
                        <img src="images/client.jpg" alt="" />
                      </div>
                      <div className="name_box">
                        <h5>Lê Văn Hưng</h5>
                        <h6>Đà Nẵng</h6>
                      </div>
                    </div>
                    <div className="detail_text">
                      <p>
                        Đồng hồ rất đẹp, giá theo mình thấy là cạnh tranh so với
                        hầu hết các shop, có bảo hành đầy đủ.Mọi người nên tham
                        khảo mẫu trước khi ghé shop để tiết kiệm thời gian chờ
                        hàng
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExample2Controls"
            role="button"
            data-slide="prev"
          >
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExample2Controls"
            role="button"
            data-slide="next"
          >
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      {/* end client section */}
      {/* contact section */}
      <section className="contact_section layout_padding">
        <h2 className="custom_heading text-center" style={{ color: "#fff" }}>
          LIÊN HỆ VỚI CHÚNG TÔI
        </h2>
        <div className="container mt-5 pt-5">
          <form action>
            <div>
              <input type="text" placeholder="HỌ VÀ TÊN" />
            </div>
            <div>
              <input type="email" placeholder="EMAIL" />
            </div>
            <div>
              <input type="text" placeholder="SỐ ĐIỆN THOẠI" />
            </div>
            <div>
              <input
                type="text"
                className="message-box"
                placeholder="TIN NHẮN"
              />
            </div>
            <div className="d-flex justify-content-center mt-5 pt-5">
              <button>GỬI</button>
            </div>
          </form>
        </div>
      </section>
      {showsScrolBtn && (
        <a
          className="back-to-top"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <i className="fa fa-angle-double-up"></i>
        </a>
      )}
      {/* end contact section */}
    </>
  );
}

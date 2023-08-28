import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <section className=" slider_section position-relative">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slider_item-box">
                <div className="slider_item-container">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="slider_img-box">
                          <div>
                            <img  src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/10/slider3.jpg" alt="" className />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div
                          className="slider_item-detail"
                          style={{ color: "#fff" }}
                        >
                          <div>
                            <h2>TIMELESS & ELEGANT</h2>
                            <h3>
                        THE CLASSICS
                            </h3>
                            <div>
                              <span>Complete your everyday look with a classic leather strap watch.</span>
                            </div>
                            <div className="d-flex">
                            <a className="slider-btn1 mr-3">
                                SHOP NOW
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slider_item-box">
                <div className="slider_item-container">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="slider_img-box">
                          <div>
                            <img
                              src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/10/slider2.jpg"
                              alt=""
                              className
                           
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="slider_item-detail">
                          <div>
                            <h2>TIMELESS & ELEGANT</h2>
                            <h3>
                            BEST SELLER
                            </h3>
                            <div>
                              <span>Complete your everyday look with a classic leather strap watch.</span>
                            </div>
                            <div className="d-flex">
                              <a className="slider-btn1 mr-3">
                                SHOP NOW
                              </a>
                          
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slider_item-box">
                <div className="slider_item-container">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="slider_img-box">
                          <div>
                            <img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/10/slider1.jpg" alt="" className />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="slider_item-detail">
                          <div>
                            <h2 className>TIMELESS & ELEGANT</h2>
                            <h3>
                      THE ARRIVALS
                            </h3>
                            <div>
                              <span>Complete your everyday look with a classic leather strap watch.</span>
                            </div>
                            <div className="d-flex">
                            <a className="slider-btn1 mr-3">
                                SHOP NOW
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom_carousel-control">
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
      {/* end slider section */}
      <div className="bg">
        {/* about section */}
        <section className="about_section layout_padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 offset-md-2">
                <div className="about_detail-box" style={{ color: "#fff" }}>
                  <h3 className="custom_heading ">About our watch</h3>
                  <p className>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it
                  </p>
                  <div>
                    <a href>Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about_img-box">
                  <img src="images/about.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end about section */}
        {/* brand section */}
        <section
          className="brand_section layout_padding2"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="container">
            <div className="brand_heading" style={{ color: "black" }}>
              <h3 className="custom_heading" style={{ color: "black" }}>
                OFFICIAL ROLEX RETAILER IN VIETNAM
              </h3>
              <p className="font-weight-bold">
                Rolex watches are crafted from the finest raw materials and
                assembled with scrupulous attention to detail. Every component
                is designed, developed and produced to the most exacting
                standards.
              </p>
            </div>
          </div>
          <div className="container-fluid brand_item-container">
            <div className="brand_item-box">
              <div className="brand_img-box  item-1">
                <a href>View More</a>
              </div>
              <div className="brand_detail-box">
                <h6 className>Rolex DateJust</h6>
              </div>
            </div>
            <div className="brand_item-box">
              <div className="brand_img-box  item-2">
                <a href>Rolex GMT-Master II</a>
              </div>
              <div className="brand_detail-box">
                <h6 className>Rolex Day-Date</h6>
              </div>
            </div>
            <div className="brand_item-box">
              <div className="brand_img-box  item-3">
                <a href>View More</a>
              </div>
              <div className="brand_detail-box">
                <h6 className>Rolex CosmoGrahp Daytona</h6>
              </div>
            </div>
            <div className="brand_item-box">
              <div className="brand_img-box  item-4">
                <a href>View More</a>
              </div>
              <div className="brand_detail-box">
                <h6 className>Rolex 1908</h6>
              </div>
            </div>
            <div className="brand_item-box">
              <div className="brand_img-box  item-5">
                <a href>View More</a>
              </div>
              <div className="brand_detail-box">
                <h6 className>Rolex Submariner</h6>
              </div>
            </div>
          </div>
        </section>
        {/* end brand section */}
        {/* why section */}
        <section
          className="why_section layout_padding"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <div className="container">
            <h3 className="custom_heading">Why choose Us</h3>
            <p className="font-weight-bold">
              It is a long established fact that a reader will be distracted by
              the readable content of a page
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
                  <h5>Fast Delivery</h5>
                  <p>
                    variations of passages of Lorem Ipsum available, but the
                    majority have suffered
                  </p>
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
                  <h5>Secure payments </h5>
                  <p>
                    variations of passages of Lorem Ipsum available, but the
                    majority have suffered
                  </p>
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
                  <h5>Top-notch support</h5>
                  <p>
                    variations of passages of Lorem Ipsum available, but the
                    majority have suffered
                  </p>
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
                  <h5>180 Days Return</h5>
                  <p>
                    variations of passages of Lorem Ipsum available, but the
                    majority have suffered
                  </p>
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
          <h3 className="custom_heading">Testimonial</h3>
          <p className="font-weight-bold">
            It is a long established fact that a reader will be distracted by
            the readable content of a page
          </p>
        </div>
        <div className="container" />
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
                        <h5>Sandy Den</h5>
                        <h6>Many Variations</h6>
                      </div>
                    </div>
                    <div className="detail_text">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to beThere are
                        many variations of passages
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
                        <h5>Sandy Den</h5>
                        <h6>Many Variations</h6>
                      </div>
                    </div>
                    <div className="detail_text">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to beThere are
                        many variations of passages
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
                        <h5>Sandy Den</h5>
                        <h6>Many Variations</h6>
                      </div>
                    </div>
                    <div className="detail_text">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to beThere are
                        many variations of passages
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
        <h2 className="custom_heading text-center">NOW CONTACT US</h2>
        <div className="container mt-5 pt-5">
          <form action>
            <div>
              <input type="text" placeholder="NAME" />
            </div>
            <div>
              <input type="email" placeholder="EMAIL" />
            </div>
            <div>
              <input type="text" placeholder="PHONE NUMBER" />
            </div>
            <div>
              <input
                type="text"
                className="message-box"
                placeholder="MESSAGE"
              />
            </div>
            <div className="d-flex justify-content-center mt-5 pt-5">
              <button>SEND</button>
            </div>
          </form>
        </div>
      </section>
      {/* end contact section */}
    </div>
  );
}

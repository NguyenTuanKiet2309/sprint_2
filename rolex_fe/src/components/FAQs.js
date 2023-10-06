import { useEffect } from "react";
import "../FAQs.css";
import { useLocation } from "react-router";
export default function FAQs() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ROLEX WORLD | FAQs"
  }, [location]);
  return (
    <>
    <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-text product-more">
            <a href="./home.html">
              Trang chủ
            </a>
            <span>
             Câu hỏi thường gặp
            </span>
          </div>
        </div>
      </div>
      <header class="site-header section-padding d-flex justify-content-center align-items-center">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-10 col-12">
              <h1 style={{fontWeight:"bold",textAlign:"center", fontSize:"80px",width:"800px",justifyItems:"center"}}>
                Những câu hỏi thường gặp
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section className="faq section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <h1 style={{ color: "#145f3d", fontWeight: "bold" }}>
                Mua một chiếc Rolex
              </h1>
              <hr/>
              <div className="accordion" id="accordionGeneral">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordionGeneralOne"
                      aria-expanded="true"
                      aria-controls="accordionGeneralOne"
                    >
                      Tôi có thể tìm mua đồng hồ Rolex ở đâu?
                    </button>
                  </h2>
                  <div
                    id="accordionGeneralOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionGeneral"
                  >
                    <div className="accordion-body">
                      <p className="large-paragraph">
                        <strong>
                          Mọi người có thể hỏi: “Mua đồng hồ Rolex ở đâu?” /
                          “Những ai bán đồng hồ Rolex?” / “Làm sao tìm được cửa
                          hàng bán lẻ Rolex gần tôi nhất?”
                        </strong>{" "}
                      </p>
                      <p className="large-paragraph">
                        Đại lý Bán lẻ Chính thức của Rolex sẽ độc quyền bày bán
                        tất cả các dòng đồng hồ mới và chính hãng từ Rolex, đảm
                        bảo tính xác thực và bảo hành năm năm trên toàn thế
                        giới. Mạng lưới các Đại lý Bán lẻ Chính thức của Rolex
                        hiện đã phủ sóng trên 100 quốc gia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordionGeneralTwo"
                      aria-expanded="false"
                      aria-controls="accordionGeneralTwo"
                    >
                      Tôi có thể tìm hiểu giá của đồng hồ Rolex ở đâu?
                    </button>
                  </h2>
                  <div
                    id="accordionGeneralTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionGeneral"
                  >
                    <div className="accordion-body">
                      <p className="large-paragraph">
                        <strong
                          
                        >
                          Mọi người có thể hỏi: “Một chiếc Rolex có giá bao
                          nhiêu?” / “Chiếc Rolex đắt nhất có giá bao nhiêu?” /
                          “Những chiếc Rolex nào rẻ nhất?”
                        </strong>{" "}
                        </p>
                        <p className="large-paragraph">
                        Giá bán lẻ đề xuất của bộ sưu tập đồng hồ Rolex được
                        công bố trên trang web rolex.com và có thể thấy ở hầu
                        hết các quốc gia. Nếu có bất kỳ yêu cầu về giá cả cho
                        các mẫu sản phẩm đặc biệt, quý khách vui lòng liên hệ
                        hoặc đến trực tiếp Đại lý Bán lẻ Chính thức gần nhất của
                        Rolex để được giải đáp.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordionGeneralThree"
                      aria-expanded="false"
                      aria-controls="accordionGeneralThree"
                    >
                      Làm sao để kiểm tra đồng hồ có sẵn ở cửa hàng hay không?
                    </button>
                  </h2>
                  <div
                    id="accordionGeneralThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionGeneral"
                  >
                    <div className="accordion-body">
                      <p className="large-paragraph">
                        <strong>
                          Mọi người có thể hỏi: “Cửa hàng Rolex nào có dòng đồng
                          hồ mà tôi đang tìm mua?” / “Làm sao biết được một mẫu
                          đồng hồ nhất định có sẵn tại một Đại lý Bán lẻ Chính
                          thức của Rolex hay không?”
                        </strong>{" "}
                      </p>
                      <p className="large-paragraph">
                        Hãy liên hệ với Đại lý Bán lẻ Chính thức của Rolex gần
                        nhất. Nhân viên cửa hàng là người phù hợp nhất để tư vấn
                        cho bạn về việc chọn đồng hồ Rolex. Họ có thể cung cấp
                        thông tin về những dòng đồng hồ hiện có sẵn tại cửa hàng
                        trong khu vực của bạn. Tất cả đồng hồ Rolex được lắp ráp
                        thủ công vô cùng cẩn thận để đảm bảo chất lượng vượt
                        trội. Lẽ tất nhiên, tiêu chuẩn cao như vậy đã hạn chế
                        sản lượng của chúng tôi, và đôi khi, nhu cầu mua đồng hồ
                        vượt quá mức năng suất tiêu chuẩn của Rolex. Do đó, có
                        thể hạn chế lượng có sẵn một số mẫu sản phẩm nhất định.
                        Đồng hồ Rolex mới chỉ được bán độc quyền tại các Đại lý
                        Bán lẻ Chính thức của Rolex, nơi nhập hàng đều đặn và
                        quản lý độc lập quá trình phân bổ và bán đồng hồ cho
                        khách hàng. Đại lý Bán lẻ Chính thức của Rolex có thể
                        cung cấp thông tin về những dòng đồng hồ hiện có tại cửa
                        hàng.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="mt-5" style={{ fontWeight: "bold" }}>
                <span style={{ color: "#145f3d" }}>
                  Chăm sóc đồng hồ Rolex của bạn
                </span>
                <hr/>
              </h1>
              <div className="accordion" id="accordionProduct">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordionProductFour"
                      aria-expanded="true"
                      aria-controls="accordionProductFour"
                    >
                      Làm sao để chăm sóc tốt đồng hồ Rolex?
                    </button>
                  </h2>
                  <div
                    id="accordionProductFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionProduct"
                  >
                    <div className="accordion-body">
                      <p className="large-paragraph">
                        <strong>
                          Mọi người có thể hỏi: “Làm sao để duy trì tình trạng
                          tốt cho đồng hồ Rolex?” / “Làm sạch chiếc Rolex của
                          tôi bằng cách nào?” / “Làm sạch chiếc Rolex của tôi
                          như thế nào?”
                        </strong>
                      </p>
                      <p className="large-paragraph">
                        Bạn có thể duy trì độ sáng đồng hồ bằng cách lau thường
                        xuyên bằng một miếng vải sợi. Bạn cũng có thể rửa vỏ và
                        dây đeo (ngoại trừ dây đeo bằng da) bằng nước xà phòng
                        và bàn chải mềm. Sau khi đeo đồng hồ dưới biển, cần phải
                        vệ sinh đồng hồ bằng nước sạch để loại bỏ muối và cát.
                        Trước khi vệ sinh đồng hồ, hãy luôn đảm bảo rằng núm vặn
                        đã được siết chặt vào vỏ để đảm bảo khả năng chống thấm
                        nước.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordionProductFive"
                      aria-expanded="false"
                      aria-controls="accordionProductFive"
                    >
                      Tôi có thể vừa mang đồng hồ Rolex vừa chơi thể thao không?
                    </button>
                  </h2>
                  <div
                    id="accordionProductFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionProduct"
                  >
                    <div className="accordion-body">
                      <p className="large-paragraph">
                        <strong>
                          Mọi người có thể hỏi: “Tôi có thể vừa đeo đồng hồ
                          Rolex vừa chơi golf hay tennis được không?” / “Tôi có
                          thể vừa đeo đồng hồ Rolex vừa tập gym không?”
                        </strong>
                      </p>
                      <p className="large-paragraph">
                        Bạn hoàn toàn có thể chơi thể thao khi đang đeo đồng hồ
                        Rolex vì lớp vỏ Oyster Rolex cung cấp cho bộ máy sự bảo
                        vệ tối ưu trước các va chạm. Tất cả đồng hồ đeo tay
                        Rolex đều chống thấm nước ở độ sâu ít nhất là 100 mét
                        đối với những mẫu thuộc dòng đồng hồ Oyster Perpetual,
                        và 50 mét đối với đồng hồ Perpetual 1908.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordionProductSix"
                      aria-expanded="false"
                      aria-controls="accordionProductSix"
                    >
                      Tôi nên làm gì khi đồng hồ Rolex chạy nhanh hoặc chạy
                      chậm?
                    </button>
                  </h2>
                  <div
                    id="accordionProductSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionProduct"
                  >
                    <div className="accordion-body">
                      <p className="large-paragraph">
                        <strong>
                          Mọi người có thể hỏi: “Tôi nên làm gì khi đồng hồ
                          Rolex chạy không đúng giờ?” / “Tại sao đồng hồ Rolex
                          không hiện đúng giờ?” / “Tại sao đồng hồ Rolex chạy
                          nhanh / chậm?”
                        </strong>
                      </p>
                      <p className="large-paragraph">
                        “Trái tim” đồng hồ Rolex của bạn sẽ bị ảnh hưởng bởi
                        phong cách sống đặc trưng và cách sử dụng thực tế của
                        bạn. Vui lòng liên hệ với Đại lý Bán lẻ Chính thức hoặc
                        Trung tâm Dịch vụ Chính hãng gần nhất của Rolex để được
                        tư vấn về các vấn đề kỹ thuật của các chức năng đồng hồ.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="mt-5" style={{ fontWeight: "bold" }}>
                <span style={{ color: "#145f3d" }}>
                  Bảo dưỡng Rolex của bạn
                </span>
                <hr/>
              </h1>
              <div className="accordion" id="accordionGeneral">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordionGeneralSeven"
                      aria-expanded="true"
                      aria-controls="accordionGeneralSeven"
                    >
                      Sau bao lâu thì tôi cần bảo dưỡng Rolex?
                    </button>
                  </h2>
                  <div
                    id="accordionGeneralSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionGeneral"
                  >
                    <div className="accordion-body">
                      <p className="large-paragraph">
                        <strong>
                          Mọi người có thể hỏi: “Tại sao việc sử dụng dịch vụ
                          bảo dưỡng lại quan trọng đối với đồng hồ Rolex?” /
                          “Bao lâu thì tôi nên sử dụng dịch vụ bảo dưỡng đồng hồ
                          Rolex?”
                        </strong>{" "}
                      </p>
                      <p className="large-paragraph">
                        Để đảm bảo tính chính xác và chống thấm nước liên tục,
                        Rolex khuyến nghị bạn nên định kỳ mang đồng hồ của mình
                        đến Đại lý Bán lẻ Chính thức hoặc Trung tâm Dịch vụ
                        Chính hãng của Rolex để được bảo dưỡng chuyên nghiệp.
                        Rolex khuyến nghị bạn sử dụng dịch vụ này của Rolex mỗi
                        mười năm một lần hoặc tùy thuộc vào mẫu đồng hồ và cách
                        sử dụng thực tế.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordionGeneralEight"
                      aria-expanded="false"
                      aria-controls="accordionGeneralEight"
                    >
                      Tôi có thể sử dụng dịch vụ bảo dưỡng đồng hồ Rolex ở đâu?
                    </button>
                  </h2>
                  <div
                    id="accordionGeneralEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionGeneral"
                  >
                    <div className="accordion-body">
                      <p className="large-paragraph">
                        <strong
                          
                        >
                          Mọi người có thể hỏi: “Đại lý Bán lẻ Chính thức của
                          Rolex cũng có các dịch vụ bảo dưỡng đồng hồ Rolex phải
                          không?” / “Làm sao để tìm Trung tâm dịch vụ của
                          Rolex?” / “Bảo dưỡng đồng hồ Rolex ở đâu?”
                        </strong>{" "}
                        </p>
                        <p className="large-paragraph">
                        Mạng lưới Đại lý Bán lẻ Chính thức và các Trung tâm Dịch
                        vụ Chính hãng của Rolex có mặt tại hơn 100 quốc gia trên
                        toàn thế giới và có những thợ đồng hồ lành nghề được
                        Rolex tuyển chọn và đào tạo kỹ càng. Những Đại lý Bán lẻ
                        Chính thức của Rolex có thể tư vấn cho bạn về tất cả
                        những khía cạnh kỹ thuật của những chức năng của chiếc
                        đồng hồ. Rolex.com có danh sách các Đại lý Bán lẻ Chính
                        thức và những Trung tâm Dịch vụ Chính hãng của Rolex.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordionGeneralNine"
                      aria-expanded="false"
                      aria-controls="accordionGeneralNine"
                    >
                      Dịch vụ bảo dưỡng đồng hồ Rolex bao gồm những gì?
                    </button>
                  </h2>
                  <div
                    id="accordionGeneralNine"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionGeneral"
                  >
                    <div className="accordion-body">
                      <p className="large-paragraph">
                        <strong>
                          Mọi người có thể hỏi: “Quy trình bảo dưỡng đồng hồ
                          Rolex gồm những gì?” / “Các bước trong quá trình bảo
                          dưỡng đồng hồ Rolex là gì?” / “Quy trình bảo dưỡng là
                          gì?”
                        </strong>{" "}
                      </p>
                      <p className="large-paragraph">
                        Khi đồng hồ của bạn được Rolex bảo dưỡng, chiếc đồng hồ
                        sẽ được tháo rời hoàn toàn và tất cả những bộ phânh của
                        chiếc đồng hồ sẽ được vệ sinh bằng siêu âm. Mỗi bộ phận
                        đều được kiểm tra kỹ càng và những thành phần không còn
                        đáp ứng được thông số kỹ thuật hay thẩm mỹ của Rolex sẽ
                        được thay thế bằng những linh kiện Rolex chính hãng. Bộ
                        máy được bôi trơn cẩn thận sau đó được kiểm tra điện tử
                        để đảm bảo độ chính xác về thời gian; vỏ đồng hồ và dây
                        đeo bằng kim loại được đánh bóng để khôi phục độ sáng
                        bóng. Sau đó, đồng hồ Rolex của bạn sẽ trải qua những
                        quy trình kiểm tra kỹ thuật để đảm bảo khả năng chống
                        thấm nước, dự trữ năng lượng và độ chính xác. Sau khi
                        hoàn thành bảo dưỡng, đồng hồ Rolex của bạn sẽ được dán
                        tem bảo hành khác.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordionGeneralTen"
                      aria-expanded="false"
                      aria-controls="accordionGeneralTen"
                    >
                      Chi phí sử dụng dịch vụ bảo dưỡng đồng hồ Rolex như thế
                      nào?
                    </button>
                  </h2>
                  <div
                    id="accordionGeneralTen"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionGeneral"
                  >
                    <div className="accordion-body">
                      <p className="large-paragraph">
                        <strong>
                          Mọi người có thể hỏi: “Dịch vụ bảo dưỡng Rolex có giá
                          bao nhiêu?” / “Chi phí dịch vụ bảo dưỡng Rolex?”
                        </strong>{" "}
                      </p>
                      <p className="large-paragraph">
                        Mức giá sẽ phụ thuộc vào kiểu dịch vụ được yêu cầu và
                        tình trạng của chiếc đồng hồ. Trước mỗi lần sử dụng dịch
                        vụ, tình trạng đồng hồ của bạn sẽ được đánh giá bởi thợ
                        đồng hồ của Rolex và bạn sẽ nhận được bản ước tính cần
                        sự đồng ý xác nhận của bạn về mức chi phí dịch vụ. Vui
                        lòng liên hệ Đại lý Bán lẻ Chính thức hoặc Trung tâm
                        Dịch vụ Chính hãng của Rolex để biết thêm thông tin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

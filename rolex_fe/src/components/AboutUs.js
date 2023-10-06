import { useEffect } from "react";
import "../about.css";
export default function AboutUs() {
    useEffect(()=>{
        window.scrollTo(0,0);
        document.title = "ROLEX WORLD | Về Rolex"
    },[])
  return (
    <>
      <div>
        <div id="main-background-image" />
        <div id="address-bar" />
        <div id="menu-bar" />
        <div id="page-name-bar" />
        <div id="footer-back" />
        <div id="footer-back2" />
        <div id="main-wrap">
          <a href="#"></a>
          <a href="#"></a>

          <div id="adress-bar-text"></div>
          <div id="menu-bar2" />
          <div id="logo">
            <img />
          </div>

          <div id="about-us-text">
            Hans Wilsdorf là ​​một người có tầm nhìn xa trông rộng, đã tiên đoán
            được sự thay đổi và phát triển của xã hội trước một thế kỷ. Tin chắc
            rằng khả năng chống thấm nước sẽ biến đồng hồ đeo tay và trở thành
            thứ bắt buộc phải có đối với mọi người, ông đã cho ra mắt mẫu Oyster
            vào năm 1926. Nhận thức được tầm quan trọng của các kỷ lục và khám
            phá, ông đã thử nghiệm đồng hồ của mình trong những điều kiện khắc
            nghiệt cùng những vận động viên thể thao và nhà thám hiểm ở thế kỷ
            20. Những cải tiến của Rolex đã để lại dấu ấn không thể phai mờ
            trong lịch sử chế tạo đồng hồ toàn cầu và là bằng chứng cho hành
            trình không ngừng kiếm tìm sự xuất sắc của nhà sáng lập.
          </div>
          <div id="page-name-bar-heading">
            <p id="p-n-b-h">ROLEX</p>
            <br />
            <p id="p-n-b-h" style={{ padding: "0px" }}>
              Lịch sử của Rolex gắn liền với nhà sáng lập thương hiệu - Hans
              Wilsdorf.
            </p>
            <br />{" "}
          </div>
          <section className="timeline">
            <div className="wrapper">
              <div className="timeline__item timeline__item--0">
                <div className="timeline__item__station" />
                <div className="timeline__item__content">
                  <h2 className="timeline__item__content__date">
                    NHỮNG NĂM ĐẦU 1905
                  </h2>
                  <p className="timeline__item__content__description">
                    Lịch sử của Rolex liên quan chặt chẽ đến tầm nhìn xa trông
                    rộng của nhà sáng lập thương hiệu - Hans Wilsdorf. Năm 1905,
                    ở tuổi 24, Hans Wilsdorf đã thành lập một công ty ở London
                    chuyên phân phối đồng hồ. Ông bắt đầu mơ về những chiếc đồng
                    hồ đeo trên cổ tay. Những chiếc đồng hồ đeo tay thời đó
                    không có độ chính xác cao, nhưng Hans Wilsdorf đã biết trước
                    rằng chúng có thể trở thành những chiếc đồng hồ không chỉ
                    thanh lịch mà còn đáng tin cậy.
                  </p>
                </div>
              </div>
              <div className="timeline__item timeline__item--1">
                <div className="timeline__item__station" />
                <div className="timeline__item__content">
                  <h2 className="timeline__item__content__date">1908</h2>
                  <p className="timeline__item__content__description">
                    Lời vị thần mách nước cho cái tên với năm chữ cái.Ông nói,
                    “Tôi đã thử kết hợp các chữ cái trong bảng chữ cái theo mọi
                    cách có thể”. Từ đó có hàng trăm cái tên, nhưng tôi không
                    thấy cái tên nào ổn cả. Một buổi sáng, khi tôi đang ngồi
                    trên một chiếc xe ngựa kéo dọc khu Cheapside, Luân Đôn, một
                    vị thần đã thì thầm từ ‘Rolex’ bên tai tôi.
                  </p>
                </div>
              </div>
              <div className="timeline__item timeline__item--2">
                <div className="timeline__item__station" />
                <div className="timeline__item__content">
                  <h2 className="timeline__item__content__date">1910</h2>
                  <p className="timeline__item__content__description">
                    Rolex trước tiên tập trung vào chất lượng bộ máy. Không
                    ngừng kiểm tra để đạt được độ đếm nhịp chính xác ưu việt đã
                    nhanh chóng đem lại sự thành công cho thương hiệu. Năm 1910,
                    Rolex là chiếc đồng hồ đeo tay đầu tiên trên thế giới đạt
                    chứng nhận Chronometric Precision của Thụy Sĩ do Trung tâm
                    Xếp hạng Đồng hồ Chính thức ở Bienne cấp.
                  </p>
                </div>
              </div>
              <div className="timeline__item timeline__item--3">
                <div className="timeline__item__station" />
                <div className="timeline__item__content">
                  <h2 className="timeline__item__content__date">1914</h2>
                  <p className="timeline__item__content__description">
                    Bốn năm sau đó, vào năm 1914, Đài quan sát Kew Observatory
                    tại Anh đã trao giấy chứng nhận độ chính xác hạng A cho một
                    chiếc đồng hồ đeo tay Rolex, mà thời điểm đó giấy chứng nhận
                    này chỉ dành riêng cho những chiếc đồng hồ chính xác cao
                    dưới biển. Từ đó, đồng hồ đeo tay Rolex đồng nghĩa với sự
                    chính xác.
                  </p>
                </div>
              </div>
              <div className="timeline__item timeline__item--4">
                <div className="timeline__item__station" />
                <div className="timeline__item__content">
                  <h2 className="timeline__item__content__date">1920</h2>
                  <p className="timeline__item__content__description">
                    Rolex đã chuyển đến Geneva - một thành phố nổi tiếng thế
                    giới về chế tạo đồng hồ. Montres Rolex S.A. đã được đăng ký
                    tại Geneva vào năm 1920.
                  </p>
                </div>
              </div>
              <div className="timeline__item timeline__item--5">
                <div className="timeline__item__station" />
                <div className="timeline__item__content">
                  <h2 className="timeline__item__content__date">1926</h2>
                  <p className="timeline__item__content__description">
                    Vào năm 1926, việc Rolex tạo ra chiếc đồng hồ đeo tay chống
                    thấm nước và chống bụi đầu tiên đã đánh dấu một bước tiến
                    lớn. Được đặt tên là “Oyster”, chiếc đồng hồ này có vỏ bọc
                    kín để bảo vệ bộ máy tối ưu.
                  </p>
                </div>
              </div>
              <div className="timeline__item timeline__item--6">
                <div className="timeline__item__station" />
                <div className="timeline__item__content">
                  <h2 className="timeline__item__content__date">1927</h2>
                  <p className="timeline__item__content__description">
                    Khẳng định việc một chiếc đồng hồ có khả năng chống thấm
                    nước là chuyện đơn giản. Chứng minh được điều đó là một vấn
                    đề khác. Vào năm 1927, một chiếc đồng hồ Rolex Oyster đã
                    vượt qua eo biển Manche cùng vận động viên bơi lội trẻ tuổi
                    người Anh - Mercedes Gleitze. Quá trình bơi kéo dài hơn 10
                    tiếng và chiếc đồng hồ vẫn trong tình trạng hoạt động hoàn
                    hảo sau khi hoàn thành.
                  </p>
                </div>
              </div>
              <div className="timeline__item timeline__item--7">
                <div className="timeline__item__station" />
                <div className="timeline__item__content">
                  <h2 className="timeline__item__content__date">1927</h2>
                  <p className="timeline__item__content__description">
                    Để kỷ niệm việc vượt qua eo biển, Rolex đã xuất bản tin
                    quảng cáo chiếm trọn trang nhất của báo Daily Mail để công
                    bố sự thành công của chiếc đồng hồ chống thấm nước. Sự kiện
                    này đánh dấu sự ra đời của khái niệm “Chứng nhân”.
                  </p>
                </div>
              </div>
              <div className="timeline__item timeline__item--8">
                <div className="timeline__item__station" />
                <div className="timeline__item__content">
                  <h2 className="timeline__item__content__date">1933</h2>
                  <p className="timeline__item__content__description">
                    Chuyến thám hiểm đầu tiên bay qua đỉnh Everest đã được trang
                    bị những chiếc Rolex Oyster. Các thành viên của đoàn thám
                    hiểm đã vô cùng hài lòng với hiệu quả hoạt động của những
                    chiếc đồng hồ.{" "}
                  </p>
                </div>
              </div>
              <div className="timeline__item timeline__item--9">
                <div className="timeline__item__station" />
                <div className="timeline__item__content">
                  <h2 className="timeline__item__content__date">1935</h2>
                  <p className="timeline__item__content__description">
                    Rolex đã nhận thấy cơ hội lớn để kiểm tra, tinh chỉnh, giới
                    thiệu hiệu năng kỹ thuật của chiếc đồng hồ Oyster tại những
                    sự kiện khác nhau. Ngành thể thao, hàng không, đua xe và
                    thám hiểm đã đóng vai trò như những phòng thí nghiệm sống để
                    kiểm định vô số các đặc tính kỹ thuật cho đồng hồ.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div id="right-border-grey" />
        </div>
      </div>
    </>
  );
}

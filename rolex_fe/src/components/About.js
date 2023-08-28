export default function About() {
  return (
    <section className="about_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 offset-md-2">
              <div className="about_detail-box">
                <h3 className="custom_heading ">
                  About our watch
                </h3>
                <p className>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                  of
                  letters, as opposed to using 'Content here, content here', making it
                </p>
                <div>
                  <a href>
                    Read More
                  </a>
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
  );
}

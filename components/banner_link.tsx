import Slider from "react-slick"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
// import Info_Container from "./info_container"

// Import css files

const Banner_Link = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        // className={className}
        style={{
          ...style,
          display: "block",
          background: "none",
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: "1",
          // padding: "10px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {/* <img src="https://sv1.picz.in.th/images/2020/07/23/5yBDj0.png" /> */}
      </div>
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        // className={className}
        style={{
          ...style,
          display: "block",
          background: "none",
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 1,
          // padding: "10px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {/* <img src="https://sv1.picz.in.th/images/2020/07/23/5yB60t.png" /> */}
      </div>
    )
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    // dotsClass: "button__bar_link",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Grid item xs={12}>
      <Slider {...settings}>
        {/* สไลด์1 */}
        <div>
          <Slide_content container xs={12}>
            <Slide_content_bg item xs={12}>
              <img
                src="https://sv1.picz.in.th/images/2021/01/08/lTTcVv.png"
                width="100%"
              />

              <Slide_title_container className="Slide_visivle" container>
                <Slide_title_content item xs={12}>
                  <span>สถาบันนิติวิทยาศสาตร์</span>
                </Slide_title_content>
              </Slide_title_container>
            </Slide_content_bg>
          </Slide_content>
        </div>

        <div>
          <Slide_content container xs={12}>
            <Slide_content_bg item xs={12}>
              <img
                src="https://sv1.picz.in.th/images/2021/01/08/lTT5Dn.png"
                width="100%"
              />

              <Slide_title_container className="Slide_visivle" container>
                <Slide_title_content item xs={12}>
                  <span>eGovernment</span>
                </Slide_title_content>
              </Slide_title_container>
            </Slide_content_bg>
          </Slide_content>
        </div>

        <div>
          <Slide_content container xs={12}>
            <Slide_content_bg item xs={12}>
              <img
                src="https://sv1.picz.in.th/images/2021/01/08/lTTsMJ.png"
                width="100%"
              />

              <Slide_title_container className="Slide_visivle" container>
                <Slide_title_content item xs={12}>
                  <span>มหาวิทยาลัยราชมงคลตะวันออก</span>
                </Slide_title_content>
              </Slide_title_container>
            </Slide_content_bg>
          </Slide_content>
        </div>

        <div>
          <Slide_content container xs={12}>
            <Slide_content_bg item xs={12}>
              <img
                src="https://sv1.picz.in.th/images/2021/01/08/lTTC1b.png"
                width="100%"
              />

              <Slide_title_container className="Slide_visivle" container>
                <Slide_title_content item xs={12}>
                  <span>ศูนย์รวมข้อมูลเพื่อติดต่อราชการ</span>
                </Slide_title_content>
              </Slide_title_container>
            </Slide_content_bg>
          </Slide_content>
        </div>

        <div>
          <Slide_content container xs={12}>
            <Slide_content_bg item xs={12}>
              <img
                src="https://sv1.picz.in.th/images/2021/01/08/lTTC1b.png"
                width="100%"
              />

              <Slide_title_container className="Slide_visivle" container>
                <Slide_title_content item xs={12}>
                  <span>ศูนย์รวมข้อมูลเพื่อติดต่อราชการ</span>
                </Slide_title_content>
              </Slide_title_container>
            </Slide_content_bg>
          </Slide_content>
        </div>
      </Slider>
    </Grid>
  )
}
export default Banner_Link


const Slide_content = styled(Grid)`
  padding: 10px;
  position: relative;
  margin-bottom: 40px;
`
const Slide_content_bg = styled(Grid)`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;
  img {
    border-radius: 5px;
  }
  :hover {
    background: white;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
  :hover .Slide_visivle {
    visibility: visible;
    bottom: -40px;
  }
`
// Title slide
const Slide_title_container = styled(Grid)`
  position: absolute;
  left: 0;
  bottom: 10px;
  padding: 0 10px;
  visibility: hidden;
  /* bottom: -40px; */
`
const Slide_title_content = styled(Grid)`
  text-align: center;

  span {
    font-size: 20px;
    color: #ef4136;
    text-shadow: 2px 2px 4px #7e4949;
    font-family: "Kanit";
    letter-spacing: 2px;
  }
`

import Slider from "react-slick"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

// import Info_Container from "./info_container"

// Import css files

const Banner_Slide_Big = () => {
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
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    dotsClass: "button__bar_topslide",

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <Grid item xs={12}>
      <Slider {...settings}>
        {/* สไลด์1 */}
        <div>
          <Slide_container item xs={12}>
            <img
              src="https://sv1.picz.in.th/images/2021/01/12/lgpm4a.jpg"
              width="100%"
            />
          </Slide_container>
        </div>
        {/* สไลด์2 */}
        <div>
          <Slide_container item xs={12}>
            <img
              src="https://sv1.picz.in.th/images/2021/01/14/lQZlU8.jpg"
              width="100%"
            />
          </Slide_container>
        </div>
      </Slider>
    </Grid>
  )
}
export default Banner_Slide_Big

const Slide_container = styled(Grid)`
  position: relative;
  img {
    /* height: 100vh; */
    max-height: 500px;
    object-fit: cover;
  }
`

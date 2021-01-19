import Slider from "react-slick"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Info_Container from "./info_container"

// Import css files

const Banner_Infographic = () => {
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    dotsClass: "button__bar",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <Grid item xs={12}>
      <Slider {...settings}>
        {/* สไลด์1 */}
        <div>
          <Info_Container
            img="https://sv1.picz.in.th/images/2021/01/07/l34Tzt.jpg"
          />
        </div>

        <div>
          <Info_Container
            img="https://sv1.picz.in.th/images/2021/01/11/lZkdpa.jpg"
          />
        </div>

        <div>
          <Info_Container
            img="https://sv1.picz.in.th/images/2021/01/11/lZKP6g.jpg"
          />
        </div>

        <div>
          <Info_Container
            img="https://sv1.picz.in.th/images/2021/01/11/lZK6Ly.jpg"
          />
        </div>

        <div>
          <Info_Container
            img="https://sv1.picz.in.th/images/2021/01/11/lZKp6a.jpg"
          />
        </div>

        
      </Slider>
    </Grid>
  )
}
export default Banner_Infographic


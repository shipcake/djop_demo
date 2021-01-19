import Slider from "react-slick"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Contact_Container from "./contact_container"

// Import css files

const Banner_Contact = () => {
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
    dotsClass: "button__bar_purple",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <Grid item xs={12}>
      <Slider {...settings}>
        {/* สไลด์1 */}
        <div>
          <Contact_Container
        data={[
          {title:"ศูนย์ข้อมูลข่าวสาร",img:"https://sv1.picz.in.th/images/2021/01/07/l354Hf.png"},
          {title:"สนทนา กับ รมต.",img:"https://sv1.picz.in.th/images/2021/01/07/l3sl3a.png"},
          {title:"WAR ROOM",img:"https://sv1.picz.in.th/images/2021/01/07/l3ssQR.png"},
          {title:"เว็บลิงค์รวมหน่วยงานในสังกัด",img:"https://sv1.picz.in.th/images/2021/01/07/l3s2r0.png"},
          {title:"NEWS CLIPPING",img:"https://sv1.picz.in.th/images/2021/01/07/l3seZV.png"},
          {title:"ร้องเรียนร้องทุกข์",img:"https://sv1.picz.in.th/images/2021/01/07/l3syyS.png"},
        ]}
            
          />
        </div>

        <div>
        <Contact_Container
        data={[
          {title:"CONFERENCE",img:"https://sv1.picz.in.th/images/2021/01/07/l3sMjg.png"},
          {title:"สายตรงอธิบดี",img:"https://sv1.picz.in.th/images/2021/01/12/lcpVgv.png"},
          {title:"DJOP CENTER",img:"https://sv1.picz.in.th/images/2021/01/12/lcvSoJ.png"},
          {title:"KM CENTER",img:"https://sv1.picz.in.th/images/2021/01/12/lcvBVq.png"},
          {title:"HR KM",img:"https://sv1.picz.in.th/images/2021/01/12/lcvBVq.png"},
          {title:"แผนปฎิบัติการดิจิทัล",img:"https://sv1.picz.in.th/images/2021/01/12/lcv9M0.png"},
        ]}
            
          />
        </div>
      </Slider>
    </Grid>
  )
}
export default Banner_Contact

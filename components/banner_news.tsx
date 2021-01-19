import Slider from "react-slick"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
// Import css files

const Banner_NewsComp = () => {
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

  //   const sliderSettings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     dotsClass: "button__bar",
  //     nextArrow: <SampleNextArrow />,
  //     prevArrow: <SamplePrevArrow />,
  //     responsive: [
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           initialSlide: 2
  //         }
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //     ]
  //   };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <Grid item xs={12}>
      <Slider {...settings}>
        {/* สไลด์1 */}
        <div>
          <Main_news_container item xs={12}>
            {/* ข่าวเต็มเฟรม */}
            <Grid container>
              {/* รูปปก */}
              <Grid item xs={12} sm={6}>
                <Img_container className="sb_container" container>
                  <img
                    src="https://sv1.picz.in.th/images/2020/12/25/jeW6if.jpg"
                    width="100%"
                  />
                </Img_container>
              </Grid>
              {/* จบรูปปก */}

              {/* เนื้อหาข่าว */}
              <Newscontent_container_big item xs={12} sm={6}>
                <Newscontent_container display="flex" flexDirection="column">
                  <News_content_1>9 พ.ย. 2563</News_content_1>
                  <News_content_2>
                    อธิบดีกรมพินิจฯ
                    เข้าเยี่ยมคารวะอธิบดีผู้พิพากษาศาลเยาวชนและครอบครัวกลาง
                  </News_content_2>
                  <Text_container3 container>
                    <News_content_3>
                      วันที่ 9 พฤศจิกายน 2563 เวลา 10.00 น. พ.ต.ท. วรรณพงษ์
                      คชรักษ์ อธิบดีกรมพินิจและคุ้มครองเด็กและเยาวชน
                      พร้อมด้วยรองอธิบดีกรมพินิจฯ ทั้ง 3 ท่าน คือ
                      นางสาวศิริประกาย วรปรีชา, นางณัฐภัสสร สุนทรฐณะ วัฒน์,
                      นายโกมล พรมเพ็ง และคณะเจ้าหน้าที่กรมพินิจฯ
                      เข้าเยี่ยมคารวะและ แสดงความยินดีแด่ นางอโนชา ชีวิตโสภณ
                      เนื่องในโอกาสเข้ารับตำแหน่งอธิ
                      บดีผู้พิพากษาศาลเยาวชนและครอบครัวกลาง
                      พร้อมทั้งร่วมหารือเกี่ยวกับ การนำมาตรการแทนการพิพากษา
                      ตามมาตรา 132 วรรค 2 มาใช้กับเด็กและ เยาวชนที่ถูกควบคุมตัว
                      โดยมีนายภัทรศักดิ์ ศิริสินธว์ และนางวิรา ยากะจิ ณ พิกุล
                      รองอธิบดีผู้พิพากษาศาลเยาวชนฯ ทั้ง 2 ท่าน และคณะ
                    </News_content_3>
                  </Text_container3>
                </Newscontent_container>
                <Btn_container container>
                  <Button_container1>อ่านต่อ</Button_container1>
                </Btn_container>
              </Newscontent_container_big>
            </Grid>
          </Main_news_container>
        </div>
        {/* จบสไลด์1 */}
        {/* สไลด์2 */}
        <div>
          <Main_news_container item xs={12}>
            {/* ข่าวเต็มเฟรม */}
            <Grid container>
              {/* รูปปก */}
              <Grid item xs={12} sm={6}>
                <Img_container className="sb_container" container>
                  <img
                    src="https://sv1.picz.in.th/images/2021/01/07/l3AtUE.jpg"
                    width="100%"
                  />
                </Img_container>
              </Grid>
              {/* จบรูปปก */}

              {/* เนื้อหาข่าว */}
              <Newscontent_container_big item xs={12} sm={6}>
                <Newscontent_container display="flex" flexDirection="column">
                  <News_content_1>15 ธ.ค. 2563</News_content_1>
                  <News_content_2>
                    ตรวจเยี่ยมและให้กำลังใจเจ้าหน้าที่ในการปฏิบัติงาน
                    ตลอดจนเยี่ยมชมความเป็นอยู่ของเด็กและเยาวชนภายในสถานควบคุม
                  </News_content_2>
                  <Text_container3 container>
                    <News_content_3>
                      วันที่ 15 ธันวาคม 2563 พ.ต.ท. วรรณพงษ์ คชรักษ์
                      อธิบดีกรมพินิจและคุ้มครองเด็กและเยาวชน และคณะ
                      ได้เดินทางไปยังศูนย์ฝึกและอบรมเด็กและเยาวชน เขต 9 ยะลา
                      และสถานพินิจและคุ้มครองเด็กและเยาวชนจังหวัดสงขลา
                      เพื่อตรวจเยี่ยมและให้กำลังใจเจ้าหน้าที่ในการปฏิบัติงาน
                    </News_content_3>
                  </Text_container3>
                </Newscontent_container>
                <Btn_container container>
                  <Button_container1>อ่านต่อ</Button_container1>
                </Btn_container>
              </Newscontent_container_big>
            </Grid>
          </Main_news_container>
        </div>
        {/* จบสไลด์2*/}
        {/* สไลด์3 */}
        <div>
          <Main_news_container item xs={12}>
            {/* ข่าวเต็มเฟรม */}
            <Grid container>
              {/* รูปปก */}
              <Grid item xs={12} sm={6}>
                <Img_container className="sb_container" container>
                  <img
                    src="https://sv1.picz.in.th/images/2021/01/07/l3AFgV.jpg"
                    width="100%"
                  />
                </Img_container>
              </Grid>
              {/* จบรูปปก */}

              {/* เนื้อหาข่าว */}
              <Newscontent_container_big item xs={12} sm={6}>
                <Newscontent_container display="flex" flexDirection="column">
                  <News_content_1>21 ธ.ค. 2563</News_content_1>
                  <News_content_2>
                    จัด "กิจกรรมปลูกป่าเฉลิมพระเกียรติสมเด็จพระเจ้าลูกเธอ
                    เจ้าฟ้าพัชรกิติยาภา นเรนทิราเทพยวดี กรมหลวงราชสาริณีสิริพัชร
                    มหาวัชรราชธิดา เนื่องในโอกาสวันคล้ายวันประสูติ 7 ธันวาคม"
                  </News_content_2>
                  <Text_container3 container>
                    <News_content_3>
                      วันที่ 21 ธันวาคม 2563 เวลา 09.30 น. กระทรวงยุติธรรม
                      โดยกรมพินิจและคุ้มครองเด็กและเยาวชน จัด
                      "กิจกรรมปลูกป่าเฉลิมพระเกียรติสมเด็จพระเจ้าลูกเธอ
                      เจ้าฟ้าพัชรกิติยาภา นเรนทิราเทพยวดี
                      กรมหลวงราชสาริณีสิริพัชร มหาวัชรราชธิดา
                      เนื่องในโอกาสวันคล้ายวันประสูติ 7 ธันวาคม"
                      ภายใต้โครงการศูนย์การเรียนรู้ด้านการเกษตร
                      ตามแนวทางปรัชญาเกษตรทฤษฎีใหม่
                    </News_content_3>
                  </Text_container3>
                </Newscontent_container>
                <Btn_container container>
                  <Button_container1>อ่านต่อ</Button_container1>
                </Btn_container>
              </Newscontent_container_big>
            </Grid>
          </Main_news_container>
        </div>
        {/* จบสไลด์3*/}
      </Slider>
    </Grid>
  )
}
export default Banner_NewsComp

const Mid_container_big = styled(Grid)`
  padding-top: 50px;
`
const Background_container = styled(Grid)`
  background-color: #f7f7f7;
`
const Background_container_2 = styled(Grid)`
  background-color: #f1f2f2;
`
const Background_container_3 = styled(Grid)`
  background-image: url("https://sv1.picz.in.th/images/2021/01/06/lh8z8k.jpg");
  background-size: contain;
`
const Root_container = styled(Grid)`
  padding: 0 10px 45px 10px;
`
const Button_container = styled.button`
  background-color: #f79a3c;
  padding: 0px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: "Kanit";
  font-size: min(max(14px, 1.5vw), 16px) !important;
  border: 1px solid #f79a3c;
  :hover {
    border: 1px solid #f79a3c;
    background: none;
    color: #ec524b;
    transition: 0.3s;
  }
  :focus {
    outline: none;
  }
`
const Button_container1 = styled.button`
  background-color: #f79a3c;
  padding: 0 20px;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: "Kanit";
  font-size: min(max(14px, 1.5vw), 16px) !important;
  border: 1px solid #f79a3c;
  :hover {
    border: 1px solid #f79a3c;
    background: none;
    color: #ec524b;
    transition: 0.3s;
  }
  :focus {
    outline: none;
  }
`
const Btn_container = styled(Grid)`
  position: absolute;
  bottom: 10px;
  padding: 0 30px;
`
const Img_container = styled(Grid)`
  /* padding: 0 10px 0 0; */
`

const Newscontent_container = styled(Box)`
  /* min-height: 370px; */
  /* position: relative; */
  padding: 30px;
  background: none;
`
const News_content_1 = styled(Box)`
  padding-bottom: 10px;
  color: #a7a9ac;
  font-size: min(max(8px, 1vw), 14px) !important;
`
const News_content_2 = styled(Box)`
  padding-bottom: 10px;
  color: #ef4136;
  font-weight: bold;
  /* font-size: 22px; */
  font-size: min(max(14px, 1.5vw), 16px) !important;
  overflow: hidden;
`
const News_content_3 = styled(Box)`
  /* height: 160px; */
  font-size: min(max(8px, 1vw), 14px) !important;
`
const Text_container3 = styled(Grid)`
  height: 105px;
  overflow: hidden;
`
const News_topic = styled(Box)`
  font-family: "Kanit";
  font-size: min(max(20px, 1.5vw), 30px) !important;
  color: #ef4136;
  padding-left: 25px;
  /* border-left:2px solid #ef4136; */
  position: relative;
`
const Line = styled(Box)`
  background-color: #ef4136;
  height: 25px;
  width: 2px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
`
const Main_news_container = styled(Grid)`
  margin-bottom: 20px;
`
const Newscontent_container_big = styled(Grid)`
  position: relative;
  background-color: white;
`

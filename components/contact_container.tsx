import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

/* 
ข้างในมี 2 parameter
1.title
2.img
*/
const Contact_Container = ({ data }) => (
  <Box_Container
    display="flex"
    flexDirection="column"
    textAlign="center"
    xs={6}
    md={12}
  >
    <Box>
      <Title_container container>
        <Bg_container item xs={12}>
          
          {data.map((v) => (
            <Content_container item>
              <Icon_container className="Sb_icon" item xs={2}>
                <img
                  src={v.img}
                  width="100%"
                />
              </Icon_container>
              <Content_container_text item xs={10}>
                <span className="Info_title">{v.title}</span>
              </Content_container_text>
            </Content_container>
          ))}

        </Bg_container>
      </Title_container>
    </Box>
  </Box_Container>
)

export default Contact_Container

const Box_Container = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`
const Title_container = styled(Grid)`
  background-image: url("https://sv1.picz.in.th/images/2021/01/07/l3ta9q.jpg");
  background-size: 100%;
  border-radius: 10px 10px 0 0;
  margin-top: 10px;
`
const Bg_container = styled(Grid)`
  background: linear-gradient(
    0deg,
    rgba(142, 45, 226, 0.8) 30%,
    rgba(74, 0, 224, 0.3029586834733894) 70%
  );
  width: 100%;
  border-radius: 10px 10px 0 0;
`
const Content_container = styled(Grid)`
  padding: 10px 10px;
  display: flex;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
  :hover .Info_title {
    color: white;
    font-size: 17px;
  }
  :hover .Sb_icon {
    padding: 2px;
    transition: all 0.3s;
  }
  .Info_title {
    color: #d1d3d4;
    font-size: 15px;
    transition: all 0.3s;
  }
`
const Content_container_text = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
`
const Icon_container = styled(Grid)`
  padding: 5px;
`
// const Bottom_bar_container = styled(Grid)`
//   background: #302b63;
//   padding: 10px;
//   border-radius: 0 0 10px 10px;
//   display: flex;
//   justify-content: center;
// `
// const Btn_next_container = styled(Grid)`
//   padding: 5px;
// `
// const Btn_next_content = styled(Grid)`
//   background-color: #ddd8d8;
//   border-radius: 100px;
//   width: 12px;
//   height: 12px;
//   transition: all 0.3s;
//   :hover {
//     background-color: white;
//     box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
//     cursor: pointer;
//   }
//   :active {
//     background-color: white;
//   }
// `

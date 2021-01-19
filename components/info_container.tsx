import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"

const Info_Container = ({ img }) => (
  
    <Box>
     
      <Img_container container>
        <Grid item>
          <img src={img} />
        </Grid>
      </Img_container>
     
    </Box>
 

  
)

export default Info_Container


const Img_container = styled(Grid)`
  background-color: #f8f8f8;
  img {
    width: 100%;
  }
`

// const Btn_next_container = styled(Grid)`
//   padding: 5px;
// `
// const Btn_next_content = styled(Grid)`
//   background-color: #e6e3e3;
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

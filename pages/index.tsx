import React, { createRef } from "react"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import styled from "styled-components"
import TextField from "@material-ui/core/TextField"
import Hidden from "@material-ui/core/Hidden"
import { withStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import Main_Container from "../components/container"
import Info_Container from "../components/info_container"
import Contact_Container from "../components/contact_container"
import Banner_NewsComp from "../components/banner_news"
import Banner_Infographic from "../components/banner_infographic"
import Banner_Contact from "../components/banner_contact"
import Banner_Link from "../components/banner_link"
import Banner_Slide_Big from "../components/banner_slide_big"
import momentTZ from "moment-timezone"
momentTZ.locale("th")
// ปุ่มค้นหา
const Search_input = withStyles({
  root: {
    width: "100%",

    "& .MuiInputBase-input": {
      color: "white",
      padding: "5px 5px 5px 15px",
    },
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFD369",
    },
    "& .MuiOutlinedInput-root": {
      color: "red !important",
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "blue",
      },
    },
  },
})(TextField)

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs)

const AntTab: any = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
      outline: "none",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />)

/* ฟังชั่นแท็บ */
const TabPanel = (props) => {
  const { children, value, index, ...other } = props
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const Index = () => {
  /* แท็บข่าวสาร */
  const [TabNewsValue, setTabNewsValue] = React.useState(0)

  const calendarRef: any = createRef()

  return (
    /* โครงหน้าเว็บใหญ่สุด */
    <>
      {/* หัวเว็บไซต์ */}

      {/* <Grid item xs={12}> */}
      <Main_Container>
        <Headder_container container>
          <Logo_container item xs={12} md={2} className="text-center">
            <img src="https://sv1.picz.in.th/images/2020/12/24/jGQle2.png" />
          </Logo_container>

          <Grid item xs={12} md={10}>
            <Hidden smDown>
              <Box display="flex" flexDirection="column">
                <Grid item xs={12}>
                  <Search_container_big container>
                    {/* ส่วนของค้นหา */}
                    <Bg_container item xs={6}>
                      <Search_container
                        container
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Search_container_1 item xs={3}>
                          คุณกำลังมองหาอะไร?
                        </Search_container_1>

                        <Grid item xs={8}>
                          <Box display="flex">
                            <Box flex="1">
                              <Search_input placeholder="ค้นหา" />
                            </Box>
                          </Box>
                        </Grid>

                        <Search_container_3 item xs={1}>
                          <Box display="flex" justifyContent="center">
                            <Box>
                              <img
                                src="https://sv1.picz.in.th/images/2020/12/24/jGHNml.png"
                                width="20px"
                              />
                            </Box>
                          </Box>
                        </Search_container_3>
                      </Search_container>
                    </Bg_container>

                    {/* ส่วนของเปลี่ยนขนาดตัวอักษร*/}
                    <Bg_container2 item xs={6}>
                      <Grid container justify="center" alignItems="center">
                        {/* ปรับขนาดตัวอักษร */}
                        <Grid item xs={11}>
                          <Lang_Comp container>
                            <Grid item xs={4}>
                              ขนาดตัวอักษร
                            </Grid>
                            <Grid item xs={4}>
                              ความตัดกันของสี
                            </Grid>
                            <Grid item xs={4}>
                              เปลี่ยนภาษา
                            </Grid>
                          </Lang_Comp>
                        </Grid>

                        {/* ไซต์แมพ */}
                        <Grid item xs={1}>
                          <SiteMap_Comp container>
                            <Grid item xs={12}>
                              <Box display="flex" justifyContent="center">
                                <Box>
                                  <img
                                    src="https://sv1.picz.in.th/images/2020/12/24/jGFbgk.png"
                                    width="100%"
                                  />
                                </Box>
                              </Box>
                            </Grid>
                          </SiteMap_Comp>
                        </Grid>
                        {/* สิ้นสุด ไซต์แมพ */}
                      </Grid>
                    </Bg_container2>
                  </Search_container_big>
                </Grid>

                {/* ส่วนของเมนูใหญ่ */}
                <Dropdown_menu_container container>
                  {/* ส่วนของปุ่มโฮม */}
                  <Grid item xs={1}>
                    <Grid container>
                      <Home_icon item>
                        <img
                          src="https://sv1.picz.in.th/images/2020/12/24/jJfmbq.png"
                          width="30px"
                        />
                      </Home_icon>
                    </Grid>
                  </Grid>

                  {/* ส่วนของเมนู */}
                  <Grid item xs={11}>
                    <Title_menu container>
                      <Title_menu_content item xs={2}>
                        เกี่ยวกับกรมพินิจ
                      </Title_menu_content>
                      <Title_menu_content item xs={2}>
                        หน่วยงานและที่ตั้ง
                      </Title_menu_content>
                      <Title_menu_content item xs={2}>
                        กฎหมายที่เกี่ยวข้อง
                      </Title_menu_content>
                      <Title_menu_content item xs={2}>
                        เอกสารเผยแพร่
                      </Title_menu_content>
                      <Title_menu_content item xs={2}>
                        สถิติคดี
                      </Title_menu_content>
                      <Title_menu_content item xs={2}>
                        เว็บลิ้งค์หน่วยงาน
                      </Title_menu_content>
                    </Title_menu>
                  </Grid>
                </Dropdown_menu_container>
              </Box>
            </Hidden>
          </Grid>
        </Headder_container>
      </Main_Container>
      {/* </Grid> */}

      {/* จบ หัวเว็บไซต์ */}

      {/* แบร์นเนอร์สไลด์ ใหญ่ */}

      <Slide_container_big container xs={12}>
        <Banner_Slide_Big />
      </Slide_container_big>

      {/* จบ แบร์นเนอร์สไลด์ ใหญ่ */}

      {/* ส่วนกลาง */}
      {/* แถบสีเทา */}
      <Title_bar_container container>
        <Grid item xs={12}>
          <Main_Container colors="#ffffff">
            <Grid container>
              <Grid item>
                <img
                  src="https://sv1.picz.in.th/images/2020/12/25/jLryYu.png"
                  width="100%"
                />
              </Grid>
              <Title_bar_text item>DJOP</Title_bar_text>
              <Title_bar_text2 item>UPDATE</Title_bar_text2>
            </Grid>
          </Main_Container>
        </Grid>
      </Title_bar_container>
      {/* จบแถบสีเทา */}

      {/* ข่าวกิจกรรมหลัก */}
      <Background_container container>
        <Grid item xs={12}>
          <Main_Container>
            <Mid_container_big container>
              <Root_container item xs={12} md={9}>
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      paddingBottom="35px"
                      paddingRight="25px"
                    >
                      <News_topic>
                        <Line></Line>ข่าว/กิจกรรมหลัก
                      </News_topic>
                      <Button_container>ทั้งหมด</Button_container>
                    </Box>
                  </Grid>
                </Grid>

                <Container_subnews_container container>
                  <Banner_NewsComp />

                  {/* ข่าวย่อยเฟรมเล็ก */}
                  <Grid container>
                    <Subnews_container
                      className="sb_container"
                      item
                      xs={12}
                      sm={4}
                    >
                      <Sub_content item>
                        <img
                          src="https://sv1.picz.in.th/images/2020/12/28/jIEL0W.jpg"
                          width="100%"
                        />

                        <Subnews_text_container container>
                          <Subnews_text container>
                            <Description_date
                              className="Description_date_sb"
                              item
                            >
                              11 พ.ย. 2563
                            </Description_date>
                            <Description_text
                              className="Description_text_sb"
                              item
                            >
                              กรมพินิจฯ เข้าร่วมกิจกรรมทำบุญ ตักบาตรพระสงฆ์
                            </Description_text>
                            <Subnews_btn_container item>
                              <Subnews_btn className="sb_btn">
                                อ่านต่อ
                              </Subnews_btn>
                            </Subnews_btn_container>
                          </Subnews_text>
                        </Subnews_text_container>
                      </Sub_content>
                    </Subnews_container>

                    <Subnews_container
                      className="sb_container"
                      item
                      xs={12}
                      sm={4}
                    >
                      <Sub_content item>
                        <img
                          src="https://sv1.picz.in.th/images/2020/12/28/jIEI9D.jpg"
                          width="100%"
                        />
                        <Subnews_text_container container>
                          <Subnews_text container>
                            <Description_date
                              className="Description_date_sb"
                              item
                            >
                              10 พ.ย. 2563
                            </Description_date>
                            <Description_text
                              className="Description_text_sb"
                              item
                            >
                              การประชุมโครงสร้างหลักสูตรเจ้า พนักงานพินิจ
                              ในหัวข้อ “หลักสูตร...
                            </Description_text>
                            <Subnews_btn_container item>
                              <Subnews_btn className="sb_btn">
                                อ่านต่อ
                              </Subnews_btn>
                            </Subnews_btn_container>
                          </Subnews_text>
                        </Subnews_text_container>
                      </Sub_content>
                    </Subnews_container>

                    <Subnews_container
                      className="sb_container"
                      item
                      xs={12}
                      sm={4}
                    >
                      <Sub_content item>
                        <img
                          src="https://sv1.picz.in.th/images/2020/12/28/jIO0Nb.jpg"
                          width="100%"
                        />

                        <Subnews_text_container container>
                          <Subnews_text container>
                            <Description_date
                              className="Description_date_sb"
                              item
                            >
                              6 พ.ย. 2563
                            </Description_date>
                            <Description_text
                              className="Description_text_sb"
                              item
                            >
                              หารือ "แนวทางการดำเนินงานในการ สร้างโอหารือ
                              แนวทางการดำเนินการประชุมโครงสร้างหลักสูตรเจ้า
                              พนักงานพินิจ ในหัวข้อ หลักสูตร"
                            </Description_text>
                            <Subnews_btn_container item>
                              <Subnews_btn className="sb_btn">
                                อ่านต่อ
                              </Subnews_btn>
                            </Subnews_btn_container>
                          </Subnews_text>
                        </Subnews_text_container>
                      </Sub_content>
                    </Subnews_container>
                  </Grid>
                </Container_subnews_container>
              </Root_container>
              {/* จบข่าวย่อยเฟรมเล็ก */}

              {/* คอนเทนเนอร์ปฏิทิน */}
              <Calendar_container item xs={12} md={3}>
                <Box display="flex" flexDirection="column">
                  <Grid item>
                    <img
                      src="https://sv1.picz.in.th/images/2020/12/28/jM0A1V.png"
                      width="100%"
                    />
                  </Grid>

                  {/* ปุ่มควบคุมปฏิทิน */}
                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      padding="10px 10px 10px 10px"
                    >
                      <Box>
                        <Next_button_container
                          onClick={() => calendarRef.current.getApi().prev()}
                        >
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD/wAAA/8Brivk3gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASKSURBVHic7d3NihxVGMbx/xshuA4uFMbPiB8QEAU3LmSi2QZvxoUXIOQKvARXbkfciM5OEGUEISQaFUFNVroRFTevi+6MPUl3T52qc+qces/z304XOfD8KPojUObuqPKZ2UXgXeAd4GXgB+AT4H13/6vauQSgfGb2NHAEXNny5x+Bt9z953lPtUoACrce/xh4Zs/LPgOueYUxBKBgA8e/3+vu/lXRA23pwtz/YC8ljg/wSrHD7EkACjRifIB/ixzmnAQgcyPHB/g6+2EGJAAZmzD+h+5+M/uBBqQ3gZmaMP4t4A13/yP3mYakO0CGJo5/tdb4IACTyzD+vdxnSkkAJrT08UEARhdhfBCAUUUZHwQguUjjgwAkFW18EIDBmdlTwOcEGh8EYFDr8Y+BZxMvbXp8EIBzizw+CMDeoo8PArCzHsYHAdhaL+ODADxUT+ODAJypt/FBAE7rcXwQAKDf8UEAuh4fOgfQ+/jQMQCNv6pLABr//7oDoPHP1hUAM3uS1U+6Gn9dNwDW4x8DzyVeGnZ86ASAxt9deAAaf3+hAWj88wsLQOMPKyQAjT+8cAA0flqhAGj89MIA0PjjCgFA449v8QA0/rQWDUDjT2+xADR+nhYJYONXPY0/scUB2Bj/cuKlGn9LiwJgZgdo/KwtBsB6/GM0ftYWAUDjl6t5ABq/bE0D0PjlaxaAxp+nJgFo/PlqDoDGn7emAGj8+WsGgMavUxMANH69qgPQ+HWrCkDf7dev2jODzOwx4Avg+cRLNX7Gat4BPkDjV6/KHcDMrgDfJl6m8QtU6w7wWuLrNX6hagF4JPH1f1Pp0arRqwXgJPH1rwKfmtmlEofpuSoA3P0b4CjxMiEoUM2PgU8AXwIHiZeeANfc/ff8p+qvah8D3f0ucBX4JfFS3QkyVvWbQHe/wwrBr4mXCkGmqv8WsEZwiBBUqToAEIKaNQEAhKBWzQAAIahRUwBACOauOQAgBHPWJAAQgrlqFgAIwRw1DQCEoHTNAwAhKNkiAIC+Ni7VYgAAuPv3CEHWFgUAhCB3iwMAQpCzRQIAIcjVYgHAGQS/JV4qBOsWDQBOERwiBKNaPAAQgimFAABCMLYwAEAIxhQKAAhBauEAgBCkFBIACMHQwgIAfU8wpNAAANz9O4RgZ+EBgBDsqwsAIAS76gYACMG2ugIAQvBg3QEAIdisSwAgBPfrFgCcQXA38dIwCLoGAKcIDukUQfcAoG8EArCuVwQCsFGPCATggXpDIABb6unTgQDsyN1v0wECAdhTDwgE4JyiIxCAAUVGIAADi4pAABKKiEAAEouGQABGFAmBAIwsCgIBmFAEBAIwsQ0EqY+0awJBtWcGRcvMXmT1EOzHEy89Ad509z+zH2pAugNkauKd4Eb+Ew1Ld4DMmdlLrJ6InnIncODA3VP/g+rkdAfInLvfIv1OYKQ/TjdLAlCgkQguFjrO3gSgUCMQpD5ON0sCULAEBB+5+08zHOmh9CZwhtZvDI+Ay1v+fBN4291TPz1kSQBmysweBd4DrgMvALeBj4Eb7v5PrXP9B5YoD/PuF2ERAAAAAElFTkSuQmCC" width="15px"/>
                        </Next_button_container>
                      </Box>
                      <Box>
                        <span>sd</span>
                      </Box>
                      <Box>
                        <Next_button_container
                          onClick={() => calendarRef.current.getApi().next()}
                        >
                          <img
                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMiA1MTIuMDAyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAyIDUxMi4wMDI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzg4LjQyNSwyNDEuOTUxTDE1MS42MDksNS43OWMtNy43NTktNy43MzMtMjAuMzIxLTcuNzItMjguMDY3LDAuMDRjLTcuNzQsNy43NTktNy43MiwyMC4zMjgsMC4wNCwyOC4wNjdsMjIyLjcyLDIyMi4xMDUNCgkJCUwxMjMuNTc0LDQ3OC4xMDZjLTcuNzU5LDcuNzQtNy43NzksMjAuMzAxLTAuMDQsMjguMDYxYzMuODgzLDMuODksOC45Nyw1LjgzNSwxNC4wNTcsNS44MzVjNS4wNzQsMCwxMC4xNDEtMS45MzIsMTQuMDE3LTUuNzk1DQoJCQlsMjM2LjgxNy0yMzYuMTU1YzMuNzM3LTMuNzE4LDUuODM0LTguNzc4LDUuODM0LTE0LjA1UzM5Mi4xNTYsMjQ1LjY3NiwzODguNDI1LDI0MS45NTF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                            width="15px"
                          />
                        </Next_button_container>
                      </Box>
                    </Box>
                  </Grid>
                  {/* จบปุ่มควบคุมปฏิทิน */}

                  <Sub_Calendar_container item xs={12}>
                    <Calendar>
                      <FullCalendar
                        locale="th"
                        ref={calendarRef}
                        plugins={[dayGridPlugin]}
                        events={[
                          {
                            title: "ทดสอบ",
                            start: "2020-12-27",
                            end: "2020-12-29",
                          },
                        ]}
                        headerToolbar={{
                          left: "",
                          right: "",
                        }}
                      />
                    </Calendar>
                  </Sub_Calendar_container>
                </Box>
              </Calendar_container>
              {/* จบคอนเทนเนอร์ปฏิทิน */}
            </Mid_container_big>
          </Main_Container>
        </Grid>
      </Background_container>
      {/* จบข่าวกิจกรรมหลัก */}

      {/* ข่าวเต็มเฟรม3หัวข้อข่าว */}
      <Background_container_2 container>
        <Grid item xs={12}>
          <Main_Container>
            <Mid_container_big container>
              {/* หัวข้อใหญ่ */}
              <Root_container2 item xs={12} md={9}>
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      paddingBottom="35px"
                      paddingTop="35px"
                      paddingRight="25px"
                    >
                      <News_topic>
                        <Line></Line>ข่าวสาร กพ.
                      </News_topic>
                      <Button_container>ทั้งหมด</Button_container>
                    </Box>
                  </Grid>
                </Grid>
                {/* จบหัวข้อใหญ่ */}

                <Box display="flex" flexDirection="column" width="100%">
                  <AntTabs
                    value={TabNewsValue}
                    variant="fullWidth"
                    onChange={(e, v) => setTabNewsValue(v)}
                  >
                    <AntTab label="01. ข่าวประกาศ" />
                    <AntTab label="02. ข่าวประชาสัมพันธ์" />
                    <AntTab label="03. ข่าวจัดซื้อ/จัดจ้าง" />
                  </AntTabs>

                  {/* หัวข้อข่าวประกาศ */}
                  <TabPanel value={TabNewsValue} index={0}>
                    <img
                      src="https://sv1.picz.in.th/images/2020/12/28/jIG8p9.png"
                      width="100%"
                    />
                    <Grid container>
                      <News_type item>ข่าวประชาสัมพันธ์</News_type>
                      <News_date item xs={12}>
                        11.11.2563
                      </News_date>
                    </Grid>
                    <Grid container>
                      <News_main item xs={12}>
                        รับสมัครบุคคลเพื่อเลือกสรรเป็นพนักงานจ้างเหมาบริการตำ
                        แหน่งผู้ช่วยนักบำบัด (ศูนย์ฝึกฯ นครสวรรค์)
                      </News_main>
                    </Grid>

                    <Container_button_bar container>
                      <Container_button_bar_in item xs={12}>
                        <Buttons_in>อ่านรายละเอียด</Buttons_in>
                      </Container_button_bar_in>
                    </Container_button_bar>
                  </TabPanel>

                  {/* จบหัวข้อข่าวประกาศ */}

                  {/* หัวข้อข่าวประชาสัมพันธ์ */}
                  <TabPanel value={TabNewsValue} index={1}>
                    <img
                      src="https://sv1.picz.in.th/images/2020/12/28/jIyFx9.png"
                      width="100%"
                    />
                    <Grid container>
                      <News_type item>ข่าวประชาสัมพันธ์</News_type>
                      <News_date item xs={12}>
                        11.11.2563
                      </News_date>
                    </Grid>
                    <Grid container>
                      <News_main item xs={12}>
                        รับสมัครบุคคลเพื่อเลือกสรรเป็นพนักงานจ้างเหมาบริการตำ
                        แหน่งผู้ช่วยนักบำบัด (ศูนย์ฝึกฯ นครสวรรค์)
                      </News_main>
                    </Grid>
                    <Container_button_bar container>
                      <Container_button_bar_in item xs={12}>
                        <Buttons_in>อ่านรายละเอียด</Buttons_in>
                      </Container_button_bar_in>
                    </Container_button_bar>
                  </TabPanel>

                  {/* จบหัวข้อข่าวประชาสัมพันธ์ */}

                  {/* หัวข้อข่าวจัดซื้อ/จัดจ้าง */}
                  <TabPanel value={TabNewsValue} index={2}>
                    <img
                      src="https://sv1.picz.in.th/images/2020/12/28/jIyFx9.png"
                      width="100%"
                    />
                    <Grid container>
                      <News_type item>ข่าวประชาสัมพันธ์</News_type>
                      <News_date item xs={12}>
                        11.11.2563
                      </News_date>
                    </Grid>

                    <Grid container>
                      <News_main item xs={12}>
                        รับสมัครบุคคลเพื่อเลือกสรรเป็นพนักงานจ้างเหมาบริการตำ
                        แหน่งผู้ช่วยนักบำบัด (ศูนย์ฝึกฯ นครสวรรค์)
                      </News_main>
                    </Grid>
                    <Container_button_bar container>
                      <Container_button_bar_in item xs={12}>
                        <Buttons_in>อ่านรายละเอียด</Buttons_in>
                      </Container_button_bar_in>
                    </Container_button_bar>
                  </TabPanel>

                  {/* จบหัวข้อข่าวจัดซื้อ/จัดจ้าง */}
                </Box>
              </Root_container2>

              {/* อินโฟกราฟิก */}
              <Group_content_side item xs={12} md={3}>
                <Grid item xs={12} sm={6} md={12}>
                  <Box_Container
                    display="flex"
                    flexDirection="column"
                    textAlign="center"
                    xs={6}
                    md={12}
                  >
                    <Box>
                      <Title_container container>
                        <span className="Info_title">Infographic</span>
                      </Title_container>

                      <Banner_Infographic />
                      {/* <Bottom_bar_container container></Bottom_bar_container> */}
                    </Box>
                  </Box_Container>
                </Grid>

                <Grid item xs={12} sm={6} md={12}>
                  <Box_Container
                    display="flex"
                    flexDirection="column"
                    textAlign="center"
                    xs={6}
                    md={12}
                  >
                    <Box>
                      <Banner_Contact />
                    </Box>
                  </Box_Container>
                </Grid>
              </Group_content_side>
              {/* จบอินโฟกราฟิก */}
            </Mid_container_big>
          </Main_Container>
        </Grid>
      </Background_container_2>

      {/* วีดีโอ */}
      <Background_container_3 container>
        <Grid item xs={12}>
          <Main_Container>
            <Grid container>
              <Grid item xs={12}>
                <Box display="flex" paddingBottom="35px" paddingTop="35px">
                  <News_topic>
                    <Line></Line>วิดีโอ
                  </News_topic>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box
                  display="flex"
                  justifyContent="center"
                  width="100%"
                  padding="20px"
                >
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/hMRtmooEoEk"
                    ></iframe>
                  </div>
                </Box>
              </Grid>
            </Grid>

            {/* ลิงค์ที่เกี่ยวข้อง */}
            {/* หัวข้อ */}
            <Grid container>
              <Box display="flex" paddingBottom="35px" paddingTop="35px"></Box>
            </Grid>
            {/* จบหัวข้อ */}
          </Main_Container>
        </Grid>
      </Background_container_3>

      {/* สไลด์แบร์นเนอร์ */}
      <Slide_container container>
        <Grid item xs={12}>
          <Main_Container>
            <Slide_container_sub item xs={12}>
              <Banner_Link />
            </Slide_container_sub>
          </Main_Container>
        </Grid>
      </Slide_container>
      {/* จบสไลด์แบร์นเนอร์ */}

      {/* จบลิงค์ที่เกี่ยวข้อง */}
      {/* จบ ส่วนกลาง */}

      {/* ส่วนท้ายเว็บไซต์ */}
      <Footer_Container container>
        <Content_container display="flex">
          <Main_Container colors="#f2f1f8">
            <Footter_container_cover container>
              <Content_footer item xs={12} md={6}>
                <Grid item xs={12} sm={6}>
                  <img
                    src="https://sv1.picz.in.th/images/2021/01/14/lQYa0k.png"
                    width="100%"
                  />
                </Grid>

                <Footer_address item xs={12}>
                  กรมพินิจและคุ้มครองเด็กและเยาวชน ศูนย์ราชการเฉลิมพระเกียรติ
                  อาคารราชบุรีดิเรกฤทธิ์ (อาคารเอ ชั้น ๕) เลขที่ ๑๒๐ หมู่ ๓
                  ถนนแจ้งวัฒนะ แขวงทุ่งสองห้อง เขตหลักสี่ กรุงเทพมหานคร ๑๐๒๑๐
                </Footer_address>

                <Footer_contact item xs={12}>
                  โทรศัพท์ : ๐-๒๑๔๑-๖๔๗๐
                </Footer_contact>

                <Footer_contact item xs={12}>
                  ติดต่อผู้ดูแลเว็บไซต์ : webadmin@modernsave.com
                </Footer_contact>

                <Footer_social item xs={12}>
                  <Social_container container xs={12}>
                    <Grid item xs={6} sm={1}>
                      <a href="https://www.facebook.com/pr.djop.moj">
                        <img
                          src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                          width="30px"
                        />
                      </a>
                    </Grid>
                    <Grid item xs={6} sm={1}>
                      <a href="https://www.youtube.com/channel/UCAtg2iG3o82yoO0zzyQkjnQ?view_as=subscriber">
                        <img
                          src="https://img.icons8.com/color/48/000000/youtube--v2.png"
                          width="30px"
                        />
                      </a>
                    </Grid>
                  </Social_container>
                </Footer_social>
              </Content_footer>

              <Content_footer2 item xs={12} md={6}>
                <Grid item xs={12}>
                  <Grid container>
                    <Icon_container item xs={6}>
                      <img src="http://www.djop.go.th/Djop/images/Djop/button-ipv6-small.png" />
                    </Icon_container>
                    <Icon_container item xs={6}>
                      <img src="http://www.djop.go.th/Djop/images/Djop/mict_twcag.png" />
                    </Icon_container>
                    <Icon_container item xs={6}>
                      <img src="http://www.djop.go.th/Djop/images/Djop/icon_W2_aa.jpg" />
                    </Icon_container>
                    <Icon_container item xs={6}>
                      <img src="http://www.djop.go.th/Djop/images/Djop/browser.png" />
                    </Icon_container>
                  </Grid>
                </Grid>
              </Content_footer2>
            </Footter_container_cover>
          </Main_Container>
        </Content_container>

        <Grid container>
          <Content_footer_2 item>
            © | กรมพินิจและคุ้มครองเด็กและเยาวชน
          </Content_footer_2>
        </Grid>
      </Footer_Container>
      {/* จบ ส่วนท้ายเว็บไซต์ */}
    </>
  )
}
export default Index

/** style components */

// ส่วนท้ายเว็บไซต์
const Footer_Container = styled(Grid)`
  background-color: #f2f1f8;
`
const Content_container = styled(Grid)`
  width: 100%;
  justify-items: center;
  padding: 25px 50px 0 50px;
`

const Content_footer = styled(Grid)`
  padding: 0 15px;
  margin-bottom: 16px;
  /* font-size: min(max(14px, 1.1vw), 26px) !important; */
  width: 100%;
`
const Content_footer2 = styled(Grid)`
  padding: 0 15px;
  margin-bottom: 16px;
  margin-top: 60px;
  width: 100%;
  display: flex;
  align-items: flex-end;
`
const Content_footer_2 = styled(Grid)`
  padding: 20px;
  font-size: 12px;
  color: #6c6a74;
  width: 100%;
  text-align: center;
  margin-top: 8px;
  border-top: 1px solid #dbd8e4;
`
const Footer_address = styled(Grid)`
  margin: 15px 0 8px 0;
  color: #6c6a74;
`
const Footer_contact = styled(Grid)`
  margin-bottom: 8px;
  color: #6c6a74;
`
const Footer_social = styled(Grid)`
  margin: 15px 0 0 0;
`
const Social_container = styled(Grid)`
  display: flex;
`
const Footter_container_cover = styled(Grid)`
  display: flex;
`
const Icon_container = styled(Grid)`
  text-align: center;
  margin-bottom: 13px;
`

// จบส่วนท้ายเว็บไซต์

// ส่วนหัวเว็บไซต์
const Headder_container = styled(Grid)`
  width: 100%;
  background-color: white;

  /* position:fixed; */
`
const Logo_container = styled(Grid)`
  img {
    width: 100%;
    height: auto;
    min-width: 50px;
    max-width: 110px;
  }
  /* padding-left:10%; */
`

{
  /* ส่วนของค้นหา */
}
const Search_container_big = styled(Grid)`
  margin-bottom: 10px;
`
const Search_container_1 = styled(Grid)`
  border-left: 1px solid #ffd369;
  border-right: 1px solid #ffd369;
  color: white;
  padding: 5px;
  text-align: center;
  font-size: min(max(8px, 1vw), 12px) !important;
  font-family: "Kanit";
`
const Search_container_3 = styled(Grid)`
  border-left: 2px solid #58595b;
  cursor: pointer;
`

const Search_container = styled(Grid)`
  background-color: #414042;
  padding: 10px;
`
const Bg_container = styled(Grid)`
  background-color: #414042;
`
const Bg_container2 = styled(Grid)`
  background-color: #ffd369;
`

{
  /* ส่วนของเปลี่ยนขนาดตัวอักษร*/
}
const Lang_Comp = styled(Grid)`
  background-color: #ffd369;
  padding: 15px;
`

const SiteMap_Comp = styled(Grid)`
  background-color: #343a40;
  cursor: pointer;
`
// ส่วนของเมนู
const Dropdown_menu_container = styled(Grid)`
  background-color: white;
`
const Home_icon = styled(Grid)`
  background-color: #343a40;
  padding: 20px;
  width: 100%;
  text-align: center;
  :hover {
    background-color: #ec524b;
    transition: 0.3s;
    cursor: pointer;
  }
`
const Title_menu = styled(Grid)`
  text-align: center;
`
const Title_menu_content = styled(Grid)`
  padding: 24px 5px;
  border-right: 1px solid #d1d3d4;
  font-family: "Kanit";
  :hover {
    color: #ec524b;
    transition: 0.3s;
    cursor: pointer;
  }
`

// ส่วนกลางเว็บไซต์

// หัวข้อสีเทา
const Title_bar_container = styled(Grid)`
  background-color: #ffffff;
  padding: 10px;
  box-shadow: rgba(58, 45, 45, 0.25) 0px 8px 16px;
  margin-bottom: 15px;
`
const Title_bar_text = styled(Grid)`
  padding: 10px;
  font-size: 24px;
  color: black;
`
const Title_bar_text2 = styled(Grid)`
  color: #ec524b;
  padding: 10px 0;
  font-size: 24px;
  font-weight: bold;
`
// จบหัวข้อสีเทา

// เนื้อหาย่อย

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
const Root_container2 = styled(Grid)`
  padding: 0 10px 0 10px;
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

  @keyframes jello-vertical {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    40% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    50% {
      -webkit-transform: scale3d(0.85, 1.15, 1);
      transform: scale3d(0.85, 1.15, 1);
    }
    65% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    75% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  :hover {
    border: 1px solid #f79a3c;
    background: none;
    color: #ec524b;
    transition: 0.3s;
    animation: jello-vertical 0.9s both;
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

  @keyframes jello-vertical {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    40% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    50% {
      -webkit-transform: scale3d(0.85, 1.15, 1);
      transform: scale3d(0.85, 1.15, 1);
    }
    65% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    75% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  :hover {
    border: 1px solid #f79a3c;
    background: none;
    color: #ec524b;
    transition: 0.3s;
    animation: jello-vertical 0.9s both;
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
const Buttons_in = styled(Box)`
  background-color: #f79a3c;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  bottom: 0;
  border: 1px solid #f79a3c;
  cursor: pointer;

  @keyframes jello-vertical {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    40% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    50% {
      -webkit-transform: scale3d(0.85, 1.15, 1);
      transform: scale3d(0.85, 1.15, 1);
    }
    65% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    75% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  :hover {
    border: 1px solid #f79a3c;
    background: none;
    color: #ec524b;
    transition: 0.3s;
    animation: jello-vertical 0.9s both;
  }
  :focus {
    outline: none;
  }
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

/* ข่าวย่อยเฟรมเล็ก */

const Container_subnews_container = styled(Grid)`
  @media only screen and (max-width: 576px) {
    .sb_container {
      padding: 0px;
    }
  }
`
const Subnews_container = styled(Grid)`
  padding: 0 10px;
`
const Sub_content = styled(Grid)`
  position: relative;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: all 0.3s;
    cursor: pointer;
  }
`
const Subnews_text = styled(Grid)`
  display: flex;
  flex-direction: column;
  bottom: 0;
  /* background-color:red; */
  padding: 7px;
`
const Description_date = styled(Grid)`
  color: #a7a9ac;
  font-size: 14px;
`
const Description_text = styled(Grid)`
  color: #ef4136;
  font-size: min(max(14px, 1.5vw), 16px) !important;
  overflow: hidden;
  height: 50px;
  position: relative;
`
const Subnews_text_container = styled(Grid)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  height: 33%;
  :hover {
    height: 100%;
    transition: all 0.2s linear;
    background-color: rgba(239, 65, 54, 0.9);
    :hover .Description_text_sb {
      color: white;
      padding: 10px 7px 0 7px;
      height: 170px;
    }
    :hover .sb_btn {
      visibility: visible;
    }
    :hover .Description_date_sb {
      padding: 7px;
      color: #f1f2f2;
    }
  }
`
const Subnews_btn_container = styled(Grid)`
  position: absolute;
  padding: 7px;
  bottom: 7px;
`
const Subnews_btn = styled.button`
  font-size: 16px;
  padding: 5px 20px;
  background-color: white;
  color: #ef4136;
  border: 1px solid white;
  border-radius: 5px;
  visibility: hidden;
  :hover {
    background: none;
    color: white;
    transition: all 0.2s linear;
  }
  :focus {
    outline: none;
  }
`

// ข่าวสาร
const News_type = styled(Grid)`
  color: white;
  background-color: #00a79d;
  padding: 3px 14px;
  border-radius: 5px;
  margin: 10px 0 !important;
  font-size: 12px;
`
const News_date = styled(Grid)`
  color: #808285;
  font-size: 14px;
  margin: 10px 0 !important;
`
const News_main = styled(Grid)`
  /* font-size: 28px; */
  font-size: min(max(16px, 1.5vw), 28px) !important;
  margin: 10px 0 !important;
`
const Container_button_bar = styled(Grid)`
  padding-top: 72px;
`
const Container_button_bar_in = styled(Grid)`
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
`

// วีดีโอ

// จบวีดีโอ

// ปฏิทิน
const Calendar = styled.div`
  .fc-daygrid-day-number {
    color: black;
  }
  .fc-col-header-cell-cushion {
    color: #ef4136;
  }
  .fc-toolbar-title {
    color: black;
    text-align: center;
  }
  .fc-view-harness-active {
    height: 392px !important;
  }
  .fc-toolbar-title {
    font-size: min(max(12px, 1.1vw), 18px) !important;
    padding: 3px;
  }
  .fc-button-primary {
    background: white;
    border: none;
  }
  .fc .fc-button-group > .fc-button:hover {
    background: white;
  }
  .fc-next-button {
    :focus {
      outline: none !important;
    }
  }
  .fc .fc-button:not(:disabled) {
    color: #939598;
  }
  .fc-today-button {
    background-color: none !important;
  }
  .fc-theme-standard td,
  .fc-theme-standard th {
    border: none;
  }
  .fc-theme-standard .fc-scrollgrid {
    border-left: none;
  }
  .fc-icon-chevron-left {
    color: black;
  }
  .fc-icon-chevron-right {
    color: black;
  }
  .fc-icon-chevron-left:hover {
    color: #535151;
  }
  .fc-icon-chevron-right:hover {
    color: #535151;
  }
  .fc-col-header-cell {
    padding:5px 0; 
    text-align: end;
  }
.fc-header-toolbar{
    margin-bottom: 0px !important;
  }
`
const Calendar_container = styled(Grid)`
  /* background: linear-gradient(
    180deg,
    rgba(35, 31, 32, 1) 30%,
    rgba(255, 255, 255, 0.7805497198879552) 70%
  ); */
  background: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`
const Sub_Calendar_container = styled(Grid)`
  padding: 0 10px;
`
const Next_button_container = styled.button`
  background: none;
  border: none;
  transition: all 0.3s;
  border-radius: 100%;
  padding: 3px 7px ;
  :focus {
    outline: none;
  }
  :hover {
    background: #ebe9e9;
  }
  :active{
    background: #cccccc;
  }
`

// อินโฟกราฟิก
const Group_content_side = styled(Grid)`
  /* background: red; */
  padding: 5px;
  text-align: -webkit-center;
`
const Box_Container = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`
const Title_container = styled(Grid)`
  background: linear-gradient(
    90deg,
    rgba(86, 171, 47, 1) 30%,
    rgba(168, 224, 99, 1) 70%
  );
  padding: 10px;
  border-radius: 10px 10px 0 0;
  margin-top: 10px;
  .Info_title {
    font-size: 20px;
    color: white;
    width: 100%;
  }
`

{
  /* สไลด์แบร์นเนอร์ */
}
const Slide_container_big = styled(Grid)`
  background: white;
`
const Slide_container = styled(Grid)`
  background: linear-gradient(
    0deg,
    rgba(242, 241, 248, 1) 10%,
    rgba(255, 255, 255, 1) 27%
  );
`
const Slide_container_sub = styled(Grid)`
  display: flex;
  padding: 50px 0 25px 0;
  border-bottom: 1px solid #dbd8e4;
`
// จบ Title slide
/* จบสไลด์แบร์นเนอร์ */

import React from "react"
import Router from "next/router"
import NProgress from "nprogress"
import { StylesProvider } from "@material-ui/core/styles"
import { createUploadLink } from "apollo-upload-client"
import { ApolloClient, from, InMemoryCache } from "apollo-boost"
import { appWithTranslation } from "../i18n"

import "antd/dist/antd.css"
import "react-clock/dist/Clock.css"
import "react-time-picker/dist/TimePicker.css"

import "react-datetime-picker/dist/DateTimePicker.css"
import "react-calendar/dist/Calendar.css"
import "react-clock/dist/Clock.css"


//calendar
import "@fullcalendar/common/main.css" // @fullcalendar/react imports @fullcalendar/common
import "@fullcalendar/daygrid/main.css" // @fullcalendar/timegrid imports @fullcalendar/daygrid
import "@fullcalendar/timegrid/main.css" // @fullcalendar/timegrid is a direct import

//react-slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "react-notifications/lib/notifications.css" //import notification

//infographic
import "styles/banner_info.css"
import "styles/banner_contact.css"
import "styles/banner_slide_big.css"

//nprogress
Router.events.on("routeChangeStart", (url) => {
  // console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

const httpLink = createUploadLink({
  uri: `/api/graphql`,
  credentials: "include",
  fetch,
})

const cache = new InMemoryCache() //memory cache

const MyApp = (props) => {
  const { Component, pageProps } = props
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    // <ProviderRedux store={store}>
    // {/* <ApolloProvider client={Client}> */}
    <StylesProvider injectFirst>
      <Component {...pageProps} />
    </StylesProvider>
    // {/* </ApolloProvider> */}
    // </ProviderRedux>
  )
}

export const getServerSideProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    pageProps
  }
}


export default MyApp

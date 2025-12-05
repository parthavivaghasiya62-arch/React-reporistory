
// import './adminassets/css/styles.css'
import { Provider } from "react-redux"
import store from './redux/store/store'
import "../styles/globals.css"
import '../public/adminAssets/assets/img/apple-touch-icon.png'
import '../public/adminAssets/assets/vendor/bootstrap/css/bootstrap.min.css'
import '../public/adminAssets/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../public/adminAssets/assets/vendor/boxicons/css/boxicons.min.css'
import '../public/adminAssets/assets/vendor/quill/quill.snow.css'
import '../public/adminAssets/assets/vendor/quill/quill.bubble.css'
import '../public/adminAssets/assets/vendor/remixicon/remixicon.css'
import '../public/adminAssets/assets/vendor/simple-datatables/style.css'
import '../public/adminAssets/assets/css/style.css'

import Head from "next/head"
import Script from "next/script"

// import "./assets/css/main.css"
function MyApp({ Component, pageProps }) {

  return (
    <>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp

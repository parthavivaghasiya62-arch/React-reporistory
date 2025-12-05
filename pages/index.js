import Head from 'next/head'
import Image from 'next/image'
import Footer from './frontendSide/layout/footer'
import Header from './frontendSide/layout/header'
import playImg from "./assets/img/Play.png"
import NewArrivals from './frontendSide/components/newArrivals'
import FirstSession from './frontendSide/components/firstSession'
import AboutUs from './frontendSide/components/aboutUs'
import FeaturedProducts from './frontendSide/components/featuredProducts'
import ClientReview from './frontendSide/components/clientReview'
import InstagramBanners from './frontendSide/components/instagramBanners'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        {/* =-================== FONT AWSOME LINK =-================== */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
        {/* ================= GOOGLE FONT LINK ================= */}
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet" />
        {/* <!-- ========= SLICK SWIPER LINK ========--> */}
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" />
        {/* ====== FLOWBIT LINK ====== */}
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
        <link href="img/favicon.ico" rel="icon" />
        {/* admin */}
        <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />

        {/* -- <!-- ========= CUSTOM CSS LINK ========--> */}
        <link rel="stylesheet" href="assets/css/style.css"></link>
        <script src='/script.js'></script>
        {/* ======================== admin side ======================== */}
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
        {/* -- <!-- ========= CUSTOM CSS LINK ========--> */}
        <link rel="stylesheet" href="assets/css/style.css"></link>
      </Head>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" strategy='lazyOnLoad' />
      <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" strategy='lazyOnLoad' />
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
      <Script src='/script.js' strategy='lazyOnLoad' />
      <Header />

      <FirstSession />
      <NewArrivals />
      <AboutUs />
      <FeaturedProducts />
      <ClientReview />
      <InstagramBanners />
      <Footer />

    </>
  )
}

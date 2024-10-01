import React from "react";
import TopAppBar from "../components/TopNav";
import WinterSaleBanner from "../components/Banner";
import AnimatedCollectionBanner from "../components/Types";
import ProductGallery from "../components/Product";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <TopAppBar />
      <WinterSaleBanner />
      <AnimatedCollectionBanner />
      <ProductGallery />
      <Footer />
    </div>
  );
}

export default Home;

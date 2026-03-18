import Navbar from "./components/Navbar";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import CoreBanner from "./components/CoreBanner";
import BuiltForFun from "./components/BuiltForFun";
import WhatsInTheBox from "./components/WhatsInTheBox";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import ToyaOS from "./components/ToyaOS";
import RelatedProducts from "./components/RelatedProducts";
import BlogPreview from "./components/BlogPreview";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero: Product Gallery + Info */}
        <section className="max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:grid lg:grid-cols-2 lg:gap-12 items-start">
          <div className="lg:sticky lg:top-20">
            <ProductGallery />
          </div>
          <ProductInfo />
        </section>

        <CoreBanner />
        <BuiltForFun />
        <WhatsInTheBox />
        <HowItWorks />
        <WhyChooseUs />
        <Reviews />
        <ToyaOS />
        <RelatedProducts />
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}

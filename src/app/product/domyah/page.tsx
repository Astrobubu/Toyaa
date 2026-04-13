import Navbar from "../../components/Navbar";
import ProductGallery from "../../components/ProductGallery";
import ProductInfo from "../../components/ProductInfo";
import CoreBanner from "../../components/CoreBanner";
import BuiltForFun from "../../components/BuiltForFun";
import WhatsInTheBox from "../../components/WhatsInTheBox";
import HowItWorks from "../../components/HowItWorks";
import WhyChooseUs from "../../components/WhyChooseUs";
import DomyahOS from "../../components/DomyahOS";
import RelatedProducts from "../../components/RelatedProducts";
import ParentalFeatures from "../../components/ParentalFeatures";
import SmallCompanyNotice from "../../components/SmallCompanyNotice";
import Footer from "../../components/Footer";

export default function DomyahProductPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="min-h-[calc(100vh-64px)] flex flex-col justify-between">
          {/* Hero: Product Gallery + Info */}
          <section className="flex-1 max-w-6xl w-full mx-auto px-4 lg:px-8 py-8 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="lg:sticky lg:top-20">
              <ProductGallery />
            </div>
            <ProductInfo />
          </section>

          <div className="w-full">
            <CoreBanner />
          </div>
        </div>
        
        <BuiltForFun />
        <WhatsInTheBox />
        <HowItWorks />
        <WhyChooseUs />
        <ParentalFeatures />
        <DomyahOS />
        <SmallCompanyNotice />
        <RelatedProducts />
      </main>
      <Footer />
    </>
  );
}

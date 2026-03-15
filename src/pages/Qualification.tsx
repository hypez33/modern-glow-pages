import Navbar from "@/components/Navbar";
import QualificationSection from "@/components/QualificationSection";
import FooterSection from "@/components/FooterSection";
import BackToTopButton from "@/components/BackToTopButton";

const Qualification = () => {
  return (
    <div className="min-h-screen bg-background neu-page">
      <Navbar />
      <QualificationSection standalone />
      <FooterSection />
      <BackToTopButton />
    </div>
  );
};

export default Qualification;

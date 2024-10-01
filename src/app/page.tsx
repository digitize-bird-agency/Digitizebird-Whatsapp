import { landingAdvantages } from "@/constants/data";
import Advantages from "../components/Common/Advantages";
import Brands from "./_components/Brands";
import CTA from "./_components/CTA";
import ECommerceStack from "./_components/ECommerceStack";
import HeroSection from "./_components/HeroSection";
import Ratings from "./_components/Ratings";
import SuccessStory from "../components/Common/SuccessStory";

export default function Home() {
  return (
    <main className="px-4 min-h-[calc(100vh-6.5rem-1px)]">
      <HeroSection />
      <Brands />
      <Advantages data={landingAdvantages} />
      {/* Todo: One autotype word is out of screen on mobile  */}
      <CTA />
      <SuccessStory imgSrc="/images/agencies/1.svg" subtitle="15% month-over-month sales increased" comment="We tried out Freshdesk and Zendesk before we discovered Digitize Bird. None of them gave us the kind of support MyAlice team is giving which is commendable." avatar="https://github.com/shadcn.png" ceoTitle="Nofal Khan" ceoSubtitle="Founder & CEO, RwandaMart" link="/" />
      <ECommerceStack />
      <Ratings />
    </main>
  );
}

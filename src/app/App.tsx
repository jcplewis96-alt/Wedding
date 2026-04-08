import { Hero } from "./components/Hero";
import { OurStory } from "./components/OurStory";
import { WeddingDetails } from "./components/WeddingDetails";
import { Schedule } from "./components/Schedule";
import { Gallery } from "./components/Gallery";
import { RSVP } from "./components/RSVP";
import { Travel } from "./components/Travel";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <OurStory />
      <WeddingDetails />
      <Schedule />
      <Gallery />
      <RSVP />
      <Travel />
      <Footer />
      <Toaster />
    </div>
  );
}

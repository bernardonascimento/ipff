import { Hero } from "@/components/sections/hero";
import { WelcomeVideo } from "@/components/sections/welcome-video";
import { ServiceTimes } from "@/components/sections/service-times";
import { About } from "@/components/sections/about";
import { LatestVideos } from "@/components/sections/latest-videos";
import { Leadership } from "@/components/sections/leadership";
import { Location } from "@/components/sections/location";
import { AgendaCta } from "@/components/sections/agenda-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WelcomeVideo />
      <ServiceTimes />
      <About />
      <LatestVideos />
      <Leadership />
      <Location />
      <AgendaCta />
    </>
  );
}

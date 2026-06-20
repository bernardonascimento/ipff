import { Hero } from "@/components/sections/hero";
import { ProximosEventos } from "@/components/sections/proximos-eventos";
import { ServiceTimes } from "@/components/sections/service-times";
import { About } from "@/components/sections/about";
import { Leadership } from "@/components/sections/leadership";
import { Location } from "@/components/sections/location";
import { AgendaCta } from "@/components/sections/agenda-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProximosEventos />
      <ServiceTimes />
      <Leadership />
      <Location />
      <AgendaCta />
    </>
  );
}

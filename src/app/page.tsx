
"use client";

import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      
            <Hero
              headline="Vende más, rápido y fácil con Webgo."
              subheadline="Creación de páginas web eficientes, optimizadas y enfocadas en rendimiento financiero."
              cta1="Transforma tu negocio hoy"
              cta2="Comienza tu éxito online"
            />

            <How
              step1Title="Inicia tu proyecto"
              step1Desc="Contacta a Webgo y comparte tus necesidades de negocio."
              step2Title="Optimización y diseño"
              step2Desc="Diseñamos una web optimizada y centrada en ventas."
              step3Title="Mejora tus ventas"
              step3Desc="Lanza tu sitio y empieza a ver resultados financieros."
            />
<Footer />
    </main>
  );
}
    
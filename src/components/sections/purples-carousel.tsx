"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * "Baralho" de fotos da banda: as imagens ficam empilhadas uma sobre a outra;
 * a de cima sai (sobe + gira + esvai) e a de baixo assume o topo, num ciclo
 * contínuo. Leve parallax ao mover o mouse. Respeita prefers-reduced-motion.
 */

const INTERVALO_MS = 3800;

/** Posição/estilo de cada carta conforme sua distância do topo (offset). */
function posicao(offset: number, total: number): React.CSSProperties {
  // Carta que acabou de sair do topo — desliza para cima/lado e some.
  if (offset === total - 1) {
    return {
      opacity: 0,
      zIndex: 50,
      transform: "translate3d(7%,-18%,0) scale(1.07) rotate(-7deg)",
    };
  }
  // Topo (ativa).
  if (offset === 0) {
    return {
      opacity: 1,
      zIndex: 40,
      transform: "translate3d(0,0,0) scale(1) rotate(0deg)",
    };
  }
  // Cartas empilhadas atrás (mostra até 2 espiando; o resto fica oculto atrás).
  const p = Math.min(offset, 3);
  return {
    opacity: offset <= 2 ? 1 : 0,
    zIndex: 40 - offset,
    transform: `translate3d(${p * 9}px, ${p * 12}px, 0) scale(${1 - p * 0.045}) rotate(${offset % 2 ? 3.5 : -3.5}deg)`,
  };
}

export function PurplesCarousel({ fotos }: { fotos: readonly string[] }) {
  const [atual, setAtual] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const total = fotos.length;

  const reduzido =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Troca automática do topo do baralho.
  useEffect(() => {
    if (reduzido || total < 2) return;
    const id = window.setInterval(
      () => setAtual((p) => (p + 1) % total),
      INTERVALO_MS,
    );
    return () => window.clearInterval(id);
  }, [reduzido, total]);

  // Parallax sutil: inclina o baralho conforme a posição do mouse.
  useEffect(() => {
    if (reduzido) return;
    const card = cardRef.current;
    if (!card) return;
    let frame = 0;
    const aoMover = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        card.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
        card.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
        card.style.setProperty("--tx", `${(x * 12).toFixed(1)}px`);
      });
    };
    window.addEventListener("mousemove", aoMover, { passive: true });
    return () => {
      window.removeEventListener("mousemove", aoMover);
      cancelAnimationFrame(frame);
    };
  }, [reduzido]);

  return (
    <div className="relative [perspective:1400px]">
      {/* Halo do gradiente da marca por trás do baralho */}
      <div
        aria-hidden
        className="animate-pp-glow absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_45%,var(--pp-magenta),transparent_70%)] opacity-55 blur-2xl"
      />

      <div
        ref={cardRef}
        className="relative aspect-square w-full transition-transform duration-300 ease-out will-change-transform [transform:rotateX(var(--rx,3deg))_rotateY(var(--ry,-7deg))_translateX(var(--tx,0))] [transform-style:preserve-3d]"
      >
        {fotos.map((src, i) => {
          const offset = (i - atual + total) % total;
          return (
            <div
              key={src}
              aria-hidden={offset !== 0}
              style={posicao(offset, total)}
              className="absolute inset-0 overflow-hidden rounded-[1.5rem] border border-white/10 shadow-2xl shadow-black/60 transition-all duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform motion-reduce:transition-none"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                priority={i === 0}
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

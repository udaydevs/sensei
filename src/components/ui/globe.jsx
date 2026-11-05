
"use client"

import { useEffect, useRef } from "react"
import createGlobe from "cobe"
import { useMotionValue, useSpring } from "motion/react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

const LIGHT_GLOBE_COLORS = {
  glowColor: [1,1,1],
}

const DARK_GLOBE_COLORS = {
  glowColor: [225 / 255, 213 / 255, 198 / 255],
}

const GLOBE_CONFIG = {
  width: 1200,
  height: 1200,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}) {
  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)

  const { resolvedTheme } = useTheme()

  const r = useMotionValue(0)

  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value

    if (canvasRef.current) {
      canvasRef.current.style.cursor =
        value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current

      pointerInteracting.current = clientX
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let phi = 0
    let width = 0

    const activeColors =
      resolvedTheme === "dark"
        ? DARK_GLOBE_COLORS
        : LIGHT_GLOBE_COLORS

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvas, {
      ...config,
      ...activeColors,
      width: width * 2,
      height: width * 2,

      onRender: (state) => {
        if (pointerInteracting.current === null) {
          phi += 0.005
        }

        state.phi = phi + rs.get()
        state.width = width * 2
        state.height = width * 2
      },
    })

    const animationFrame = requestAnimationFrame(() => {
      canvas.style.opacity = "1"
    })

    return () => {
      cancelAnimationFrame(animationFrame)
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, config, resolvedTheme])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[1400px] z-0",
        className
      )}
    >
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) => {
          updatePointerInteraction(e.clientX)
        }}
        onPointerMove={(e) => {
          updateMovement(e.clientX)
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerCancel={() => updatePointerInteraction(null)}
        onPointerLeave={() => updatePointerInteraction(null)}
        onTouchMove={(e) => {
          if (e.touches[0]) {
            updateMovement(e.touches[0].clientX)
          }
        }}
      />
    </div>
  )
}

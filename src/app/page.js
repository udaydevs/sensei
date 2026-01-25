"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import LinearProgress from '@mui/material/LinearProgress';
export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.push("/home")

    }, 3000);
  }, [router])

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden font-sans text-primary-black bg-white">
      <div className="pointer-events-none absolute inset-0 perspective-distant">
        <div
          className="absolute -inset-[10%] opacity-60
                     bg-[linear-gradient(to_right,#F0F5FF_1px,transparent_1px),linear-gradient(to_bottom,#F0F5FF_1px,transparent_1px)]
                     bg-size-[80px_80px]
                     transform-[rotateX(20deg)_rotateZ(-2deg)_translateY(-5%)]"
        />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 
                      h-300 w-300 
                      -translate-x-1/2 -translate-y-1/2 
                      transform-[translate(-50%,-50%)_rotateX(20deg)]">

        {[
          { size: 400, dot: "top-0 left-1/2 -translate-x-1/2" },
          { size: 700, dot: "top-1/4 right-0" },
          { size: 1000, dot: "bottom-1/4 left-0" },
        ].map(({ size, dot }, i) => (
          <div
            key={i}
            style={{ width: size, height: size }}
            className="absolute left-1/2 top-1/2 
                       -translate-x-1/2 -translate-y-1/2 
                       rounded-full border border-dashed border-accent-purple/20"
          >
            <span
              className={`absolute ${dot} h-1.5 w-1.5 rounded-full 
                          bg-accent-purple shadow-[0_0_10px_rgba(139,92,246,0.5)]`}
            />
          </div>
        ))}
      </div>
      <span
  className="pointer-events-none absolute inset-0 flex items-center justify-center
             select-none whitespace-nowrap
             text-[12vw] lg:text-[18rem] font-black tracking-tight
             bg-gray-50
             bg-clip-text text-transparent">
  読み込み中
</span>

      <main className="relative z-10 flex w-full flex-col items-center px-6">
        <div className="mb-12 flex flex-col items-center gap-4">
          <div
  className="flex h-16 w-16 items-center justify-center
             bg-primary rotate-45 rounded-2xl">
  <span className="text-white text-4xl font-black -rotate-45">
    学
  </span>
</div>
          <h1 className="text-4xl md:text-5xl font-black font-mono tracking-[0.2em]">
            SENSEI
          </h1>
        </div>
        <div className="flex w-full max-w-sm flex-col items-center">
          <div className="relative mb-4 h-0.5 w-full overflow-hidden rounded bg-accent-purple/10">
            <LinearProgress color="#b89bf2" />
          </div>

          <div className="mb-10 flex w-fit items-center justify-between">
            <span className="text-xs font-bold tracking-widest text-accent-purple">
              Loading
            </span>
          </div>

          <p className="max-w-md text-center text-[11px] md:text-xs font-medium leading-relaxed tracking-wide text-gray-500">
            <span className="mr-1 w-full font-bold text-accent-purple">Tip:</span>
            Particles like は and が define the subject and topic, forming the
            foundation of Japanese sentence structure.
          </p>
        </div>
      </main>
    </div>
  );
}

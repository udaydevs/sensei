const testimonials = [
  {
    image: "/assets/aarav.png",
    name: "Aarav S.",
    role: "Beginner Learner",
    text: "Sensei helped me finally understand particles and sentence structure. Japanese feels logical now, not confusing.",
  },
  {
    image: "/assets/Neha.png",
    name: "Neha R.",
    role: "JLPT N4 Student",
    text: "The word-by-word breakdowns are amazing. I stopped memorizing and started understanding.",
  },
  {
    image: "/assets/kento.png",
    name: "Kento M.",
    role: "Working Professional",
    text: "Romaji pronunciation helped me gain confidence speaking. I can finally read Japanese aloud correctly.",
  },
  {
    image: "/assets/sara.png",
    name: "Sara L.",
    role: "Anime Fan",
    text: "Sensei explains context so well. I now understand dialogue instead of just translating it.",
  },
];

const half = [...testimonials, ...testimonials];
const track = [...half, ...half];

export default function Testimonials() {
  return (
    <div className="w-full min-h-screen bg-background py-16 md:py-24 flex justify-center">
      <div className="w-full">

        <div className="flex flex-col items-center mb-14 text-center">
          <div className="flex justify-center py-1 items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#655A7C">
              <path d="M185-80q-17 0-29.5-12.5T143-122v-105q0-90 56-159t144-88q-40 28-62 70.5T259-312v190q0 11 3 22t10 20h-87Zm147 0q-17 0-29.5-12.5T290-122v-190q0-70 49.5-119T459-480h189q70 0 119 49t49 119v64q0 70-49 119T648-80H332Zm148-484q-66 0-112-46t-46-112q0-66 46-112t112-46q66 0 112 46t46 112q0 66-46 112t-112 46Z"/>
            </svg>
            <p className="text-sm font-semibold text-ring">
              TESTIMONIAL
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ring mb-3">
            Trusted by Japanese Learners Worldwide
          </h2>

          <p className="text-ring max-w-2xl">
            Thousands of learners are improving their Japanese faster with
            Sensei’s AI-powered guidance.
          </p>
        </div>

        <div
          className="marquee w-full overflow-hidden py-8"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="animate-marquee flex w-max">
            {track.map((t, i) => (
              <div key={i} className="w-80 shrink-0 mr-6">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function TestimonialCard({ name, role, text, image }) {
  return (
    <div className="relative h-full flex flex-col bg-white border border-[#655A7C]/30 rounded-3xl p-6 shadow-sm cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:z-10 hover:shadow-xl">
      <div className="mb-3 text-yellow-400">★★★★★</div>

      <p className="text-[#1c1d26] text-sm mb-4 leading-relaxed">
        “{text}”
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <img
          src={image}
          alt={`${name} profile`}
          className="w-16 h-16 rounded-full object-cover border-2 border-[#655A7C]/30 shadow-sm"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-[#655A7C]">{name}</p>
          <p className="text-sm text-[#5d5858]">{role}</p>
        </div>
      </div>
    </div>
  );
}
export default function Testimonials() {
  return (
    <div className="w-full min-h-screen bg-[#f8f9fb] py-16 md:py-24 flex justify-center">
      <div className="w-[90%] md:w-3/4">

        <div className="flex flex-col items-center mb-14 text-center">
          <div className="flex justify-center py-1 items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#5d5858">
              <path d="M185-80q-17 0-29.5-12.5T143-122v-105q0-90 56-159t144-88q-40 28-62 70.5T259-312v190q0 11 3 22t10 20h-87Zm147 0q-17 0-29.5-12.5T290-122v-190q0-70 49.5-119T459-480h189q70 0 119 49t49 119v64q0 70-49 119T648-80H332Zm148-484q-66 0-112-46t-46-112q0-66 46-112t112-46q66 0 112 46t46 112q0 66-46 112t-112 46Z"/>
            </svg>
            <p className="text-sm font-semibold text-[#5d5858]">
              TESTIMONIAL
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c1d26] mb-3">
            Trusted by Japanese Learners Worldwide
          </h2>

          <p className="text-[#5d5858] max-w-2xl">
            Thousands of learners are improving their Japanese faster with
            Sensei’s AI-powered guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">

          <div className="flex flex-col gap-6">
            <TestimonialCard
              name="Aarav S."
              role="Beginner Learner"
              text="Sensei helped me finally understand particles and sentence structure.
              Japanese feels logical now, not confusing."
            />
            <TestimonialCard
              name="Neha R."
              role="JLPT N4 Student"
              text="The word-by-word breakdowns are amazing.
              I stopped memorizing and started understanding."
            />
          </div>

          <div className="hidden lg:block rounded-3xl overflow-hidden bg-white shadow-sm">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                alt="Student testimonial"
                className="w-full h-105 object-cover"
              />
              <button className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm">
                ▶ Watch Story
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <TestimonialCard
              name="Kento M."
              role="Working Professional"
              text="Romaji pronunciation helped me gain confidence speaking.
              I can finally read Japanese aloud correctly."
            />
            <TestimonialCard
              name="Sara L."
              role="Anime Fan"
              text="Sensei explains context so well.
              I now understand dialogue instead of just translating it."
            />
          </div>

        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ name, role, text }) {
  return (
    <div className="bg-white border rounded-3xl p-6 shadow-sm">
      <div className="mb-3">
        {"★★★★★".split("").map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>
      <p className="text-[#1c1d26] text-sm mb-4 leading-relaxed">
        “{text}”
      </p>
      <div className="text-sm">
        <p className="font-semibold">{name}</p>
        <p className="text-[#5d5858]">{role}</p>
      </div>
    </div>
  );
}

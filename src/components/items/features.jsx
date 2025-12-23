import { Button } from "../ui/button"
import { useState } from "react"

const faqs = [
  {
    question: "How does Sensei help me learn Japanese?",
    answer:
      "Sensei explains Japanese step by step with translations, pronunciation, grammar breakdowns, and real usage so you truly understand the language.",
  },
  {
    question: "Do I need prior knowledge of Japanese?",
    answer:
      "No. Sensei is designed for complete beginners as well as advanced learners. You can start using English or Japanese.",
  },
  {
    question: "Does Sensei include pronunciation help?",
    answer:
      "Yes. Every Japanese sentence includes English pronunciation (romaji) so you can read and speak with confidence.",
  },
  {
    question: "Can I learn grammar without memorizing rules?",
    answer:
      "Absolutely. Sensei focuses on understanding grammar naturally through examples and sentence breakdowns.",
  },
  {
    question: "Is Sensei free to use?",
    answer:
      "Sensei offers free access to core features, with optional advanced tools for deeper learning.",
  },
]

export default function Features() {
  const [open, setOpen] = useState(null)

  return (
    <section className="w-full bg-white flex flex-col items-center px-4">

      <div className="w-full max-w-5xl flex flex-col items-center pt-16 md:pt-24 mb-12 text-center">
        <p className="text-sm md:text-lg text-[#5d5858] font-semibold mb-2">
          FEATURES
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1c1d26] mb-3">
          All the tools you need to learn Japanese
        </h2>

        <p className="text-base md:text-lg text-[#5d5858] max-w-2xl">
          Empowering you with intelligent features to simplify learning Japanese
          and help you communicate with confidence naturally.
        </p>
      </div>

      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6 mb-12">
        <div className=" md:w-2/5 border rounded-3xl p-6 flex flex-col">
          <div className="flex justify-center mb-4">
            <img
              className="h-40 md:h-48 object-contain"
              src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4766.jpg"
              alt="Word Breakdown"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Word-by-Word Breakdown
          </h3>
          <p className="text-[#5d5858] text-sm md:text-base">
            Understand sentences with clear word and particle breakdowns that
            make complex grammar easy.
          </p>
        </div>

        <div className="md:w-3/5 border rounded-3xl p-6 flex flex-col">
          <div className="flex justify-center mb-4">
            <img
              className="h-44 md:h-56 object-contain"
              src="https://img.freepik.com/free-vector/ai-powered-language-learning-illustration_23-2149321922.jpg"
              alt="AI Tutor"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            AI-Powered Japanese Understanding
          </h3>
          <p className="text-[#5d5858] text-sm md:text-base max-w-lg">
            Learn Japanese with an intelligent tutor that explains meaning,
            context, and usage so you can think naturally in Japanese.
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl flex flex-col justify-between md:flex-row gap-6 mb-16">
        <div className="md:w-3/5 border rounded-3xl p-6 flex flex-col">
          <div className="flex justify-center mb-4">
            <img
              className="h-44 md:h-56 object-contain"
              src="https://img.freepik.com/free-vector/online-education-concept_52683-36266.jpg"
              alt="Pronunciation"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Pronunciation with Romaji
          </h3>
          <p className="text-[#5d5858] text-sm md:text-base max-w-lg">
            Every sentence includes English pronunciation so you know exactly
            how to speak Japanese with confidence.
          </p>
        </div>

        <div className="md:w-2/5 border rounded-3xl p-6 flex flex-col">
          <div className="flex justify-center mb-4">
            <img
              className="h-40 md:h-48 object-contain"
              src="https://img.freepik.com/free-vector/learning-languages-concept_23-2148620772.jpg"
              alt="Grammar"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Simple Grammar Notes
          </h3>
          <p className="text-[#5d5858] text-sm md:text-base">
            Clear explanations that help you understand how Japanese grammar
            really works.
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl right-0 flex justify-between flex-col md:flex-row gap-10 mb-24">
        <div className="md:w-2/5">
          <p className="text-sm font-semibold text-[#5d5858] mb-4">FAQ</p>
          <h3 className="text-3xl md:text-5xl font-bold text-[#1c1d26] mb-4">
            Everything you need to know
          </h3>
          <p className="text-lg text-[#5d5858] mb-6">
            Still have a question? Reach our customer service.
          </p>
          <Button className="bg-black px-6 py-3 font-bold text-white rounded-xl">
            Start learning
          </Button>
        </div>

        <div className="md:w-2/5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b py-4 cursor-pointer"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-base md:text-lg font-medium text-[#1c1d26]">
                  {faq.question}
                </h3>

                <span
                  className={`p-2 border rounded-full transition-transform duration-300
                    ${open === index ? "rotate-45" : ""}
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 -960 960 960">
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                  </svg>
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300
                  ${open === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}
                `}
              >
                <p className="text-[#5d5858] text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

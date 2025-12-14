export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0c10] text-[#b5b7c4] pt-20">
      <div className="w-4/5 md:w-3/4 mx-auto">

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold font-sans text-white mb-4">
              Ready to master Japanese?
            </h2>
            <p className="text-[#9ca3af] mb-6">
              Learn Japanese naturally with an AI Sensei that explains meaning,
              grammar, and real usage — not just translations.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:opacity-90 transition">
                Get Started
              </button>
              <button className="px-6 py-3 border border-[#2a2b32] rounded-full text-sm hover:bg-[#15161b] transition">
                Explore Features
              </button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-16 border-b border-[#1c1d26]">

          {/* Brand */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sensei</h3>
            <p className="text-sm leading-relaxed">
              Your intelligent Japanese tutor for understanding, not memorizing.
            </p>
          </div>

          {/* Product */}
          <FooterColumn
            title="Product"
            links={[
              "Features",
              "How it Works",
              "Pricing",
              "Updates"
            ]}
          />

          {/* Learning */}
          <FooterColumn
            title="Learning"
            links={[
              "Grammar Help",
              "Sentence Breakdown",
              "Pronunciation",
              "JLPT Prep"
            ]}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={[
              "About",
              "Blog",
              "Careers",
              "Contact"
            ]}
          />

          {/* Resources */}
          <FooterColumn
            title="Resources"
            links={[
              "Help Center",
              "FAQs",
              "Community",
              "System Status"
            ]}
          />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-[#7c7f8a]">
          <p>© {new Date().getFullYear()} Sensei. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

/* Reusable Column */
function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {links.map((link, i) => (
          <li key={i}>
            <a href="#" className="hover:text-white transition">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

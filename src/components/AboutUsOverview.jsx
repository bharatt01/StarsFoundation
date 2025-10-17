export default function AboutUsOverview() {
  return (
    <section className="max-w-7xl mx-auto mb-20 font-sans text-[#0757a0] px-4 sm:px-6 lg:px-8">
      {/* Banner Image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl mb-12 sm:mb-16">
        <img
          src="/images/about-us.jpg"
          alt="Community support by Stars Foundation"
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0757a0]/80 via-transparent to-transparent rounded-3xl" />
      </div>

      {/* Text Content */}
      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 md:p-20 max-w-4xl mx-auto leading-relaxed font-medium space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg max-w-xl mx-auto text-center sm:text-left">
          Discover <span className="text-[#9ac531]">About Us</span>
        </h1>

        <p className="text-base sm:text-lg">
          <strong>Stars Foundation</strong> was established on{" "}
          <span className="font-semibold">28th May 2018</span> under the{" "}
          <em>Trust Registration Act 1882</em>. We are a national-level trust recognized under{" "}
          <span className="font-semibold">80G &amp; 12A</span>. Founded with the passion of{" "}
          <q>Devotion to the Nation</q> and vision of a <q>prosperous Nation</q>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#9ac531]">Our Focus</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
              <li>Poverty Alleviation in India</li>
              <li>Child Development &amp; Education for Poor &amp; Street Children</li>
              <li>Women Empowerment &amp; Skill Development</li>
              <li>Health Programs &amp; Consumer Awareness</li>
              <li>Environment Protection &amp; Rural Development</li>
              <li>Support for Elderly Care &amp; Slum Development</li>
              <li>Livelihood Programs &amp; More</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0757a0]">Our Belief</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Every individual deserves a <strong>worthy, meaningful, and dignified life</strong>, aligned with Article 21 (Right to life and personal liberty) of the Indian Constitution. Despite being the world's second most populous country and a large economy, India still faces major social hurdles that we are dedicated to overcoming.
            </p>
          </div>
        </div>

        <blockquote className="border-l-8 border-[#9ac531] pl-6 italic text-lg sm:text-xl font-semibold text-[#0757a0] shadow-md bg-[#f0f9e8] rounded-xl p-6 max-w-2xl mx-auto">
          “You have to dream before the dream comes true.”<br />
          — Honorable former President Dr. APJ Abdul Kalam
        </blockquote>

        <p className="text-base sm:text-lg">
          Our initiatives include arranging meals, tuition, skill development placements, health checkups, plantation drives, counseling, and numerous programs aimed at societal and environmental betterment.
        </p>

        <p className="text-base sm:text-lg">
          We remain adaptive to society’s changing needs, encouraging all to join us in making a meaningful difference. Every donation, no matter how small, supports underprivileged children and communities.
        </p>

        <p className="text-base sm:text-lg">
          Join us to help educate poor children in Delhi NCR &amp; India, support slum rehabilitation, elderly care, and empower women through your valuable contributions.
        </p>
      </div>
    </section>
  );
}

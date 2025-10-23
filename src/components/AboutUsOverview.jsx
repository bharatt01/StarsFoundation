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
             <p className="text-base sm:text-lg">
We are the best NGO in India. We endeavor for holistic growth of the Nation and its people. We
are the best Social Organization in India. Support by Donate to NGO or Donate in India. We
Mainly focused on poverty in India, Child Development, Women Empowerment, Skill
Development, Education for poor &amp; Street Children, Health programs, Environment protection,
Consumer awareness, Elderly care, Rural development programs, Slum development, Donate
for Livelihood, etc. Donate to India’s best NGO and support development. At Stars, we believe
that each and every person is entitled to a worthy, meaningful, and dignified life just as
mentioned under Article 21 (Right to life and personal liberty) of the Indian constitution.
The bitter factor is that yet being a country with the second most population in the world and
one of the largest economies, India is still suffering from issues like abject poverty, many social
evils, educational backwardness, environment degradation, and health, etc and to overcome
these hurdles to the development of we serve our Nation.
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
          “You have to dream before the dream come true” – we dream of a
stronger and developed India with equality, peace, brotherhood, and a nation where all its
people get to live a quality life.”<br />
          — Honorable former President Dr. APJ Abdul Kalam
        </blockquote>

        <p className="text-base sm:text-lg">
So far Stars Foundation has been contributing all its efforts towards the fulfillment of this
dream by arranging meals and tuitions for the poor and underprivileged, organizing placement
link skill development programs and placements driven for youth, organizing health checkups,
plantation, and environment awareness programs, conducting counseling on social issues and
many more programs for the betterment of the society and nature too!
        </p>

        <p className="text-base sm:text-lg">
          We remain adaptive to society’s changing needs, encouraging all to join us in making a meaningful difference. Every donation, no matter how small, supports underprivileged children and communities. We encourage everyone to join us in our efforts to make a difference. We invite you to donate
to our cause, regardless of how small the amount may be. Your contribution will help us in
supporting underprivileged children and bringing them a better future.
        </p>
 <p className="text-base sm:text-lg">
We have various social causes and activities that you can be a part of. You can donate to
education, or donate for poor child education in Delhi NCR &amp; India. We also encourage you to
donate to slum children, donate to poor children, and donate to old age homes.
Our organization also works towards women’s empowerment, health, environment, consumer
awareness, and cancer patients. We request you to donate and support these types of causes,
as each contribution counts towards making a significant impact.
</p>
        <p className="text-base sm:text-lg">
Together, let us make a positive difference in society. Visit our website to donate and
contribute to our cause. Join us in our mission to make our nation a better place for everyone.
        </p>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0757a0] text-white pt-16 pb-8 px-6 md:px-20 mt-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* LOGO & BRAND */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="StarFoundation logo"
              className="w-14 h-14 rounded bg-white p-2 drop-shadow"
            />
            <span className="font-extrabold text-3xl tracking-tight text-[#9ac531] drop-shadow-sm">StarFoundation</span>
          </div>
          <p className="text-base text-white/80 mt-4 font-medium max-w-xs leading-relaxed">
            Empowering communities through clean water, education, and health. Join us in making a sustainable impact.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-[#9ac531] uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-3 text-base font-semibold">
            {[
              {label: 'Home', href:'/'},
              {label: 'About', href:'#about'},
              {label: 'Projects', href:'#projects'},
              {label: 'Stories', href:'#stories'},
              {label: 'Join Us', href:'#join'},
              {label: 'Donate', href:'#donate'},
            ].map(link => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-[#9ac531] transition">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT & SOCIALS */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-[#9ac531] uppercase tracking-wider">Contact</h3>
          <ul className="text-base space-y-2 font-semibold">
            <li>
              Phone: <a href="tel:+917678414989" className="underline hover:text-[#9ac531]">+91 7678414989</a>
            </li>
            <li>
              Email: <a href="mailto:starsfoundation2018@gmail.com" className="underline hover:text-[#9ac531]">starsfoundation2018@gmail.com</a>
            </li>
          </ul>
          <div className="flex gap-5 mt-6">
            <a href="https://instagram.com/starfoundation" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#9ac531] transition">
              {/* Instagram */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
            </a>
            <a href="https://facebook.com/starfoundation" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#9ac531] transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.656 9.82v-6.93h-3.34v-2.89h3.34v-2.2c0-3.3 1.982-5.116 5.02-5.116 1.454 0 2.975.26 2.975.26v3.273h-1.676c-1.652 0-2.17 1.036-2.17 2.1v2.683h3.687l-.59 2.892h-3.097v6.93A10 10 0 0022 12z" />
              </svg>
            </a>
            <a href="https://twitter.com/starfoundation" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#9ac531] transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.59.58-2.46.69a4.29 4.29 0 001.88-2.37 8.494 8.494 0 01-2.71 1.03 4.27 4.27 0 00-7.27 3.89A12.11 12.11 0 013 4.8a4.27 4.27 0 001.32 5.7 4.23 4.23 0 01-1.93-.54v.05a4.27 4.27 0 003.43 4.18 4.3 4.3 0 01-1.92.07 4.27 4.27 0 003.99 2.97A8.57 8.57 0 012 19.54 12.09 12.09 0 008.29 21c7.547 0 11.675-6.256 11.675-11.675 0-.18-.004-.355-.012-.53A8.348 8.348 0 0022.46 6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px my-8 bg-gradient-to-r from-[#9ac531]/60 via-white/20 to-[#9ac531]/60 max-w-7xl mx-auto" />

      {/* Bottom copyright */}
      <div className="max-w-7xl mx-auto text-center text-white/70 text-xs md:text-sm font-medium tracking-wide pt-2">
        © {new Date().getFullYear()} StarFoundation. All rights reserved.
      </div>
    </footer>
  );
}

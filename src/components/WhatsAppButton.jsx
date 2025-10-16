import { useState } from "react";

export default function WhatsAppButton() {
  const phoneNumber = "+91 7678414989";
  // const email = "example@example.com"; // Replace with your email
  const prefilledMsg = encodeURIComponent("Hello! I would like to know more about StarFoundation.");

  // State for press effect
  const [isPressed, setIsPressed] = useState(false);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${prefilledMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        type="button"
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        className={`
          flex items-center justify-center
          w-14 h-14
          rounded-full shadow-lg
          bg-[#25D366] hover:bg-[#1ebc59]
          transition-transform duration-200 ease-in-out
          focus:outline-none focus:ring-4 focus:ring-[#25D366]/40
          ${isPressed ? "scale-110" : "scale-100"}
          hover:scale-110
        `}
      >
        {/* WhatsApp SVG */}
        <svg
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path
            d="M16 3C9.394 3 4 8.394 4 15c0 2.621.872 5.067 2.47 7.07l-1.575 4.872a1 1 0 0 0 1.252 1.251l4.875-1.574A11.954 11.954 0 0 0 16 27c6.606 0 12-5.394 12-12s-5.394-12-12-12zm0 22a9.956 9.956 0 0 1-5.152-1.451 1 1 0 0 0-.557-.141l-3.07.991.995-3.065a1 1 0 0 0-.136-.772A9.969 9.969 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm3.809-7.887c-.209-.104-1.238-.611-1.43-.683-.192-.071-.333-.104-.474.104-.142.208-.547.681-.672.82-.124.139-.248.157-.457.052-.208-.104-.878-.323-1.674-1.03-.619-.55-1.038-1.229-1.162-1.437-.123-.208-.013-.321.092-.425.094-.093.208-.243.312-.364a.394.394 0 0 0 .052-.405c-.052-.104-.474-1.142-.649-1.565-.171-.411-.345-.355-.474-.361-.122-.005-.26-.006-.398-.006-.142 0-.374.053-.571.255-.197.202-.757.739-.757 1.8 0 1.06.774 2.087.882 2.23.108.142 1.519 2.324 3.683 3.171.507.204.902.326 1.212.417.509.145.973.124 1.339.075.408-.056 1.237-.506 1.414-.995.177-.487.177-.905.124-.995-.053-.09-.19-.144-.4-.249z"
            fill="#fff"
          />
        </svg>
      </button>
    </a>
  );
}

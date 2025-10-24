import { useState } from "react";
import StoryModal from "./StoryModal";
import { BookOpen, HeartHandshake, GraduationCap, Users } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "From Streets to School",
    author: "Anjali (Changed Name)",
    icon: <GraduationCap className="w-14 h-14 text-[#0757a0]" />,
    excerpt:
      "An inspiring journey from life on the streets to achieving academic success through Stars Foundation’s support.",
    full: "Anjali was born into poverty ... [full inspirational story here]",
  },
  {
    id: 2,
    title: "A New Life for Suresh",
    author: "Suresh (Changed Name)",
    icon: <HeartHandshake className="w-14 h-14 text-[#0757a0]" />,
    excerpt:
      "Suresh found new purpose and hope after receiving life-changing opportunities through our rehabilitation program.",
    full: "Suresh's life changed when ... [full inspirational story here]",
  },
  {
    id: 3,
    title: "Empowering Women, One Skill at a Time",
    author: "Priya (Changed Name)",
    icon: <Users className="w-14 h-14 text-[#0757a0]" />,
    excerpt:
      "Vocational training helped Priya gain confidence, skills, and independence, transforming her community role.",
    full: "Through the skill development ... [full inspirational story here]",
  },
  {
    id: 4,
    title: "Books Beyond Boundaries",
    author: "Rahul (Changed Name)",
    icon: <BookOpen className="w-14 h-14 text-[#0757a0]" />,
    excerpt:
      "Education opened doors for Rahul to dream beyond limitations and build a new future.",
    full: "Rahul's transformation ... [full inspirational story here]",
  },
];

export default function StoriesGrid() {
  const [modalStory, setModalStory] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0757a0]">
        Inspirational Stories
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <button
            key={story.id}
            onClick={() => setModalStory(story)}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden text-left transition transform hover:-translate-y-1"
          >
            {/* Icon section */}
            <div className="flex items-center justify-center bg-gradient-to-r from-[#0757a0]/10 to-[#9ac531]/10 py-10">
              <div className="bg-white p-4 rounded-full shadow-md group-hover:scale-110 transition">
                {story.icon}
              </div>
            </div>

            {/* Text section */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#9ac531] mb-2">
                {story.title}
              </h3>
              <p className="text-[#0757a0] font-semibold mb-1">
                {story.author}
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                {story.excerpt}
              </p>
            </div>
          </button>
        ))}
      </div>

      {modalStory && (
        <StoryModal story={modalStory} onClose={() => setModalStory(null)} />
      )}
    </section>
  );
}

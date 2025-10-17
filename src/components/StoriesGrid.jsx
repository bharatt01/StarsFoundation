import { useState } from "react";
import StoryModal from "./StoryModal";

const stories = [
  {
    id: 1,
    title: "From Streets to School",
    author: "Anjali Sharma",
    image: "/stories/anjali.jpg",
    excerpt: "Anjali's journey from childhood on the streets to excelling in her studies with the support of Stars Foundation.",
    full: "Anjali was born into poverty ... [full inspirational story here]",
  },
  {
    id: 2,
    title: "A New Life for Suresh",
    author: "Suresh Jadhav",
    image: "/stories/suresh.jpg",
    excerpt: "Suresh overcame incredible odds to build a brighter future for himself and his family.",
    full: "Suresh's life changed when ... [full inspirational story here]",
  },
  {
    id: 3,
    title: "Empowering Women, One Skill at a Time",
    author: "Priya Kumari",
    image: "/stories/priya.jpg",
    excerpt: "Priya shares how vocational training brought confidence and independence.",
    full: "Through the skill development ... [full inspirational story here]",
  },
  // Add more stories as desired...
];

export default function StoriesGrid() {
  const [modalStory, setModalStory] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-8 md:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <button
            key={story.id}
            onClick={() => setModalStory(story)}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden text-left transition"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-44 object-cover transition group-hover:scale-105"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#9ac531] mb-2">{story.title}</h3>
              <p className="text-[#0757a0] font-semibold mb-1">{story.author}</p>
              <p className="text-gray-700 text-base">{story.excerpt}</p>
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

import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Godfrey Lebo",
    src: "/godfrey.jpeg",
    profile: "/emori.jpeg",
  },
  {
    name: "David Okoruwa",
    src: "/david-src.jpg",
    profile: "/david-profile.jpg",
  },
  {
    name: "Frankline Ukpata",
    src: "/frankline-src.jpg",
    profile: "/frankline-profile.jpg",
  },
  {
    name: "Ahmed Sani",
    src: "/ahmed-src.jpg",
    profile: "/ahmed-profile.jpg",
  },
  {
    name: "Michael Enyam",
    src: "/mike-src.jpg",
    profile: "/mike-profile.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map(({ name, src, profile }) => (
        <StoryCard key={src} name={name} src={src} profile={profile} />
      ))}
    </div>
  );
}

export default Stories;

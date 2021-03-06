import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  { src: "/domeremember-profile.jpg", name: "Domeremember Enya" },
  { src: "/hosbert-profile.jpg", name: "Hosbert Eze" },
  { src: "/joe-profile.jpg", name: "Joseph Upper" },
  { src: "/francis-profile.jpg", name: "Francis Ekpen" },
  { src: "/godwin-profile.jpg", name: "Godwin Asuquo" },
  { src: "/stella-profile.jpg", name: "Thomas Stella" },
  { src: "/joro-profile.jpg", name: "Joro Winterfell" },
  
 
];

function Widgets() {
  return <div className="hidden lg:flex flex-col w-60 p-2 t-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
          <h2 className="text-xl">Contacts</h2>
          <div className="flex space-x-2">
              <VideoCameraIcon className="h-6"/>
              <SearchIcon className="h-6"/>
              <DotsHorizontalIcon className="h-6" />
          </div>
      </div>
      {contacts.map(contact=>(
          <Contact key={contact.src} src={contact.src} name={contact.name}/>
      ))}
  </div>;
}

export default Widgets;

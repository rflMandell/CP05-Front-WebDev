import { Icon } from "@iconify/react";
import FakeUser from "./FakeUser";

const initialUsers = [
  {
    name: "ThéodoreDa Silva",
    username: "sadswan752",
    email: "theodore.dasilva@example.com",
    urlPhoto: "https://randomuser.me/api/portraits/men/75.jpg" 
  },
  {
    name: "OswaldoLaureano",
    username: "redcat716",
    email: "oswaldo.laureano@example.com",
    urlPhoto: "https://randomuser.me/api/portraits/men/10.jpg" 
  },
  {
    name: "SoniaGalván",
    username: "greenbird769",
    email: "sonia.galvan@example.com",
    urlPhoto: "https://randomuser.me/api/portraits/women/71.jpg" 
  },
  {
    name: "AlexBowman",
    username: "ticklishgoose276",
    email: "alex.bowman@example.com",
    urlPhoto: "https://randomuser.me/api/portraits/men/83.jpg" 
  },
  {
    name: "GülEkici",
    username: "brownsnake340",
    email: "gul.ekici@example.com",
    urlPhoto: "https://randomuser.me/api/portraits/women/83.jpg"
  }
];

function App() {
  return (
    <>
      <div className="flex items-center gap-2 text-xl m-2 p-2 bg-gray-200 rounded w-120">
        <Icon icon="streamline:class-lesson-solid" className="text-2xl"/>
        <span className="text-lg font-bold">CP5 - Webdev</span>
      </div>
      <div className="border p-2 rounded m-2 w-120">
        <div className="font-bold">
          Fake users list
        </div>
        <hr className="my-1" />
        {
          initialUsers.map((userData, idx) => <FakeUser key={idx} initialUser={userData} />)
        }
      </div>
    </>
  )
}

export default App
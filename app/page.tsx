import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/utils";
import Image from "next/image";


export default function Home() {
  return (
    <section>
      <h1 className="text-center">
        The hub for Every Geek's <br/>You can't miss
      </h1>
      <p className="text-center mt-5 ">Hackathons, meetups, partying all in one place</p>

      <ExploreBtn/>

      <div className="mt-20 space-y-7">
        <h3 className="text-blue-300">Featured Events</h3>
        <ul className="events">
          {events.map((event, index)=>(
            <li key = {index}>
              <EventCard {...event}/> 
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

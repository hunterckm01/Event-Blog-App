import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import Image from "next/image";

const events = [
  {image: '/images/event1.png', title: 'Event 1'},
  {image: '/images/event2.png', title: 'Event 2'},
  {image: '/images/event3.png', title: 'Event 3'},
  {image: '/images/event4.png', title: 'Event 4'},
  {image: '/images/event5.png', title: 'Event 5'},
  {image: '/images/event6.png', title: 'Event 6'}
]

export default function Home() {
  return (
    <section>
      <h1 className="text-center">
        The hub for Every Geek's <br/>You can't miss
      </h1>
      <p className="text-center mt-5 ">Hackathons, meetups, partying all in one place</p>

      <ExploreBtn/>

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
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

export type EventItem = {
  image: string,
  title: string,
  slug: string,
  location: string,
  date: string,
  time: string
}


export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "Hack Night: Build & Ship",
    slug: "hack-night-build-and-ship",
    location: "Tech Hub Arena, NYC",
    date: "2026-01-15",
    time: "18:00"
  },
  {
    image: "/images/event2.png",
    title: "AI Meetup: Models & Munchies",
    slug: "ai-meetup-models-and-munchies",
    location: "Node Cafe, San Francisco",
    date: "2026-02-08",
    time: "19:30"
  },
  {
    image: "/images/event3.png",
    title: "Frontend Fiesta",
    slug: "frontend-fiesta",
    location: "Design Loft, Austin",
    date: "2026-03-12",
    time: "17:00"
  },
  {
    image: "/images/event4.png",
    title: "Game Jam Weekend",
    slug: "game-jam-weekend",
    location: "PlayWorks Studio, Seattle",
    date: "2026-04-04",
    time: "10:00"
  },
  {
    image: "/images/event5.png",
    title: "Cloud & Coffee",
    slug: "cloud-and-coffee",
    location: "Skyline Co-working, Boston",
    date: "2026-05-21",
    time: "09:30"
  },
  {
    image: "/images/event6.png",
    title: "Open Source Sprint",
    slug: "open-source-sprint",
    location: "Community Hall, Portland",
    date: "2026-06-14",
    time: "11:00"
  }
]

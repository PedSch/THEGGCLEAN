// server/index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// ---- Mock event data ----
const events = [
  {
    slug: "blueprint-rich-tu",
    title: "The BluePrint Series: A Fireside Chat with Rich Tu",
    date: "May 14, 2025",
    location: "Soho House, New York",
    heroImageUrl: "/assets/hero.png",
    intro:
      "Join us for an exclusive evening with Rich Tu, the award winning designer behind the official NY/NJ 2026 FIFA World Cup poster, and a creative powerhouse known for his work with Nike, MTV, and culture shaping campaigns across the globe.",
    description:
      "Presented as part of The Gradient's Blueprint Series, this fireside chat moderated by Love Malone, CEO of The Gradient will dive into Rich's creative journey, his thoughts on where the industry is headed, and how design continues to shape identity, storytelling, and the future of culture.",
    agenda: [
      {
        time: "10:30 am – 11:00 am",
        title: "Welcome and Opening",
        location: "Ground Floor"
      },
      {
        time: "11:00 am – 12:00 pm",
        title: "Fireside Chat with Rich Tu",
        location: "Main Hall"
      },
      {
        time: "12:00 pm – 12:30 pm",
        title: "Audience Q&A",
        location: "Main Hall"
      },
      {
        time: "12:30 pm – 1:00 pm",
        title: "Networking + Closing",
        location: "Lounge"
      }
    ],
    speakers: [
      {
        name: "Rich Tu",
        title: "Artist",
        image: "/assets/group1.png"
      },
      {
        name: "Love Malone",
        title: "Founder & CEO, The Gradient",
        image: "/assets/group2.png"
      },
      {
        name: "Milan Chaney",
        title: "MC",
        image: "/assets/group3.png"
      }
    ],
    previousEvents: [
      {
        name: "BluePrint Series: Visual Storytelling",
        location: "Brooklyn, NY",
        image: "/assets/theevent1.png"
      },
      {
        name: "BluePrint Series: Brand Futures",
        location: "Newark, NJ",
        image: "/assets/theevent2.png"
      },
      {
        name: "BluePrint Series: DesignOps",
        location: "Remote",
        image: "/assets/theevent3.png"
      }
    ],
    faq: [
      {
        question: "What is the schedule for the event?",
        answer: "Doors open at 10:30 am with programming beginning promptly at 11:00 am."
      },
      {
        question: "Is this event open to non members?",
        answer: "Yes, a limited number of guest tickets are available by RSVP."
      }
    ]
  },
  {
    slug: "blueprint-brand-futures",
    title: "The BluePrint Series: Brand Futures Live",
    date: "June 20, 2025",
    location: "Brooklyn, New York",
    heroImageUrl: "/assets/hero.png",
    intro:
      "A live forum bringing together creative founders to discuss building brands, teams, and products in a new era of work.",
    description:
      "Brand Futures Live focuses on how modern leaders are navigating rapid change in culture, technology, and consumer behavior while still building brands that feel deeply human.",
    agenda: [
      {
        time: "5:00 pm – 5:30 pm",
        title: "Check-in & Welcome",
        location: "Lobby"
      },
      {
        time: "5:30 pm – 6:15 pm",
        title: "Founder Panel: Building in Public",
        location: "Stage"
      },
      {
        time: "6:15 pm – 7:00 pm",
        title: "Breakout Sessions",
        location: "Studios"
      },
      {
        time: "7:00 pm – 8:00 pm",
        title: "Mixer & Open Networking",
        location: "Bar"
      }
    ],
    speakers: [
      {
        name: "Alex Rivera",
        title: "Brand Strategist",
        image: "/assets/group1.png"
      },
      {
        name: "Jordan Smith",
        title: "Creative Director",
        image: "/assets/group2.png"
      },
      {
        name: "Taylor Lee",
        title: "Product Lead",
        image: "/assets/group3.png"
      }
    ],
    previousEvents: [
      {
        name: "Blueprint: Community Design",
        location: "Los Angeles, CA",
        image: "/assets/theevent1.png"
      },
      {
        name: "Blueprint: Creative Ops",
        location: "Chicago, IL",
        image: "/assets/theevent2.png"
      },
      {
        name: "Blueprint: Remote Studio",
        location: "Remote",
        image: "/assets/theevent3.png"
      }
    ],
    faq: [
      {
        question: "Will there be a recording?",
        answer: "Select sessions will be recorded and shared with registered attendees."
      },
      {
        question: "Is food or drink provided?",
        answer: "Light refreshments will be provided during the mixer."
      }
    ]
  }
];

// GET all events (for listing / sanity)
app.get("/api/events", (req, res) => {
  res.json(events);
});

// GET single event by slug
app.get("/api/events/:slug", (req, res) => {
  const event = events.find(e => e.slug === req.params.slug);
  if (!event) return res.status(404).json({ error: "Event not found" });
  res.json(event);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

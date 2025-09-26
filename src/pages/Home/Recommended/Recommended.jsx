import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import TourCard from "../../../Components/Cards/TourCard/TourCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Recommended = () => {
  const tours = [
    {
      id: "1",
      title: "Moinot Ghat River Escape",
      destination: "Moinot Ghat, Dohar",
      price: 1800,
      startDate: "2025-10-05",
      endDate: "2025-10-05",
      days: 1,
      maxParticipants: 30,
      currentParticipants: 12,
      guide: null,
      status: "open",
      description:
        "One-day trip to Moinot Ghat, known as the Mini Cox’s Bazar near Dhaka.",
      overview:
        "Moinot Ghat, located in Dohar near Dhaka, is a serene riverside escape often called the 'Mini Cox’s Bazar.' ...",
      image: "https://example.com/moinot.jpg",
      rating: 4.6,
      tags: ["river", "nature", "day-trip", "family-friendly", "boating"],
      highlights: [
        "Scenic riverbank",
        "Boat rides",
        "Local village exploration",
        "Fresh hilsa fish",
        "Sunrise & sunset views",
      ],
      tourPlan: {
        day1: "Arrival at Moinot Ghat early morning, riverside walk, boat ride, local lunch, photography session, return to Dhaka by evening.",
      },
    },
    {
      id: "2",
      title: "Nikli Haor Boat Tour",
      destination: "Nikli, Kishoreganj",
      price: 2500,
      startDate: "2025-10-12",
      endDate: "2025-10-12",
      days: 1,
      maxParticipants: 25,
      currentParticipants: 18,
      guide: "Hasan Ali",
      status: "open",
      description:
        "Enjoy a boat cruise at Nikli Haor, fresh air and peaceful waters.",
      overview: "Nikli Haor is one of the largest wetlands in Kishoreganj ...",
      image: "https://example.com/nikli.jpg",
      rating: 4.7,
      tags: ["wetland", "boat-tour", "birdwatching", "nature", "day-trip"],
      highlights: [
        "Boat cruise through wetlands",
        "Migratory bird watching",
        "Traditional cuisine experience",
        "Peaceful river scenery",
        "Photography opportunities",
      ],
      tourPlan: {
        day1: "Morning departure from Dhaka, arrival at Nikli Haor, boat ride exploring the wetland, lunch with local fish dishes, afternoon birdwatching, return by evening.",
      },
    },
    {
      id: "3",
      title: "Tangua Haor Eco Tour",
      destination: "Tangua Haor, Sunamganj",
      price: 3500,
      startDate: "2025-11-02",
      endDate: "2025-11-04",
      days: 3,
      maxParticipants: 20,
      currentParticipants: 20,
      guide: "Arif Chowdhury",
      status: "closed",
      description:
        "Houseboat experience at Tangua Haor, sunset view, and fresh fish meals.",
      overview:
        "Tangua Haor, located in Sunamganj, is a Ramsar-listed wetland of international importance ...",
      image: "https://example.com/tangua.jpg",
      rating: 4.8,
      tags: ["wetland", "houseboat", "eco-tour", "birdwatching", "nature"],
      highlights: [
        "Houseboat stay on the wetland",
        "Sunrise and sunset views",
        "Migratory birds spotting",
        "Fresh local fish cuisine",
        "Cultural interaction with local villagers",
      ],
      tourPlan: {
        day1: "Arrival in Sunamganj, check-in on houseboat, evening sunset cruise.",
        day2: "Full day boat exploration, birdwatching, photography, lunch on boat.",
        day3: "Morning visit to local village, cultural interaction, departure.",
      },
    },
    {
      id: "4",
      title: "Shat Gambuj Mosque Heritage Tour",
      destination: "Bagerhat, Khulna",
      price: 2200,
      startDate: "2025-10-20",
      endDate: "2025-10-20",
      days: 1,
      maxParticipants: 40,
      currentParticipants: 26,
      guide: null,
      status: "open",
      description:
        "Visit the UNESCO World Heritage Shat Gambuj Mosque and other historic sites.",
      overview:
        "The Shat Gambuj Mosque in Bagerhat, built during the 15th century by Khan Jahan Ali ...",
      image: "https://example.com/shatgambuj.jpg",
      rating: 4.5,
      tags: ["heritage", "mosque", "history", "UNESCO", "architecture"],
      highlights: [
        "77 domes mosque",
        "UNESCO World Heritage Site",
        "Terracotta artwork",
        "Nearby historical buildings",
        "Cultural immersion",
      ],
      tourPlan: {
        day1: "Arrive in Bagerhat, guided tour of Shat Gambuj Mosque and surrounding heritage sites, photography session, return to hotel, cultural dinner.",
      },
    },
    {
      id: "5",
      title: "Bandarban Hill Adventure",
      destination: "Bandarban",
      price: 4800,
      startDate: "2025-12-01",
      endDate: "2025-12-03",
      days: 3,
      maxParticipants: 25,
      currentParticipants: 19,
      guide: "Sajid Khan",
      status: "open",
      description:
        "Explore Nilgiri, Nafakhum waterfall, and tribal villages in Bandarban hills.",
      overview:
        "Bandarban, located in the southeastern hills of Bangladesh, is renowned for its breathtaking landscapes ...",
      image: "https://example.com/bandarban.jpg",
      rating: 4.9,
      tags: ["hill", "adventure", "trekking", "tribal-culture", "nature"],
      highlights: [
        "Nilgiri trek",
        "Nafakhum waterfall",
        "Boga Lake exploration",
        "Tribal village visit",
        "Photography and camping",
      ],
      tourPlan: {
        day1: "Arrival in Bandarban, visit Nilachal, camping near Nilgiri.",
        day2: "Trekking to Nilgiri peak, waterfall visit, local village interaction.",
        day3: "Morning scenic photography, visit Boga Lake, return journey.",
      },
    },
    {
      id: "6",
      title: "Sylhet Tea Garden & Ratargul",
      destination: "Sylhet",
      price: 3200,
      startDate: "2025-10-25",
      endDate: "2025-10-27",
      days: 3,
      maxParticipants: 30,
      currentParticipants: 21,
      guide: "Nadia Hasan",
      status: "open",
      description:
        "Tour through Sylhet’s tea gardens, Ratargul swamp forest, and Jaflong.",
      overview:
        "Sylhet, often called the 'Land of Two Leaves and a Bud,' is famous for its lush tea gardens ...",
      image: "https://example.com/sylhet.jpg",
      rating: 4.7,
      tags: ["tea-garden", "hill", "wetland", "nature", "cultural-tour"],
      highlights: [
        "Ratargul swamp forest boat tour",
        "Tea plantation exploration",
        "Jaflong stone collection",
        "Cultural and spiritual sites",
        "Photography of rolling hills",
      ],
      tourPlan: {
        day1: "Arrival in Sylhet, visit tea gardens, lunch in local restaurant, evening at Ratargul forest boat tour.",
        day2: "Excursion to Jaflong, local market visit, stone collection observation, photography, return hotel.",
        day3: "Visit spiritual sites, local village interaction, departure.",
      },
    },
    {
      id: "7",
      title: "Sajek Valley Cloud Tour",
      destination: "Sajek, Rangamati",
      price: 4200,
      startDate: "2025-11-15",
      endDate: "2025-11-17",
      days: 3,
      maxParticipants: 20,
      currentParticipants: 15,
      guide: null,
      status: "open",
      description:
        "Experience Sajek Valley’s clouds, hills, and tribal hospitality.",
      overview:
        "Sajek Valley, known as the 'Queen of Hills,' is a breathtaking destination in the Rangamati district ...",
      image: "https://example.com/sajek.jpg",
      rating: 4.8,
      tags: ["hill", "clouds", "adventure", "tribal-culture", "photography"],
      highlights: [
        "Sea of clouds view",
        "Sunrise and sunset photography",
        "Tribal village exploration",
        "Wooden cottages experience",
        "Trekking and adventure activities",
      ],
      tourPlan: {
        day1: "Arrival, check-in at wooden cottages, evening view of sunset clouds.",
        day2: "Trekking to viewpoint, tribal village visit, photography, cultural dinner.",
        day3: "Morning sunrise photography, souvenir shopping, return.",
      },
    },
    {
      id: "8",
      title: "Sundarbans Wildlife Safari",
      destination: "Sundarbans, Khulna",
      price: 6000,
      startDate: "2025-12-10",
      endDate: "2025-12-13",
      days: 4,
      maxParticipants: 20,
      currentParticipants: 20,
      guide: "Rahim Uddin",
      status: "closed",
      description:
        "Boat safari in Sundarbans to see Royal Bengal tigers, deer, and dolphins.",
      overview:
        "The Sundarbans is the largest mangrove forest in the world and a UNESCO World Heritage Site ...",
      image: "https://example.com/sundarbans.jpg",
      rating: 4.9,
      tags: ["mangrove", "wildlife", "boat-tour", "eco-tour", "adventure"],
      highlights: [
        "Royal Bengal tiger sightings",
        "Boat rides through mangroves",
        "Diverse birdlife",
        "Eco-tourism and conservation awareness",
        "Cultural interaction with local communities",
      ],
      tourPlan: {
        day1: "Arrival at Khulna, briefing, boat transfer to forest, evening wildlife observation.",
        day2: "Full day forest exploration by boat, wildlife photography, visit watchtowers.",
        day3: "Morning birdwatching, interaction with local honey collectors, return to Khulna.",
      },
    },
    {
      id: "9",
      title: "Saint Martin Island Escape",
      destination: "Saint Martin, Teknaf",
      price: 7500,
      startDate: "2025-11-25",
      endDate: "2025-11-28",
      days: 4,
      maxParticipants: 15,
      currentParticipants: 10,
      guide: "Farhana Jahan",
      status: "open",
      description:
        "Snorkeling, beach relaxation, and seafood on Saint Martin Island.",
      overview:
        "Saint Martin’s Island is the only coral island in Bangladesh, located in the Bay of Bengal near Teknaf ...",
      image: "https://example.com/saintmartin.jpg",
      rating: 4.9,
      tags: ["island", "beach", "snorkeling", "seafood", "eco-tour"],
      highlights: [
        "Coral reefs exploration",
        "Turquoise beaches",
        "Snorkeling and boat rides",
        "Local seafood experience",
        "Cultural village visits",
      ],
      tourPlan: {
        day1: "Arrival at Teknaf, boat transfer to island, beach relaxation.",
        day2: "Snorkeling and coral reef exploration, lunch with local seafood, evening beach walk.",
        day3: "Village visit and local craft demonstration, leisure activities on the beach.",
        day4: "Morning sunrise photography, boat ride back to Teknaf, departure.",
      },
    },
    {
      id: "10",
      title: "Kuakata Sunrise & Sunset",
      destination: "Kuakata, Patuakhali",
      price: 5000,
      startDate: "2025-12-20",
      endDate: "2025-12-22",
      days: 3,
      maxParticipants: 20,
      currentParticipants: 7,
      guide: null,
      status: "open",
      description:
        "See both sunrise and sunset over the Bay of Bengal from Kuakata beach.",
      overview:
        "Kuakata, often called the 'Daughter of the Sea,' is unique in Bangladesh for its ability to provide unobstructed views ...",
      image: "https://example.com/kuakata.jpg",
      rating: 4.7,
      tags: ["beach", "sunrise", "sunset", "relaxation", "nature"],
      highlights: [
        "Sunrise and sunset views",
        "Golden sand beach",
        "Local village exploration",
        "Boat rides and leisure activities",
        "Photography opportunities",
      ],
      tourPlan: {
        day1: "Arrival, beach walk, sunset photography, dinner with local seafood.",
        day2: "Sunrise viewing, morning beach sports, local village exploration, leisure afternoon.",
        day3: "Final beach walk, photography, departure.",
      },
    },
  ];

  return (
    <section className="max-w-7xl mx-auto  py-20">
      <SectionTitle
        subHeading="What's New"
        heading="Recommended"
        className="text-center"
      ></SectionTitle>
      <div className="py-5 flex flex-col gap-12">
        {/* card  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button className="bg-secondary/90 text-white hover:bg-secondary   hover:font-bold">
            View All Tours <ArrowRight className=""></ArrowRight>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Recommended;

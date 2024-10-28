import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import valorant from "../assets/Valorant.webp";
import rocket from "../assets/rocketleague.jpg";
import league from "../assets/lfl.jpg";
import bgmi from "../assets/bgmi.webp";
import ellipse from "../assets/bg-ellipse.png";
import GallerySlider from "../components/GallerySlider";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const LandingPage = () => {
  const [modalState, setModalState] = useState({ open: false });

  function onClose() {
    setModalState({ open: false });
  }

  const events = [
    {
      img: valorant,
      mainTitle: "Valorant Vengeance: LAN Championship 2024",
      title: "Valorant Tournament",
      shortDescription:
        "Step into the realm of tactical shooters at the Valorant Vengeance LAN Championship, where teams will battle for supremacy!",
      longDescription:
        "Join us for the Valorant Vengeance: LAN Championship 2024! Watch top-tier teams from around the world compete in thrilling matches filled with strategy, teamwork, and intense gunplay. Experience the electrifying atmosphere of live esports as players showcase their skills on stage. This tournament promises not only intense matches but also opportunities for fans to meet their favorite players, enjoy live commentary, and win exclusive merchandise. Don’t miss out on the action!",
      EventDetails: "March 20-21, 2024",
    },
    {
      img: bgmi,
      mainTitle: "BGMI Battlegrounds: Clash of Titans",
      title: "BGMI Tournament",
      shortDescription:
        "Dive into the world of battle royale at the BGMI Battlegrounds tournament, where only the best will survive!",
      longDescription:
        "Prepare for the BGMI Battlegrounds: Clash of Titans tournament! Join us for an exhilarating weekend of high-stakes competition as teams compete for the ultimate title in Battlegrounds Mobile India. Watch as squads drop into the map, strategize, and fight their way to victory in intense battles filled with unexpected twists. With live streaming, engaging commentary, and exclusive giveaways, this event promises to be a thrilling experience for players and fans alike. Are you ready to witness who will claim the crown?",
    },
    {
      img: league,
      mainTitle: "Summoner's Showdown: League of Legends 2024",
      title: "League Of Legends Tournament",
      shortDescription:
        "Join us for the Summoner's Showdown, where the finest League of Legends teams compete for glory!",
      longDescription:
        "Welcome to the Summoner's Showdown: League of Legends 2024! Experience the thrill of high-stakes competition as elite teams face off in the iconic game of League of Legends. Fans will enjoy two action-packed days filled with epic plays, thrilling comebacks, and intense rivalries. With live commentary, fan engagement activities, and opportunities to meet the pros, this event is a celebration of strategy, teamwork, and the gaming community. Will your favorite team rise to the challenge and claim victory?",
    },
    {
      img: rocket,
      mainTitle: "Rocket League Rampage: The Grand Finals",
      title: "Rocket League Tournament",
      shortDescription:
        "Rev up your engines for Rocket League Rampage, where the best teams battle it out for the championship!",
      longDescription:
        "Gear up for the Rocket League Rampage: The Grand Finals! This thrilling tournament showcases the most talented Rocket League teams as they compete in fast-paced matches filled with aerial acrobatics and explosive goals. Fans can expect a weekend of excitement with live matches, expert commentary, and engaging activities for all ages. Join us for a chance to witness spectacular goals, fierce rivalries, and an electric atmosphere. Who will take home the trophy and be crowned champions?",
    },
  ];
  return (
    <div className="bg-gray-900 min-h-screen  w-full overflow-hidden">
      <div className=" ">
        <div className="w-full h-[42rem] flex flex-col items-center justify-center text-white overflow-hidden">
          <h1 className="text-6xl text-yellow-100 px-96 text-center z-10 text-wrap">
            Ultimate Esports Arena: Where Gamers Rise
          </h1>
          <p className="text-wrap text-lg font-mono z-10 w-full px-72 text-gray-200 pb-10 pt-6 text-center ">
            "Join the battlefield! Experience high-stakes tournaments, fierce
            competition, and the thrill of victory. Step into the ultimate arena
            for gamers, where skill meets strategy, and legends are born. Are
            you ready to rise?"
          </p>
          {/* Video Container */}
          <video
            className="w-full h-[42rem] absolute  object-cover opacity-50"
            src="/src/assets/Untitled video - Made with Clipchamp.mp4"
            autoPlay
            loop
            muted
          />
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
            <a className="z-50 shadow-lg" href="#eventSection">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="text-yellow-100 text-2xl"
              />
            </a>
          </div>
        </div>
        <div className=""></div>
      </div>
      <motion.div
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-t-[2rem] relative "
        id="eventSection"
      >
        <img src={ellipse} className="absolute top-1/2 right-0" />
        <h1 className="w-full text-center text-4xl font-bold pt-8">
          Our <span className="text-[#14b1c1]">Upcoming</span> Event
        </h1>
        <p className="text-wrap text-sm font-mono w-full px-40 text-gray-700 pb-10 pt-6 text-center">
          Level up at our upcoming gaming event! Join us for intense
          tournaments, live battles, and exclusive game previews. Connect with
          fellow gamers, meet top players, and dive into the ultimate gaming
          experience. Don’t miss out—be part of the action!
        </p>
        <div className="flex h-full p-10 justify-between flex-wrap">
          {events.map((event, index) => {
            if (index % 2 == 0)
              return (
                <div
                  key={event.title}
                  onClick={() => {
                    setModalState({
                      open: true,
                      title: event.title,
                      description: event.longDescription,
                      eventDetails: event.EventDetails,
                      // eventDetails: event.EventDetails.Time,
                      // eventDetails: event.EventDetails.Venue,

                      img: event.img,
                    });
                  }}
                  className="flex flex-col gap-4 cursor-pointer"
                >
                  <Card
                    title={event.title}
                    description={event.shortDescription}
                  />
                  <img src={event.img} className="h-44 z-10" />
                </div>
              );
            else {
              return (
                <div
                  key={event.title}
                  onClick={() => {
                    setModalState({
                      open: true,
                      title: event.title,
                      description: event.longDescription,
                      img: event.img,
                    });
                  }}
                  className="flex flex-col gap-4 "
                >
                  <img src={event.img} className="h-44 z-10" />
                  <Card
                    title={event.title}
                    description={event.shortDescription}
                  />
                </div>
              );
            }
          })}

          <Modal
            open={modalState.open}
            onClose={onClose}
            title={modalState.title}
            description={modalState.description}
            eventDetails={modalState.eventDetails}
            image={modalState.img}
          />
        </div>
      </motion.div>
      <div className="bg-white">
        <motion.div
          initial={{ y: 60 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full px-32 bg-gray-900 rounded-t-[2rem]"
        >
          <h1 className="w-full text-white text-center text-4xl font-bold pt-8">
            Past <span className="text-[#14b1c1]">Event's</span> Glimpses
          </h1>

          <p className="text-wrap text-sm font-mono w-full px-40 text-gray-300 pb-10 pt-6 text-center">
            These glimpses highlight a legacy of dynamic, community-driven
            events celebrating innovation and competitive spirit in gaming and
            tech.
          </p>

          <GallerySlider />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;

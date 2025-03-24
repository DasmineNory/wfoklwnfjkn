"use client";
import AllEvents from "@/components/AllEvents";
import HappeningSection from "@/components/HomePage/Happening";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoTicketSharp } from "react-icons/io5";
import useAxios from "../hooks/useAxios";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const { sendRequest, loading, error } = useAxios();

  useEffect(() => {
    const fetchAllEvents = async () => {
      console.log("sending request");
      try {
        const response = await sendRequest({
          url: `https://api2-quiktis.onrender.com/events?limit=4`,
          method: "GET",
        });
        if (response?.status === "success") {
          setEvents(response.data.events);
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllEvents();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-20 justify-center items-center w-full">
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h1 className="md:text-[90px] text-2xl font-[900]">Events</h1>
          <h4 className="text-[20px]">
            Stay Ahead of the Curve with Quiktis&apos; Cutting-Edge
            <br /> Solutions
          </h4>
          <div className="flex flex-col gap-2">
            <p>Search any event</p>
            <SearchBar
              placeholder="Search Event"
              value=""
              onChange={() => {}}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={"/young-people-enjoying-street-food.png"}
            alt="young-people-enjoying-street-food"
            width={700}
            height={600}
            className="bg-cover object-cover w-full h-auto"
          />
        </div>
      </div>

      <HappeningSection />
      <AllEvents events={events} />

      {/* Coming Next Section */}
      <div className="flex flex-col gap-5 mt-10">
        <h1 className="uppercase text-[30px] font-bold">Coming Next</h1>
        {/* On mobile, cards stack (full width); on desktop, they appear in a row with fixed width */}
        <div className="flex flex-col sm:flex-row gap-5">
          {[1, 2, 3].map((next, idx) => {
            return (
              <div
                key={idx}
                className="p-4 border-5 border-primary rounded-[30px] bg-black flex flex-col gap-3 shadow-custom-red w-full sm:w-[420px] h-auto">
                <Image
                  src={"/party1.png"}
                  alt="party 1"
                  width={420}
                  height={300}
                  className="rounded-[30px]"
                />
                <h1 className="text-[20px]">Africa’s fashion industry.</h1>
                <div className="flex justify-between">
                  <h1>
                    May 23, 2024
                    <br />
                    13:20
                  </h1>
                  <h1>Lagos,Nigeria</h1>
                </div>
                <Button
                  className="bg-primary flex gap-3 justify-center text-white py-3 items-center rounded-[15px]"
                  onClick={() => {}}>
                  Get Ticket
                  <IoTicketSharp />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default EventsPage;

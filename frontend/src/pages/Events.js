import React from "react";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
const Events = () => {
  const events = useLoaderData();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <EventsList events={events} />
      </div>
    </>
  );
};

export default Events;

export const getEvents = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

import React from "react";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
const Events = () => {
  const data = useLoaderData();
  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const events = data.events;
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
    throw { message: "Could not fetch events " };
  } else {
    return response;
  }
};

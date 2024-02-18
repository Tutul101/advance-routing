import React from "react";
import { useParams, json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventDetail = () => {
  const data = useLoaderData();
  if (data.isError) {
    return <p>{data.message}</p>;
  }
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetail;

export const getEventByID = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    return { isError: true, message: "Event could not fetched" };
  } else {
    return response;
  }

  // return response;
};

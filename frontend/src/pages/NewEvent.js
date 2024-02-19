import React from "react";
import EventForm from "../components/EventForm";

const NewEvent = () => {
  return (
    <>
      <EventForm />
    </>
  );
};

export default NewEvent;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
};

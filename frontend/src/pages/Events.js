import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventsList from "../components/EventsList";
const Events = () => {
  const [fetchedEvents, setFetchedEvents] = useState([]);
  const [isLoading, setIsloading] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:8080/events");
      setIsloading(true);
      if (!response.ok) {
        setError("Fetching events failed");
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
        setIsloading(false);
      }
      setIsloading(false);
    };

    fetchEvents();
  }, []);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
      </div>
    </>
  );
};

export default Events;

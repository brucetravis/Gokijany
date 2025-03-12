import React from "react";
import "./EventCard.css";

export default function EventCard({ name, img, location, date, price }) {
  return (
    <div className="event-card">
      <img alt={name} src={img} />
      <div className="event-details">
        <p className="event-title">{name}</p>
        <p className="event-date">
          {date.date} {date.day} {date.month} {date.year}
        </p>
        <p className="event-location">{location}</p>
        <p className="event-price">{price}</p>
      </div>
    </div>
  );
}

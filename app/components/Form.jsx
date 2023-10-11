'use client';
import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    date: '',
    venue: '',
    city: '',
    doors: '',
    show: '',
  });

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { date, venue, city, doors, show } = formData;

    if (!date || !venue || !city || !doors || !show) {
      console.log('Missing fields');
      return;
    }

    try {
      const res = await fetch('/api/concerts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ date, venue, city, doors, show }),
      });

      const { msg } = await res.json();

      console.log(msg);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={formData.date}
        type="text"
        name="date"
        placeholder="Date"
      />
      <input
        onChange={handleChange}
        value={formData.venue}
        type="text"
        name="venue"
        placeholder="Venue"
      />
      <input
        onChange={handleChange}
        value={formData.city}
        type="text"
        name="city"
        placeholder="City, State"
      />
      <input
        onChange={handleChange}
        value={formData.doors}
        type="text"
        name="doors"
        placeholder="Doors"
      />
      <input
        onChange={handleChange}
        value={formData.show}
        type="text"
        name="show"
        placeholder="Showtime"
      />
      <button className="btn" type="submit">
        Add Concert
      </button>
    </form>
  );
}

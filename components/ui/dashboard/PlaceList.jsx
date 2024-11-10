'use client';

import { useEffect, useState } from 'react';
import PlaceCard from './PlaceCard';

export default function PlaceList() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch('/api/places');
        if (!response.ok) throw new Error('Failed to fetch places');
        const data = await response.json();
        setPlaces(data);
      } catch (err) {
        setError('Failed to load places');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error">
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {places.map((place) => (
        <PlaceCard key={place._id} place={place} />
      ))}
    </div>
  );
}
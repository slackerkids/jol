'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PlaceModal from './PlacePopup';

export default function PlaceCard({ place }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card bg-base-100 shadow-xl cursor-pointer" onClick={handleOpenModal}>
        <figure className="relative h-48">
          <Image
            src={place.image}
            alt={place.name}
            fill
            className="object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{place.name}</h2>
          <p className="line-clamp-2">{place.description}</p>
          <div className="card-actions justify-between items-center mt-4">
            <div className="flex gap-2">
              {place.mapsLinks.google && (
                <Link 
                  href={place.mapsLinks.google} 
                  target="_blank" 
                  className="btn btn-circle btn-sm btn-outline"
                >
                  <span className="text-lg">G</span>
                </Link>
              )}
              {place.mapsLinks.yandex && (
                <Link 
                  href={place.mapsLinks.yandex} 
                  target="_blank"
                  className="btn btn-circle btn-sm btn-outline"
                >
                  <span className="text-lg">Y</span>
                </Link>
              )}
              {place.mapsLinks.twoGis && (
                <Link 
                  href={place.mapsLinks.twoGis} 
                  target="_blank"
                  className="btn btn-circle btn-sm btn-outline"
                >
                  <span className="text-lg">2</span>
                </Link>
              )}
            </div>
            {place.lemonSqueezyLink && (
              <Link 
                href={place.lemonSqueezyLink}
                className="btn btn-primary btn-sm"
              >
                Купить билет
              </Link>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && <PlaceModal place={place} onClose={handleCloseModal} />}
    </>
  );
}
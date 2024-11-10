'use client';
import Image from 'next/image';
import { MapPin, X, Navigation } from 'lucide-react';

export default function PlaceModal({ place, onClose }) {
  if (!place) return null;

  // Function to safely render HTML iframe
  const createIframeSrc = (iframeHtml) => {
    if (!iframeHtml) return null;
    
    // Extract src URL from iframe HTML string
    const srcMatch = iframeHtml.match(/src="([^"]+)"/);
    return srcMatch ? srcMatch[1] : null;
  };

  const iframeSrc = createIframeSrc(place.googleMapsIframe);

  return (
    <dialog className="modal modal-open modal-bottom sm:modal-middle">
      <div className="modal-box w-full max-w-3xl p-0 h-[90vh] sm:h-auto">
        {/* Close button absolute positioned */}
        <button 
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 bg-base-100 bg-opacity-70"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable container */}
        <div className="overflow-y-auto h-full">
          {/* Image Section */}
          <div className="relative w-full h-48 sm:h-64">
            <Image
              src={place.image}
              alt={place.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">{place.name}</h1>
            
            {/* Description */}
            <div className="prose max-w-none mb-6">
              <p className="text-base sm:text-lg">{place.description}</p>
            </div>

            {/* Google Maps Iframe - Only shown if valid iframe source exists */}
            {iframeSrc && (
              <div className="space-y-3 mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Navigation className="w-5 h-5" />
                  Локация
                </h2>
                <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={iframeSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            )}

            {/* Maps Links Section - Only shown if any map links exist */}
            {(place.mapsLinks?.google || place.mapsLinks?.yandex || place.mapsLinks?.twoGis) && (
              <div className="space-y-3 mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Карты
                </h2>
                <div className="flex flex-wrap gap-2">
                  {place.mapsLinks?.google && (
                    <a 
                      href={place.mapsLinks.google} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      Google Maps
                    </a>
                  )}
                  {place.mapsLinks?.yandex && (
                    <a 
                      href={place.mapsLinks.yandex} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      Yandex Maps
                    </a>
                  )}
                  {place.mapsLinks?.twoGis && (
                    <a 
                      href={place.mapsLinks.twoGis} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      2GIS
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Buy Ticket Button */}
            {place.lemonSqueezyLink && (
              <div className="sticky bottom-0 left-0 right-0 pt-4 pb-2 bg-base-100 mt-6">
                <a 
                  href={place.lemonSqueezyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  Купить билет
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
}
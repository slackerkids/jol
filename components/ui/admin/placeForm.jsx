'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function PlaceForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const formData = new FormData(e.target);
    
    const data = {
      name: formData.get('name'),
      image: formData.get('image'),
      description: formData.get('description'),
      mapsLinks: {
        google: formData.get('googleMapsLink'),
        yandex: formData.get('yandexMapsLink'),
        twoGis: formData.get('twoGisMapsLink')
      },
      googleMapsIframe: formData.get('googleMapsIframe'),
      lemonSqueezyLink: formData.get('lemonSqueezyLink')
    };

    try {
      const res = await fetch('/api/place-create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to create place');

      setSuccess(true);
      router.refresh();
      formRef.current?.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Создать новое место</h2>
      
      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="alert alert-success">
          <span>Место успешно создано!</span>
        </div>
      )}

      <div className="form-control">
        <label className="label">
          <span className="label-text">Название</span>
        </label>
        <input
          type="text"
          name="name"
          required
          className="input input-bordered"
          placeholder="Название места"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">URL изображения</span>
        </label>
        <input
          type="url"
          name="image"
          required
          className="input input-bordered"
          placeholder="URL изображения"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Описание</span>
        </label>
        <textarea
          name="description"
          required
          className="textarea textarea-bordered h-24"
          placeholder="Описание места"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Ссылка на Google Maps</span>
        </label>
        <input
          type="url"
          name="googleMapsLink"
          className="input input-bordered"
          placeholder="URL Google Maps"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Ссылка на Yandex карту</span>
        </label>
        <input
          type="url"
          name="yandexMapsLink"
          className="input input-bordered"
          placeholder="URL Yandex Maps"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Ссылка на 2GIS карту</span>
        </label>
        <input
          type="url"
          name="twoGisMapsLink"
          className="input input-bordered"
          placeholder="URL 2GIS карты"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">HTML iframe Google Maps</span>
        </label>
        <input
          type="text"
          name="googleMapsIframe"
          required
          className="input input-bordered"
          placeholder="HTML iframe Google Maps"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Ссылка на LemonSqueezy</span>
        </label>
        <input
          type="url"
          name="lemonSqueezyLink"
          className="input input-bordered"
          placeholder="URL LemonSqueezy"
        />
      </div>

      <button 
        type="submit" 
        className={`btn btn-primary w-full ${loading ? 'loading loading-spinner' : ''}`}
        disabled={loading}
      >
        {loading ? 'Создание...' : 'Создать место'}
      </button>
    </form>
  );
} 



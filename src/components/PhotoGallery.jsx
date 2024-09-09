import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/gallery/all');
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching gallery items:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Photo Gallery</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={photo.imageUrl} alt={photo.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-medium">{photo.title}</h3>
                <p className="text-gray-600">{photo.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoGallery;

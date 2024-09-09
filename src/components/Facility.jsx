import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Facility = ({ title, rowsCount, slidesPerView }) => {
  const [facilities, setFacilities] = useState([]);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/facilities/all');
        setFacilities(response.data);
      } catch (error) {
        console.error('Error fetching facilities:', error);
      }
    };

    fetchFacilities();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const fadeThreshold = maxScroll / 0.4;
      const newOpacity = 1 - Math.min(scrollPosition / fadeThreshold, 1);
      setOpacity(newOpacity);
      console.log(`Scroll Position: ${scrollPosition}, Fade Threshold: ${fadeThreshold}, New Opacity: ${newOpacity}`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        opacity: opacity,
        transition: 'opacity 0.5s ease',
      }}
      className='w-full mt-6 p-2'
    >
      <h1 className='text-lg font-bold mt-2 ml-2 mb-3'>{title}</h1>

      <Swiper
        slidesPerView={slidesPerView}
        grid={{ rows: rowsCount }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        mousewheel={true}
        modules={[Grid, Pagination, Mousewheel]}
      >
        {facilities.map(({ imageUrl, name, location, description }, index) => (
          <SwiperSlide key={index}>
            <FacilityUnit
              imageUrl={imageUrl}
              name={name}
              location={location}
              description={description}
              id={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Facility;

const FacilityUnit = ({ imageUrl, name, location, description, id }) => (
  <div className='relative pb-4'>
    <div className='w-full h-48 overflow-hidden border border-gray-300 rounded-lg'>
      <img
        src={imageUrl}
        alt={`facility_${id}`}
        className='w-full h-full object-cover'
      />
    </div>
    <div className='px-1 sm:px-2'>
      <h3 className='text-xs sm:text-sm md:text-lg text-justify font-semibold text-stone-900'>
        {String(name).substring(0, 49)}{String(name).length > 49 ? '...' : null}
      </h3>
      <p className='text-sm text-stone-700'>{location}</p>
      <p className='text-xs text-stone-500'>{description.substring(0, 100)}{description.length > 100 ? '...' : null}</p>
   
    </div>
    <div className='absolute top-0 left-0 w-full h-full hover:bg-orange-300 opacity-40'></div>
  </div>
);

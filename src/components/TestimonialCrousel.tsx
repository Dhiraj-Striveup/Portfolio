'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import John from '../assets/John.png';
import Emily from '../assets/Emily.png';
import Sarah from '../assets/sarah.png';
import Michael from '../assets/michel.png';

const testimonials = [
  {
    text: `"Dhiraj seamlessly revamped our WordPress site. From custom theme development to performance optimization, his expertise saved us time and boosted our SEO."`,
    name: 'Samantha Gray',
    role: 'Marketing Head • BrightBloom',
    image: John,
  },
  {
    text: `"We had a legacy .NET application that needed modernization. Dhiraj not only restructured the code but also improved API performance and scalability."`,
    name: 'Thomas Yuen',
    role: 'Technical Lead • NexaCore',
    image: Michael,
  },
  {
    text: `"Our Laravel-based platform had several architectural issues. Dhiraj came in, refactored the core modules, and introduced efficient backend solutions that reduced our load time significantly."`,
    name: 'Priya Nair',
    role: 'CTO • MyVault',
    image: Sarah,
  },
  {
    text: `"Dhiraj is incredibly skilled in both frontend and backend Laravel development. He built a complete admin panel for our SaaS in record time."`,
    name: 'Daniel Roberts',
    role: 'Founder • LeadGenIQ',
    image: Emily,
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="bg-black  py-10 md:py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          speed={2000}
          pagination={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#111] border border-gray-700 rounded-xl p-6 h-80 text-left flex flex-col justify-between shadow-md hover:shadow-cyan-400/20 transition-all duration-300">
                <p className="text-gray-300 text-md font-light italic mb-6">
                  {item.text}
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

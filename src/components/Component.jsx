import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/DropMenu"
import { Input } from "./ui/Input"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/Carousel"
import { Card, CardContent } from "./ui/Card";
import React, { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import logo from './images/logo.jpg';
import KM1 from './images/KM-1.jpg';
import KM2 from './images/KM-2.jpg';
import KM4 from './images/KM-4.jpg';
import KM5 from './images/KM-5.jpg';
import KM6 from './images/KM-6.jpg';
import Exp1 from './images/Exp1.jpeg';
import Exp2 from './images/Exp2.jpg';
import Exp3 from './images/Exp3.jpeg';
import video from'./images/v1.mp4';
import video2 from'./images/video2.mp4';
import video3 from'./images/video3.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';



import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'; // Import custom styles
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import { Pagination } from 'swiper/modules'; // Import required modules

export default function Component() {

  
  const [isManageOpen, setManageOpen] = useState(false);
  const [isLanguageOpen, setLanguageOpen] = useState(false);

  const manageDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);


  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
    );
  };

  

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (manageDropdownRef.current && !manageDropdownRef.current.contains(event.target)) {
        setManageOpen(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [manageDropdownRef, languageDropdownRef]);


  return (
    <div className=" bg-[#f5f5f5] flex flex-col">

    <header className="bg-[#78cf87] text-white py-3 px-6 flex items-center justify-between">
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-2">
      <img src={logo} alt="KrishiMitra Logo" className="h-12 w-auto rounded-full mr-2  " /> 
      <div className="flex items-center gap-2">
        <div className="border-r border-white pr-2 text-sm font-bold">
          मंत्रालय कृषि
          <br />
          Ministry of Agriculture
        </div>
        <div className="text-sm">
          भारत सरकार
          <br />
          Government of India
        </div>
      </div>
    </div>
  </div>
  <div className="flex items-center gap-4">
    <button variant="outline" className="text-sm">
      Sign In
    </button> 
    
    <DropdownMenu>
      <div ref={languageDropdownRef}>
        <DropdownMenuTrigger asChild onClick={() => setLanguageOpen(!isLanguageOpen)}>
          <button className="text-sm flex items-center gap-2 text-white">
            <span className="h-4 w-4">🌍</span> {/* Placeholder for GlobeIcon */}
            English
          </button>
        </DropdownMenuTrigger>
        <div className="text-black">
          <DropdownMenuContent align="end" isOpen={isLanguageOpen}>
            <DropdownMenuItem>हिंदी</DropdownMenuItem>
            <DropdownMenuItem>Telugu</DropdownMenuItem>
            <DropdownMenuItem>Marathi</DropdownMenuItem>
          </DropdownMenuContent>
        </div>
      </div>
    </DropdownMenu>
    
    <button variant="outline" className="text-sm flex items-center gap-2">
      <MapPinIcon className="h-4 w-4" />
      New Delhi
    </button>
  </div>
</header>

    <nav className="bg-white shadow-md">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#0077b6]">
            <HomeIcon className="h-5 w-5" />
            Home
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#0077b6]">
            <InfoIcon className="h-5 w-5" />
            About
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#0077b6]">
            <BriefcaseIcon className="h-5 w-5" />
            Schemes
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#0077b6]">
            <VideoIcon className="h-5 w-5" />
            Media
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#0077b6]">
            <HeadphonesIcon className="h-5 w-5" />
            Help
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-2 top-2 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077b6] focus:border-transparent"
            />
          </div>
        <DropdownMenu>
        <div ref={manageDropdownRef}>
          <DropdownMenuTrigger asChild onClick={() => setManageOpen(!isManageOpen)}>
            <button className="text-sm flex items-center gap-2">
              <span className="h-4 w-4">📋</span> {/* Placeholder for MenuIcon */}
              Manage
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" isOpen={isManageOpen}>
            <DropdownMenuItem>KYC</DropdownMenuItem>
            <DropdownMenuItem>Notifications</DropdownMenuItem>
            <DropdownMenuItem>Finance</DropdownMenuItem>
            <DropdownMenuItem>Statistics</DropdownMenuItem>
            <DropdownMenuItem>Tenders</DropdownMenuItem>
          </DropdownMenuContent>
        </div>
      </DropdownMenu>
          <button variant="outline" className="flex items-center gap-2 text-sm">
            <ScanIcon className="h-4 w-4" />
            KrishiScan
          </button>
        </div>
      </div>
    </nav>


<div className="relative w-full h-[600px]">
  {/* <!-- Background Image --> */}
  <img
    src="https://img.freepik.com/premium-vector/smart-farming-farmer-managing-his-industrial-farm-with-mobile-app-his-tablet-using-quadcopter-iot-smart-tech-concept-agriculture-innovation-digital-farmers-technology-vector-illustration_93083-1668.jpg?w=740"
    alt="Hero Image"
    className="absolute inset-0 w-full h-full object-cover"
    style={{ aspectRatio: "1920/600", objectFit: "cover" }}
  />
  {/* <!-- Overlay Gradient --> */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#68ed7e] to-transparent opacity-70" />
  {/* <!-- Text Content --> */}
  <div className="relative z-10 flex items-center justify-start w-full h-full px-6">
        <div className="max-w-lg w-full bg-opacity-0 p-8 rounded-lg shadow-0 animate_animated animatefadeInLeft animate_delay-1s">
          <motion.h1
            className="text-4xl font-extrabold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Empowering Indian Agriculture
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Revolutionizing agricultural productivity through innovative technologies and data-driven solutions.
          </motion.p>
        </div>
      </div> 
</div>

<main  className=" w-full py-12 px-6 min-h-screen bg-[#eee292]">
<section className="mb-8">
      <h2 className="text-3xl font-medium mb-4">Recent Achievements</h2>
   
      <Swiper
      spaceBetween={0} // Adjusted space between slides to 0 for full width effect
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper w-full"
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      loop={true}
    >
      {/* Swiper Slides */}
      <SwiperSlide>
        <div className="relative h-[400px] w-full">
          <video
            src={video}
            alt="Achievement 1"
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white flex flex-col justify-end">
            <motion.h3
              className="text-xl font-medium mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Precision Farming Pilot
            </motion.h3>
            <motion.p
              className="text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Successful implementation of precision farming techniques in 500 farms, resulting in a 20% increase in crop yields.
            </motion.p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-[400px] w-full">
          <video
            src={video2}
            alt="Achievement 2"
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white flex flex-col justify-end">
            <motion.h3
              className="text-xl font-medium mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sustainable Practices Adoption
            </motion.h3>
            <motion.p
              className="text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Over 10,000 farmers have adopted eco-friendly farming practices, reducing water usage by 30% and improving soil health.
            </motion.p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-[400px] w-full">
          <video
            src={video3}
            alt="Achievement 3"
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white flex flex-col justify-end">
            <motion.h3
              className="text-xl font-medium mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Agri-tech Innovation Award
            </motion.h3>
            <motion.p
              className="text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              KrishiMitra's mobile app recognized as the best agri-tech innovation of the year, improving farmer access to information and resources.
            </motion.p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </section>
    <div className="flex justify-between mb-8 ">
    {/* <!-- Notifications Section --> */}
    <section className="rounded-lg w-full md:w-2/3 pr-4 pl-6 pt-4 p-3 bg-[#c0e7b1] mr-4">
      <h2 className="text-3xl font-medium mb-4">Notifications</h2>
      <div className="flex items-center gap-4 mb-2 text-sm text-[#2c180b]">
        <CalendarCheck2Icon className="h-5 w-5 text-[#0077b6]" />
        <p>Soil Health Card Distribution, KrishiMitra App Recognized</p>
      </div>
      <div className="flex items-center gap-4 mb-2 text-sm text-[#2c180b]">
      <CalendarCheck2Icon className="h-5 w-5 text-[#0077b6]" />
      <p>Organic Farming Workshop in Nagpur</p>
    </div>
    <div className="flex items-center gap-4 mb-2 text-sm text-[#2c180b]">
      <CalendarCheck2Icon className="h-5 w-5 text-[#0077b6]" />
      <p>Crop Insurance Scheme Expansion in 5 States</p>
    </div>
    <div className="flex items-center gap-4 mb-2 text-sm text-[#2c180b]">
      <CalendarCheck2Icon className="h-5 w-5 text-[#0077b6]" />
      <p>Drip Irrigation Pilot Project Launched</p>
    </div>
    <div className="flex items-center gap-4 mb-2 text-sm text-[#2c180b]">
      <CalendarCheck2Icon className="h-5 w-5 text-[#0077b6]" />
      <p>Farmer Training Program in Collaboration with IITs</p>
    </div>
      <button variant="outline" className="text-sm text-blue-400 pl-9">
        See More
      </button>
    </section>


    <section className="w-full md:w-2/3 pl-4">
  <h2 className="text-3xl font-medium mb-4">Weather</h2>
  <div className="bg-[#c0e7b1] p-4 rounded-lg shadow-md flex flex-col gap-4">
    
    <div className="flex justify-between items-center">
      
      <div className="flex items-center">
        <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="Weather Icon" className="h-16 w-16 mr-4" />
        <div>
          <h3 className="text-xl font-medium mb-1">Current Weather</h3>
          <p className="text-[#2c180b]">Delhi, India</p>
          <p className="text-4xl font-bold text-black">26°C</p>
          <p className="text-[#2c180b]">Sunny</p>
        </div>
      </div>
      
      <div className="pl-14 border-l-2 border-cyan-500">
  <h3 className="text-xl font-medium mb-2">Forecast</h3>
  <ul className="text-[#2c180b] space-y-2 ">
    <li className="flex items-center gap-2">
      Mon: 24°C / 18°C  
      <img
        src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather03-512.png"
        alt="Cloudy Icon"
        className="h-6 w-6"
      />
    </li>
    <li className="flex items-center gap-2">
      Tue: 26°C / 20°C 
      <img
        src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather01-512.png"
        alt="Sunny Icon"
        className="h-7 w-7"
      />
    </li>
    <li className="flex items-center gap-2">
      Wed: 28°C / 22°C   
      <img
        src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather04-512.png"
        alt="Rain Icon"
        className="h-6 w-6"
      />
    </li>
  </ul>
</div>

    </div>
  </div>
</section>
  </div>


  <section className="mb-8">
  <h2 className="text-3xl font-medium mb-4">Agricultural Initiatives</h2>
  <Swiper
    slidesPerView={2}
    spaceBetween={20}
    loop={true}
    autoplay={{
      delay: 10000,
      disableOnInteraction: false,
    }}
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }}
    className="mySwiper"
  >
    {/* Slide 1 */}
    <SwiperSlide className="rounded-xl">
    <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
  <img
    src={KM1}
    alt="Initiative 1"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white flex items-end">
    <div className="text-shadow-lg">
      <h3 className="text-xl font-medium mb-2">Precision Farming</h3>
      <p className="text-gray-200 mb-4">
        Implementing advanced technologies to optimize resource usage and increase crop yields.
      </p>
    </div>
  </div>
</div>
    </SwiperSlide>

    <SwiperSlide className="rounded-xl">
    <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
  <img
    src={KM2}
    alt="Initiative 1"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white flex items-end">
    <div className="text-shadow-lg">
      <h3 className="text-xl font-medium mb-2">Sustainable Practices</h3>
      <p className="text-gray-200 mb-4">
      Promoting eco-friendly farming methods to improve soil health and reduce environmental impact.
      </p>
    </div>
  </div>
</div>
    </SwiperSlide>

    
    
   
  {/* Slide 3 */}
  <SwiperSlide className="rounded-xl">
    <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
      <img
        src="https://plus.unsplash.com/premium_photo-1661320855956-bf79d0d519ed?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Initiative 3"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white flex items-end">
        <div className="text-shadow-lg">
          <h3 className="text-xl font-medium mb-2">Agri-tech Innovation</h3>
          <p className="text-gray-200 mb-4">
            Leveraging technology to empower farmers and improve access to information and resources.
          </p>
        </div>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 4 */}
  <SwiperSlide className="rounded-xl">
    <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
      <img
        src={KM4}
        alt="Initiative 4"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white flex items-end">
        <div className="text-shadow-lg">
          <h3 className="text-xl font-medium mb-2">Organic Farming</h3>
          <p className="text-gray-200 mb-4">
            Promoting sustainable farming practices to improve soil health and reduce environmental impact.
          </p>
        </div>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 5 */}
  <SwiperSlide className="rounded-xl">
    <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
      <img
        src={KM5}
        alt="Initiative 5"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white flex items-end">
        <div className="text-shadow-lg">
          <h3 className="text-xl font-medium mb-2">Crop Insurance</h3>
          <p className="text-gray-200 mb-4">
            Providing financial protection to farmers against crop failures and natural disasters.
          </p>
        </div>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 6 */}
  <SwiperSlide className="rounded-xl">
    <div className="relative w-full h-[250px] rounded-xl overflow-hidden">
      <img
        src={KM6}
        alt="Initiative 6"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white flex items-end">
        <div className="text-shadow-lg">
          <h3 className="text-xl font-medium mb-2">Irrigation Efficiency</h3>
          <p className="text-gray-200 mb-4">
            Implementing advanced irrigation techniques to optimize water usage and improve crop yields.
          </p>
        </div>
      </div>
    </div>
  </SwiperSlide>

    {/* Swiper Navigation Buttons */}
    {/* <div className="swiper-button-prev text-white">
      &lt;
    </div>
    <div className="swiper-button-next text-white">
      &gt;
    </div> */}
  </Swiper>
</section>


  <section className="mb-8 ">
  <h2 className="text-3xl font-medium mb-6 mt-2">Meet Our Agricultural Experts</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-16">
    <Card className="flex flex-col items-center p-4 max-w-xs">
      <img src={Exp1} alt="Expert 1" className="w-48 h-48 object-cover mb-4" />
      <CardContent className="text-center">
        <h3 className="text-xl font-medium mb-2">Shri Shivraj Singh Chouhan</h3>
        <p className="text-gray-600">Minister of Agriculture and Farmers Welfare of India</p>
      </CardContent>
    </Card>
    <Card className="flex flex-col items-center p-4 max-w-xs">
      <img src={Exp2} alt="Expert 2" className="w-48 h-48 object-cover mb-4" />
      <CardContent className="text-center">
        <h3 className="text-xl font-medium mb-2">Shri Bhagirath Chaudhary</h3>
        <p className="text-gray-600">Hon'ble Minister of State</p>
      </CardContent>
    </Card>
    <Card className="flex flex-col items-center p-4 max-w-xs">
      <img src={Exp3} alt="Expert 3" className="w-48 h-48 object-cover mb-4" />
      <CardContent className="text-center">
        <h3 className="text-xl font-medium mb-2">Shri Ramnath Thakur</h3>
        <p className="text-gray-600">Hon'ble Minister of State</p>
      </CardContent>
    </Card>
  </div>
</section>

 
</main>

  <footer className="bg-[#aecfb5] py-6">
    <div className="container mx-auto px-4 max-w-screen-lg">
      {/* Social Media Icons */}
      <div className="flex justify-center mb-6">
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-6">
        <div className="flex flex-col space-y-2">
          <a href="/rti" className="text-gray-700 hover:text-gray-900">RTI</a>
          <a href="/terms-and-conditions" className="text-gray-700 hover:text-gray-900">Terms & Condition</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="/website-policies" className="text-gray-700 hover:text-gray-900">Website Policies</a>
          <a href="/help" className="text-gray-700 hover:text-gray-900">Help</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="/feedback" className="text-gray-700 hover:text-gray-900">Feedback</a>
          <a href="/web-information-manager" className="text-gray-700 hover:text-gray-900">Web Information Manager</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="/tenders" className="text-gray-700 hover:text-gray-900">Tenders</a>
          <a href="/recruitments" className="text-gray-700 hover:text-gray-900">Recruitments</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="/contact-us" className="text-gray-700 hover:text-gray-900">Contact Us</a>
          <a href="/sitemap" className="text-gray-700 hover:text-gray-900">Sitemap</a>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} KrishiMitra. All rights reserved.</p>
      </div>
    </div>
  </footer>

  </div>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CalendarCheck2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
      <path d="M3 10h18" />
      <path d="m16 20 2 2 4-4" />
    </svg>
  )
}


function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function HeadphonesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ScanIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}
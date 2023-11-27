
import {
  
  steps,
  cards,
  testimonials,
  Blogs,
} from "../assets/constant";
import BlogCard from "../components/BlogCard";
import Contactform from "../components/Contactform";
import Marquee from "react-fast-marquee";
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="flex  items-center w-full  justify-evenly overflow-hidden h-4/5 md:flex-row lg:flex-row ">
        <div className="text-5xl font-bold h-4/5 w-[40%] overflow-hidden mx-8 tracking-wide uppercase  ">
          Services at your door{" "}
          <span className="text-indigo-600 my-2">step</span>
          <p className="font-normal text-sm capitalize py-2 my-2 w-[80%]">
          No more hassle of traditional laundry services - with just a few taps,
           you can have your clothes cleaned and returned to you in no time. 
          </p>
        </div>

        <div className="mt-24 w-[40%] ">
          <Contactform />
        </div>
      </div>

      <div className="w-full h-[60vh] bg-indigo-600 flex justify-center flex-col  ">
        <span className="font-bold text-5xl text-white p-10 text-center h-auto capitalize underline  ">
          how its work in 4 easy steps
        </span>
        <div className="w-full h-auto flex justify-evenly ">
          {steps.map((item) => {
            return (
              <>
                <div className="justify-center flex items-center flex-col">
                  <div className="w-[100px] h-[100px] bg-white rounded-[100%] flex justify-center items-center mt-3 p-2 ">
                    <img
                      className="z-3 h-[55px] w-[55px] text-center"
                      src={item.src}
                      alt="image"
                    />
                  </div>
                  <p className="text-white font-semibold text-xl p-2 mt-5">
                    {item.content}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="h-[90vh] w-full  overflow-hidden ">
        <div className="flex justify-center h-[30%]  flex-nowrap">
          <h2 className="text-5xl font-semibold overflow-hidden mt-6 text-slate-700 capitalize flex items-center">
            {" "}
            our Services
          </h2>
        </div>
        <div className="flex w-full h-[90%] justify-evenly ">
          {cards.map((item) => {
            return (
              <>
                <div className=" w-[30%] h-[60%] shadow-lg mb-5 ml-5 rounded-3xl flex justify-center items-center flex-col   ">
                  <span className=" h-20 w-20 bg-indigo-600 rounded-[100%] p-2 items-center align-middle flex justify-center  overflow-hidden hover:bg-orange-500 transition-easein duration-500">
                    <img src={item.scr} alt="image" className="p-2" />
                  </span>
                  <span className="text-2xl m-1 text-center font-semibold">
                    {item.heading}
                  </span>
                  <p className="p-4 text-center">{item.content}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Box display='flex' flexDirection='column'  >
        <span className="text-5xl mb-10 p-2 capitalize text-slate-700 font-semibold w-[100vw] text-center">
          Blogs
        </span>
        <Box display='flex' justifyContent='space-evenly' alignItems='center'  flexDirection='row'>
        {Blogs.map((item) =>  (
              <BlogCard  src={item.src} heading={item.heading} content={item.content} footercontent={item.footercontent} link={item.link}/>
        ))}
      
    </Box>
     
      </Box>
      <div className="h-[60vh] w-full mt-6 mb-6 flex justify-center items-center flex-col">
        <span className="text-5xl mb-10 p-2 capitalize text-slate-700 font-semibold">
          testimonials
        </span>
        <Marquee pauseOnHover>
          {testimonials.map((item) => {
            return (
              <>
                <div className="space-y-4 max-w-md mx-auto border-[1px] border-slate-200 border-solid p-5 rounded-3xl ml-5 mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 fill-indigo-600"
                    viewBox="0 0 35 30"
                    fill="none"
                  >
                    <path d="M22.3838 27.6777C23.5264 28.9961 25.3721 29.6992 27.4814 29.6992C31.6123 29.6992 34.249 26.9746 34.249 22.7559C34.249 18.625 31.5244 15.6367 27.6572 15.6367C26.8662 15.6367 25.9873 15.8125 25.1084 16.0762C24.5811 9.48438 27.833 4.03516 32.2275 2.36523L31.7881 0.871094C24.2295 3.77148 19.4834 11.1543 19.4834 19.8555C19.4834 22.668 20.5381 25.7441 22.3838 27.6777ZM0.499023 19.8555C0.499023 24.6895 3.22363 29.6992 8.49707 29.6992C12.54 29.6992 15.1768 26.9746 15.1768 22.7559C15.1768 18.625 12.4521 15.6367 8.67285 15.6367C7.88184 15.6367 7.00293 15.8125 6.12402 16.0762C5.59668 9.48438 8.84863 4.03516 13.2432 2.36523L12.7158 0.871094C5.24512 3.77148 0.499023 11.1543 0.499023 19.8555Z"></path>
                  </svg>
                  <p className="md:text-lg leading-relaxed">{item.content}</p>
                  <div className="flex items-center gap-2">
                    <img
                      alt="Yifan testimonial for ShipFast"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      className="w-10 h-10 rounded-full object-cover"
                      src={item.src}
                    />
                    <span className="font-bold">{item.name}</span>
                  </div>
                </div>
              </>
            );
          })}
        </Marquee>
      </div>
      <Footer/>
    </>
  );
};

export default Home;

import React from "react";
import hospitalImage from "../../assets/images/hospital.jpg";

const Home = () => {
  return (
    <>
     
<div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
  <img src={hospitalImage} className="absolute top-0 left-0 min-h-full ob opacity-90" alt=""/>
  <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
    <div className="col-span-6">
      <span className="uppercase text-white text-xs font-bold mb-2 block">WE ARE EXPERTS</span>
      <h1 className="text-white font-extrabold text-5xl mb-8">Journey to Healing: Your Interactive Hospital Hub</h1>
      <p className="text-stone-100 text-base">
      Brighten your hospital days with our Portal. From informative content about medical procedures to entertaining games, we've crafted an experience tailored for young minds. Join us in making your health journey not just bearable but enjoyable!
      </p>
      <a href="/register">
      
      <button className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">Sign Up</button>
      </a>
    </div>
  </div>
</div>
<div className="bg-[#f7d0b6] py-20">
  <div className="max-w-screen-lg mx-auto flex justify-between items-center">
    <div className="max-w-xl">
      <h2 className="font-black text-sky-950 text-3xl mb-4">As the leading experts in this field, we're in over 90 countries</h2>
      <p className="text-base text-sky-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <button className="text-sky-950 uppercase py-3 text-base px-10 border border-sky-950 hover:bg-sky-950 hover:bg-opacity-10">Get started</button>
  </div>
</div>
<div className="py-12 relative overflow-hidden bg-white">
  <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
    <div className="w-full flex flex-col items-end pr-16">
      <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">Whether you need Assistance</h2>
      <div className="h-full mt-auto overflow-hidden relative">
        <img src={hospitalImage}  className="h-full w-full object-contain" alt=""/>
      </div>
    </div>

    <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
      <div className="relative z-20 pl-12">
        <h2 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">Finpoint is here <br/>to help you</h2>
        <p className="text-white text-sm">
          Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
        </p>
        <button className="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10">Talk with expert</button>
      </div>
    </div>
  </div>
</div>

<div className="py-4 relative overflow-hidden bg-white">
  <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
    

    <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-[#f7d0b6] before:top-0 before:right-0">
      <div className="relative z-20 pl-12">
        <h2 className="text-sky-950 font-black text-5xl leading-snug mb-10">Finpoint is here <br/>to help you</h2>
        <p className="text-sky-950 text-sm">
          Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
        </p>
        <button className="mt-8 text-sky-950 uppercase py-3 text-sm px-10 border border-sky-950 hover:bg-white hover:bg-opacity-10">Talk with expert</button>
      </div>
    </div>
    <div className="w-full flex flex-col pl-16">
      <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-left mb-12 mt-10">Whether you need Assistance</h2>
      <div className="h-full mt-auto overflow-hidden relative">
        <img src={hospitalImage} className="h-full w-full object-contain" alt=""/>
      </div>
    </div>

  </div>
</div>

<div className="py-12 relative overflow-hidden bg-white">
  <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
    <div className="w-full flex flex-col items-end pr-16">
      <h2 className="text-[#64618C] font-bold text-2xl max-w-xs text-right mb-12 mt-10">Whether you need Assistance</h2>
      <div className="h-full mt-auto overflow-hidden relative">
        <img src="https://picsum.photos/800/600" className="h-full w-full object-contain" alt=""/>
      </div>
    </div>

    <div className="py-20 bg-slate-100 relative before:absolute before:h-full before:w-screen before:bg-sky-950 before:top-0 before:left-0">
      <div className="relative z-20 pl-12">
        <h2 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">Finpoint is here <br/>to help you</h2>
        <p className="text-white text-sm">
          Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
        </p>
        <button className="mt-8 text-white uppercase py-3 text-sm px-10 border border-white hover:bg-white hover:bg-opacity-10">Talk with expert</button>
      </div>
    </div>
  </div>
</div>
   

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
      <article>
        <h2 className="text-2xl font-extrabold text-gray-900">BLOG</h2>
        <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
          <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
              <h3 className="text-center">
                <a className="text-white text-2xl font-bold text-center" href="#">
                  <span className="absolute inset-0"></span>
                  Top 10 highest paid programming languages of 2021
                </a>
              </h3>
            </div>
          </article>
          <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
              <h3 className="text-center">
                <a className="text-white text-2xl font-bold text-center" href="#">
                  <span className="absolute inset-0"></span>
                  Python Frameworks
                </a>
              </h3>
            </div>
          </article>
          <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511376777868-611b54f68947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
              <h3 className="text-center">
                <a className="text-white text-2xl font-bold text-center" href="#">
                  <span className="absolute inset-0"></span>
                  The best plugins for Visual Studio Code
                </a>
              </h3>
            </div>
          </article>
        </section>
      </article>
    </section>

<footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get updates.</h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
              <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
              <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Retail & E-Commerce</a>
              <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Information Technology</a>
              <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Finance & Insurance</a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

        <div className="flex items-center justify-between">
          <a href="#">
            <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Home;



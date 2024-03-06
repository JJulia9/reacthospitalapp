import React from "react";
import hospitalImage from "../../assets/images/hospital.jpg";
import Navigation from "../../components/Navigation";

const Home = () => {
  return (
    <>
     <Navigation />

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

    <section className="bg-white py-24 px-4 lg:px-16">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <h1 className="text-center text-5xl pb-12">Industries we serve</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">

          {/* Repeat the following block for each industry */}
          <div className="relative group h-48 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <a href="#" className="block">
              <div className="h-28">
                <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-red-500 rounded-xl justify-items-center align-middle">
                  <img src="https://epicpadprinting.com/public/img/indus/Automotive.png" className="w-36 h-36 mt-6 m-auto" alt="Automotive" title="Automotive" loading="lazy" width="200" height="200" />
                </div>
              </div>
              <div className="p-6 z-10 w-full">
                <p className="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased">
                  Automotive
                </p>
              </div>
            </a>
          </div>
          {/* End of industry block */}

          {/* Repeat the above block for each industry */}
          
        </div>
      </div>
    </section>
  


 <section className="bg-blue-500ray-50">
      <div className="py-10 sm:py-16 block lg:py-24 relative bg-opacity-50 z-40">

        <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">

          <div className="absolute top-0 -right-1/4 z-0 opacity-10">
            <svg width="800px" height="800px" viewBox="0 0 24 24"
              className="w-96 z-0 h-full object-fill fill-g text-g" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z" />
            </svg>
          </div>

          <div className="absolute -bottom-0 -left-1/4 z-0 opacity-10">
            <svg width="800px" height="800px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"
              className="w-48 z-0 h-full -rotate-90 object-fill fill-r text-r">
              <path
                d="M32 225h12.993A4.004 4.004 0 0 0 49 220.997V138.01c0-4.976.724-5.04 1.614-.16l12.167 66.708c.397 2.177 2.516 3.942 4.713 3.942h8.512a3.937 3.937 0 0 0 3.947-4S79 127.5 80 129s14.488 52.67 14.488 52.67c.559 2.115 2.8 3.83 5.008 3.83h8.008a3.993 3.993 0 0 0 3.996-3.995v-43.506c0-4.97 1.82-5.412 4.079-.965l10.608 20.895c1.001 1.972 3.604 3.571 5.806 3.571h9.514a3.999 3.999 0 0 0 3.993-4.001v-19.49c0-4.975 2.751-6.074 6.155-2.443l6.111 6.518c1.51 1.61 4.528 2.916 6.734 2.916h7c2.21 0 5.567-.855 7.52-1.92l9.46-5.16c1.944-1.06 5.309-1.92 7.524-1.92h23.992a4.002 4.002 0 0 0 4.004-3.992v-7.516a3.996 3.996 0 0 0-4.004-3.992h-23.992c-2.211 0-5.601.823-7.564 1.834l-4.932 2.54c-4.423 2.279-12.028 3.858-16.993 3.527l2.97.198c-4.962-.33-10.942-4.12-13.356-8.467l-11.19-20.14c-1.07-1.929-3.733-3.492-5.939-3.492h-7c-2.21 0-4 1.794-4 4.001v19.49c0 4.975-1.14 5.138-2.542.382l-12.827-43.535c-.625-2.12-2.92-3.838-5.127-3.838h-8.008c-2.207 0-3.916 1.784-3.817 4.005l1.92 42.998c.221 4.969-.489 5.068-1.585.224l-15.13-66.825c-.488-2.155-2.681-3.902-4.878-3.902h-8.512a3.937 3.937 0 0 0-3.947 4s.953 77-.047 75.5-13.937-92.072-13.937-92.072C49.252 34.758 47.21 33 45 33H31.999"
                fillRule="evenodd" />
            </svg>
          </div>

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="max-w-xl mx-auto text-center">
              <div className="inline-flex px-4 py-1.5 mx-auto rounded-full">
                <p className="text-4xl font-semibold tracking-widest text-g uppercase">
                  Industries:
                </p>
              </div>
              <p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20">
              <a
                href="#"
                className="transition-all duration-1000 bg-white hover:bg-blue-500 hover:shadow-xl m-2 p-4 relative z-40 group"
              >
                <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"></div>
                <div className="py-2 px-9 relative">
                  <svg className="w-16 h-16 fill-gray-400 group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="polo-tshirt">
                    <path d="m16.962 5.841 3.582.717-.716-4.115zM12.172 2.443l-.716 4.115 3.582-.717z"></path>
                    <path
                      d="M28.488 7.301a5.354 5.354 0 0 0-2.743-3.305c-.112-.056-2.96-1.2-4.942-1.996l.87 4.987a.52.52 0 0 1-.488.746.535.535 0 0 1-.101-.01L16.5 6.806V12a.5.5 0 1 1-1 0V6.806l-4.583.917a.518.518 0 0 1-.613-.598L11.196 2c-1.982.796-4.828 1.94-4.94 1.996a5.36 5.36 0 0 0-2.75 3.328l-1.492 6.26c-.042.175.01.359.138.486l.608.608a5.487 5.487 0 0 0 3.907 1.618c.196 0 .375-.111.464-.287l1.072-2.145c.013.292.02.584.02.876V28.48c0 .231.153.435.375.499A27.03 27.03 0 0 0 16 30c2.508 0 5.015-.34 7.402-1.022a.52.52 0 0 0 .376-.5V14.74c0-.292.006-.584.019-.876l1.073 2.145a.519.519 0 0 0 .463.287 5.487 5.487 0 0 0 3.907-1.618l.608-.608a.518.518 0 0 0 .138-.487l-1.498-6.282zM17.03 11.5c-.276 0-.505-.224-.505-.5s.219-.5.495-.5h.01a.5.5 0 0 1 0 1zm0-2c-.276 0-.505-.224-.505-.5s.219-.5.495-.5h.01a.5.5 0 0 1 0 1z">
                    </path>
                  </svg>
                  <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">Apparels Industry</h3>
                  <p className="mt-4 text-base text-gray-600 group-hover:text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
              </a>

              <a
                href="#"
                className="transition-all duration-1000 bg-white hover:bg-blue-500 hover:shadow-xl m-2 p-4 relative z-40 group"
              >
                <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"></div>
                <div className="py-2 px-9 relative">
                  <svg className="w-16 h-16 fill-gray-400 group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64"
                    id="furniture">
                    <path
                      d="M13.6 4.8v54.3c0 .4.3.8.8.8H31v-2.3H19c-.6 0-1-.5-1-1s.5-1 1-1h12V4.1H14.4C14 4.1 13.6 4.4 13.6 4.8zM29.1 38.2c0 .6-.5 1-1 1s-1-.5-1-1v-1.3c0-.6.5-1 1-1s1 .5 1 1V38.2zM29.1 25.8v6.5c0 .6-.5 1-1 1s-1-.5-1-1v-6.5c0-.6.5-1 1-1S29.1 25.3 29.1 25.8zM16.1 11c0-1.6 1.3-2.8 2.8-2.8h7.4c.6 0 1 .5 1 1 0 .6-.5 1-1 1H19c-.4 0-.8.3-.8.8v17.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V11zM49.6 4.1H33v51.5h12c.4 0 .8-.3.8-.8V9.2c0-.6.5-1 1-1s1 .5 1 1v45.5c0 1.6-1.3 2.8-2.8 2.8H33v2.3h16.6c.4 0 .8-.3.8-.8V4.8C50.4 4.4 50 4.1 49.6 4.1zM37 38.2c0 .6-.5 1-1 1s-1-.5-1-1v-1.3c0-.6.5-1 1-1s1 .5 1 1V38.2zM37 32.3c0 .6-.5 1-1 1s-1-.5-1-1v-6.5c0-.6.5-1 1-1s1 .5 1 1V32.3z">
                    </path>
                  </svg>
                  <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">Architectural & Furniture</h3>
                  <p className="mt-4 text-base text-gray-600 group-hover:text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
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



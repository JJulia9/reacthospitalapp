import React from "react";
import hospitalImage from "../../assets/images/hospital.jpg";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
     <Navigation />

<div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
  <img src={hospitalImage} className="absolute top-0 left-0 min-h-full ob opacity-90 max-w-full" alt=""/>
  <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-12 h-full items-center">
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

<div className="bg-tetriady py-20">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <div className="max-w-xl">
      <h2 className="font-black text-sky-950 text-3xl mb-4">Learn more about your body with us  </h2>
      <p className="text-base text-sky-950">Redirecting to the department page to see the instructions for medical treatments and blog.</p>
    </div>
    <button className="text-blue-900 uppercase py-3 text-blue-900 px-10 border border-blue-900  hover:bg-blue-900 hover:text-white ">Get started</button>
  </div>
</div>

<section className="max-w-7xl mx-auto mt-20 my-10">
      <article>
        <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
          <article className="relative w-full h-64 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1651613543604-195861551d15?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            
            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
              <h3 className="text-center">
                <a className="text-white text-2xl font-bold text-center" href="#">
                  <span className="absolute inset-0"></span>
                  + 109 964
                  <br />
                  happy patients
                </a>
              </h3>
              
            </div>
          </article>
          <article className="relative w-full h-64 bg-cover bg-center group overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
              <h3 className="text-center">
                <a className="text-white text-2xl font-bold text-center" href="#">
                  <span className="absolute inset-0"></span>
                 +1 094
                  <br />
                  doctors
                </a>
              </h3>
            </div>
          </article>
          <article className="relative w-full h-64 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
              <h3 className="text-center">
                <a className="text-white text-2xl font-bold text-center" href="#">
                  <span className="absolute inset-0"></span>
                  + 109 964
                  <br />
                  reviews
                </a>
              </h3>
            </div>
          </article>
        </section>
      </article>
    </section>



<div className="py-12 relative overflow-hidden bg-white">
  <div className="grid grid-cols-2 max-w-7xl mx-auto">
    <div className="w-full flex flex-col items-end pr-16 ">
      <h2 className="text-blue-900 font-bold text-2xl max-w-xs text-right mb-12 mt-10">Amusement Area</h2>
      <div className="h-full mt-auto overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1607211851821-8be3cd6146f0?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className="h-full w-full object-contain" alt=""/>
      </div>
    </div>
    
    <div className="py-20 bg-tetriady relative ">
      <div className="relative z-20 pl-12">
        <h2 className="text-blue-900 font-black text-5xl leading-snug mb-10">Our new <br/>child wing</h2>
        <p className="text-blue-900 text-sm">
          Purus in massa tempor nec. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Faucibus ornare suspendisse sed nisi lacus sed viverra. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.
        </p>
        <button className="mt-8 text-blue-900 uppercase py-3 text-sm px-10 border border-blue-900 hover:bg-white hover:bg-opacity-60">Play and Learn</button>
      </div>
    </div>
  </div>
</div>


   


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


    <Footer />

    </>
  );
};

export default Home;



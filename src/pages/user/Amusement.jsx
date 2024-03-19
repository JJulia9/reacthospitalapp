import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CardAmusement from "../../components/CardAmusement";
import gameData from "../../json/games.json";


const Amusement = () => {
    return (
        <>
            <Navigation />

            <div className="max-w-xl py-5 mx-8 ">
      <h1 className="font-black text-blue-900 text-4xl mb-4">Welcome back, </h1>
                  <p className="text-base text-l text-[#374151]">Play to learn about you body and win monthly prizes from The North</p>
            </div>
            
    <section className="bg-tetriady">
      <div className="py-10 sm:py-16 block lg:py-24 relative bg-opacity-50 z-40">
        <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="max-w-xl mx-auto text-center">
             
               
            </div>
            <div className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-6">
           
            {gameData.map((game, index) => (
            <CardAmusement 
             key={index}
             image={game.image}
             url={game.url}
             name={game.name}
             description={game.description}
            />
            ))}
            
            </div>
          </div>
        </div>
      </div>
    </section>

            <Footer />
        </>
    );
}

export default Amusement;

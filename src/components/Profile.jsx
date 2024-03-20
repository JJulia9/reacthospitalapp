import React from "react";

const Profile = () => {
  return (
    <>
     <a
                href="#"
                className="transition-all duration-1000 bg-white hover:bg-secondary hover:shadow-xl m-2 p-4 relative z-40 group"
              >
                <div className="absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-blue-900 group-hover:w-1/2"></div>
                <div className="py-2 px-9 relative">
                  <div className="text-center my-2">
                            <img class="h-16 w-16 rounded-full"
                                src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                alt="" />
                  </div>
                  <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white">Parient name</h3>
                  <p className="mt-2 text-base text-gray-600 group-hover:text-white"> something about person</p>
                </div>
              </a>
    </>
    )
}

export default Profile;
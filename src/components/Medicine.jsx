import React from "react";

const Medicine = () => {
    return (
        <div>
       
<div className="flex items-center justify-center py-8 px-4">

            <div className="max-w-6xl w-full shadow-lg">
                <div className="md:p-8 p-5 bg-white rounded-t">
                    <div className="px-4 flex items-center justify-between">
                        <span  tabindex="0" className="focus:outline-none  text-base font-bold text-blue-900">April 2024</span>
                        <div className="flex items-center">
                            <button aria-label="calendar backward" className="focus:text-gray-400 hover:text-gray-400 text-blue-900 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </button>
                        <button aria-label="calendar forward" className="focus:text-gray-400 hover:text-gray-400 ml-3 text-blue-900 "> 
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </button>

                        </div>
                    </div>
                    <div className="flex  items-center justify-between pt-12 overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-base font-medium text-center text-blue-900">Mo</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-base font-medium text-center text-blue-900">Tu</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-base font-medium text-center text-blue-900 ">We</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-base font-medium text-center text-blue-900 ">Th</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-base font-medium text-center text-blue-900 ">Fr</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-base font-medium text-center text-blue-900 ">Sa</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="w-full flex justify-center">
                                            <p className="text-base font-medium text-center text-blue-900 ">Su</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="pt-6">
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                    </td>
                                    <td className="pt-6">
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                    </td>
                                    <td className="pt-6">
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 font-medium">1</p>
                                        </div>
                                    </td>
                                    <td className="pt-6">
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 font-medium">2</p>
                                        </div>
                                    </td>
                                    <td className="pt-6">
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500">3</p>
                                        </div>
                                    </td>
                                    <td className="pt-6">
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500">4</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">5</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">6</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">7</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="w-full h-full">
                                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                <a  role="link" tabindex="0" className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 focus:bg-secondary hover:bg-secondary text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-blue-900 rounded-full">8</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">9</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 ">10</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 ">11</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">12</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">13</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">14</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">15</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">16</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 ">17</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 ">18</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">19</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">20</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">21</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">22</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">23</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 ">24</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 ">25</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">26</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">27</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">28</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">29</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500  font-medium">30</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="md:py-8 py-5 md:px-16 px-5 bg-gray-50 rounded-b">
{/*                     
                    <div className="px-4">
    <div className="border-b pb-4 border-gray-400 border-dashed">
        <p className="text-xs font-light leading-3 text-gray-500 ">9:00 AM</p>
        <a tabIndex="0" className="focus:outline-none text-lg font-medium leading-5 text-blue-900 mt-2">Take Medication A</a>
        <p className="text-sm pt-2 leading-4 leading-none text-gray-600 ">Take 1 pill with water after breakfast</p>
    </div>
    <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
        <p className="text-xs font-light leading-3 text-gray-500 ">12:00 PM</p>
        <a tabIndex="0" className="focus:outline-none text-lg font-medium leading-5 text-blue-900 mt-2">Take Medication B</a>
        <p className="text-sm pt-2 leading-4 leading-none text-gray-600 ">Take 2 pills with food</p>
    </div>
    <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
        <p className="text-xs font-light leading-3 text-gray-500 ">19:00 PM</p>
        <a tabIndex="0" className="focus:outline-none text-lg font-medium leading-5 text-blue-900 mt-2">Take Medication C</a>
        <p className="text-sm pt-2 leading-4 leading-none text-gray-600 ">Take 1 pill with a glass of water</p>
    </div>

</div> */}

<div className="px-4">
    <div className="border-b pb-4 border-gray-400 border-dashed flex items-center">
        <p className="text-xs font-light leading-3 text-gray-500 mr-2">9:00 AM</p>
        <div className="flex-1">
            <a tabIndex="0" className="focus:outline-none text-lg font-medium leading-5 text-blue-900 mt-2">Take Medication A</a>
            <p className="text-sm pt-2 leading-4 leading-none text-gray-600">Take 1 pill with water after breakfast</p>
        </div>
        <div className="flex-shrink-0 w-24 ml-4">
            <div className="relative h-2 rounded-full bg-gray-200">
                <div className="absolute top-0 left-0 h-2 rounded-full bg-blue-900" style={{ width: '50%' }}></div>
            </div>
            <p className="text-xs font-light leading-3 text-gray-500 mt-1 text-right">50%</p>
        </div>
    </div>
    <div className="border-b pb-4 border-gray-400 border-dashed pt-5 flex items-center">
        <p className="text-xs font-light leading-3 text-gray-500 mr-2">10:00 AM</p>
        <div className="flex-1">
            <a tabIndex="0" className="focus:outline-none text-lg font-medium leading-5 text-blue-900 mt-2">Take Medication B</a>
            <p className="text-sm pt-2 leading-4 leading-none text-gray-600">Take 2 pills with food</p>
        </div>
        <div className="flex-shrink-0 w-24 ml-4">
            <div className="relative h-2 rounded-full bg-gray-200">
                <div className="absolute top-0 left-0 h-2 rounded-full bg-blue-900" style={{ width: '75%' }}></div>
            </div>
            <p className="text-xs font-light leading-3 text-gray-500 mt-1 text-right">75%</p>
        </div>
    </div>
    <div className="border-b pb-4 border-gray-400 border-dashed pt-5 flex items-center">
        <p className="text-xs font-light leading-3 text-gray-500 mr-2">12:00 PM</p>
        <div className="flex-1">
            <a tabIndex="0" className="focus:outline-none text-lg font-medium leading-5 text-blue-900 mt-2">Take Medication C</a>
            <p className="text-sm pt-2 leading-4 leading-none text-gray-600">Take 1 pill with a glass of water</p>
        </div>
        <div className="flex-shrink-0 w-24 ml-4">
            <div className="relative h-2 rounded-full bg-gray-200">
                <div className="absolute top-0 left-0 h-2 rounded-full bg-blue-900" style={{ width: '25%' }}></div>
            </div>
            <p className="text-xs font-light leading-3 text-gray-500 mt-1 text-right">25%</p>
        </div>
    </div>
</div>





                     
                </div>
            </div>
        </div>
        </div>
    )
}

export default Medicine;
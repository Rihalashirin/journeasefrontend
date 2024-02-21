import React from 'react'

export const Booking = () => {
  return (
    <div className='adminbg'>
        {/* table... */}
        

<div class="relative overflow-x-auto pt-14 pe-5 ps-5">
    <table class="w-full text-sm text-left rtl:text-right text-white ">
        <thead class="text-xs text-orange-400 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Booking Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Agency
                </th>
                <th scope="col" class="px-6 py-3">
                   Location
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-gray-600 border-b  dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    <button className='bg-orange-500'>View Details</button>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4 ">
                    <button className='bg-orange-500'>View Details</button>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

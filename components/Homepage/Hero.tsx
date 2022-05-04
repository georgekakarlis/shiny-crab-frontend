import React from 'react'
import SearchBar from './SearchBar'

export default function Hero() {
  return (
      <div className='p-10'>
        <div className='container mx-auto h-80 p-10 bg-slate-300'>
        <h1>Workplace insights that matter</h1>
         <SearchBar />
         </div>
      </div>   
  )
}

import Link from 'next/link'
import React from 'react'
import Donut from './Donut'

const Category = () => {
  return (
   <section>
    <div className="tabs tabs-boxed flex justify-center p-4 gap-4 border-white">
  <a className="tab tab-bordered">Tab 1</a> 
  <a className="tab tab-active">Tab 2</a> 
  <a className="tab">Tab 3</a>
</div>
    <div className='grid grid-rows-4 grid-flow-col gap-4 justify-center p-2'>
    <Donut />
    <Donut />
    <Donut />
    <Donut />
    <Donut />
    <Donut />
    <Donut />
    <Donut />
    <Donut />
    <Donut />
    <Donut />
    <Donut />
    <Donut />
    <Donut />

    </div>
   </section>
  )
}

export default Category
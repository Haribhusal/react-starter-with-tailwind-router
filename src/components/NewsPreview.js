import React from 'react'
import {Link} from 'react-router-dom'

const NewsPreview = () => {
  return (
    <div className='newsWrapper'>

      <div className="heading flex justify-between items-center px-5 py-3 bg-gray-700 text-white">
        <h3 className="title">Recent News and Events</h3>
        <Link to="/">
          Find all <i className="las la-arrow-right"></i>
        </Link>
      </div>
      <div className="items px-5 py-3">
        <Link to="/">
          <div className="item flex mt-3 gap-3 border-[1px] py-3 px-5 rounded hover:shadow transition-all group">
            <div className="icon bg-gray-100 h-12 w-12 px-3 flex items-center justify-center rounded">

          <i class="las la-newspaper text-3xl"></i>
            </div>
          <div className="info">
            <h3 className="title group-hover:text-orange-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolor.
            </h3>
          </div>
          </div>
        </Link>
        <Link to="/">
          <div className="item flex mt-3 gap-3 border-[1px] py-3 px-5 rounded hover:shadow transition-all group">
            <div className="icon bg-gray-100 h-12 w-12 px-3 flex items-center justify-center rounded">

          <i class="las la-newspaper text-3xl"></i>
            </div>
          <div className="info">
            <h3 className="title group-hover:text-orange-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolor.
            </h3>
          </div>
          </div>
        </Link>
        <Link to="/">
          <div className="item flex mt-3 gap-3 border-[1px] py-3 px-5 rounded hover:shadow transition-all group">
            <div className="icon bg-gray-100 h-12 w-12 px-3 flex items-center justify-center rounded">

          <i class="las la-newspaper text-3xl"></i>
            </div>
          <div className="info">
            <h3 className="title group-hover:text-orange-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolor.
            </h3>
          </div>
          </div>
        </Link>
        <Link to="/">
          <div className="item flex mt-3 gap-3 border-[1px] py-3 px-5 rounded hover:shadow transition-all group">
            <div className="icon bg-gray-100 h-12 w-12 px-3 flex items-center justify-center rounded">

          <i class="las la-newspaper text-3xl"></i>
            </div>
          <div className="info">
            <h3 className="title group-hover:text-orange-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolor.
            </h3>
          </div>
          </div>
        </Link>
        <Link to="/">
          <div className="item flex mt-3 gap-3 border-[1px] py-3 px-5 rounded hover:shadow transition-all group">
            <div className="icon bg-gray-100 h-12 w-12 px-3 flex items-center justify-center rounded">

          <i class="las la-newspaper text-3xl"></i>
            </div>
          <div className="info">
            <h3 className="title group-hover:text-orange-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolor.
            </h3>
          </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NewsPreview
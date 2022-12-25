import React from 'react'

const CategoryItem = () => {
  return (
    <div className='categoryItemWrapper p-5 rounded-sm shadow my-4 hover:bg-orange-100 cursor-pointer w-full'>
        <i className="las la-eye text-5xl text-orange-700"></i>
        <h3 className="title">Category</h3>
    </div>
  )
}

export default CategoryItem
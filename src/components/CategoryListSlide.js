import React from 'react'

function CategoryListSlide(){
    return(
        <div className='CategoryListSlide'>
            <div className='CategoryListLine'></div>
            <ul className='CategoryList'>
                <li>
                    <span className='CategoryTitle'>REMEMBER</span>
                    <div className='CategoryDot'></div>
                </li>
                
                <li>
                    <span className='CategoryTitle'>CITY</span>
                    <div className='CategoryDot'></div>
                </li>
                
                <li>
                    <span className='CategoryTitle click'>NATURAL</span>
                    <div className='CategoryDot click'></div>
                </li>
                
                <li>
                    <span className='CategoryTitle'>SPACE</span>
                    <div className='CategoryDot'></div>
                </li>
                
              

            </ul>
        </div>
    )
}

export default CategoryListSlide;
import React from 'react'

function UnderArrow(){

    const handleScrollMove = () => {
        window.scrollBy({
          top: 780,
          behavior: 'smooth'
        })
      }

    return(
        <div className='UnderArrow ModalArrow' onClick={handleScrollMove} style={{cursor: 'pointer'}}>
           <div></div>
           <div></div>
           <div></div>
        </div>
    )
}

export default UnderArrow;
import React, {useState} from 'react'
import { GalleryData } from '../data/GalleryData'


const MainPage = () => {
  const [activeImg, setActiveImg] = useState(0);

  const handleClick = (index) => {
    setActiveImg(index);
  };
  return (
    <React.Fragment>
    <main>
      <div className=' mx-2 h-96 mt-10 grid grid-rows-3 border-4 border-red-500 md:w-6/12 md:mx-auto'>
        {/* active image */}
       <div className=' row-span-2'>
       <img src={GalleryData[activeImg].img} alt='image' className='w-full h-full'/>
       </div>

       {/* thumbnail grid */}
       <div className='grid grid-cols-5 border-t-2 border-red-500 '>
        {
          GalleryData.map((item, index) => {
            return(
              <div key={index}>
                <div 
                onClick={() =>handleClick(index)}
                className='h-full centered border-2 border-red-800'>
                  <img src={item.img} alt='image' className='h-14 w-18 md:w-24'/>
                </div>
              </div>
            )
          })
        }
       </div>
      </div>
    </main>
  </React.Fragment>
  )
}

export default MainPage
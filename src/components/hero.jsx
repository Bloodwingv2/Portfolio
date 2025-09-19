import { useState } from 'react';

const hero = () => {
    const [currentIndex, setcurrentIndex] = useState(1);
    const [hasclicked, sethasclicked] = useState(false);
    const [isloading, setisloading] = useState(true);
    const [loadedvideos, setloadedvideos] = useState(0);


    const handleMinivdclick = () => {

    }

  return (
    <div className='relative w-screen overflow-x-hidden'>
        <div id ="video-frame" className='relative z-10 w-screen overflow-hidden rounded-lg h-dvh bg-blue-75'>
            <div>
                <div className="absolute z-50 overflow-hidden rounded-lg cursor-pointer mask-clip-path absolute-center size-64">
                    <div>
                        MiniVideoPlayer
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default hero
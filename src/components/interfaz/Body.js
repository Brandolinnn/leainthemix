import React from 'react'
import video from "../../assets/video.mp4"
import ReactPlayer from 'react-player'





const body = () => {
    return (
        <>
            <div className='foto-banner' >
            <ReactPlayer
            playing
             loop
            
                
                    width="100%"
                    height="100%"
                    
                    display="block" 

                   
                    url={video}
                />
            
            

            
                


            </div>

        </>
    )
}

export default body
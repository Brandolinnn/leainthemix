import React from 'react'
import yt from "../../assets/youtubee.png"
import spoty from "../../assets/spotify.png"
import fb from "../../assets/facebook.png"
import ig from "../../assets/instagram.png"
import tw from "../../assets/twitter.png"
import tik from "../../assets/tiktok.png"


const Redes = () => {
  return (
    <>
        <h3 className='titulo-redes'>Redes sociales</h3>
        <div className='footer'>
        <ul className='footer'>
          <li >
            <a class=" footer-linkss" href="https://www.youtube.com/channel/UCfXkaVr7L_9VJXP-55XVcew" target="_blank"><img className=" footer-linkss" src={yt} alt="logoyt" /></a>
          </li>
          <li >
            <a class=" footer-linkss" href="https://open.spotify.com/artist/1r9N4yRWfeyTu4VEWU1yoP?si=iXBRhf7oTyuRuC0ogQk_YA" target="_blank"><img className=" footer-linkss" src={spoty} alt="logoyt" /></a>
          </li>
          <li >
            <a class=" footer-linkss" href="https://www.tiktok.com/@leainthemix" target="_blank"><img className=" footer-linkss" src={tik} alt="logoyt" /></a>
          </li>
          <li >
            <a class="  footer-linkss" href="https://www.facebook.com/Leainthemix2013" target="_blank"><img className=" footer-linkss" src={fb} alt="logoyt" /></a>
          </li>
          <li >
            <a class=" footer-linkss" href="https://www.instagram.com/leainthemix/" target="_blank"><img className=" footer-linkss" src={ig} alt="logoyt" /></a>
          </li>
          <li >
            <a class="  footer-linkss" href="https://twitter.com/LEAINTHEMIX" target="_blank"><img className=" footer-linkss" src={tw} alt="logoyt" /></a>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Redes
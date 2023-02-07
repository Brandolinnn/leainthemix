import React from 'react'
import yt from "../../assets/youtube.png"
import spoty from "../../assets/spoty.png"
import apple from "../../assets/apple.png"
import sound from "../../assets/soundcloud.png"
import pandora from "../../assets/pandora.png"
import deezer from "../../assets/deezer.png"
import amazon from "../../assets/amazon.png"
import wsp from "../../assets/wsp.png"
import correo from "../../assets/correo.png"


const footer = () => {
  return (
    <>
      <h3 className='titulo-redess'>LINKS DE MUSICA</h3>
      <div className='footer'>

        <ul className='footer'>
          <li >
            <a class=" footer-links" href="https://www.youtube.com/channel/UCfXkaVr7L_9VJXP-55XVcew" target="_blank"><img className=" footer-links" src={yt} alt="logoyt" /></a>
          </li>
          <li >
            <a class=" footer-links" href="https://open.spotify.com/artist/1r9N4yRWfeyTu4VEWU1yoP?si=iXBRhf7oTyuRuC0ogQk_YA" target="_blank"><img className=" footer-links" src={spoty} alt="logoyt" /></a>
          </li>
          <li >
            <a class=" footer-links" href="https://www.amazon.com/music/player/artists/B01M66D8B3/lea-in-the-mix" target="_blank"><img className=" footer-links" src={amazon} alt="logoyt" /></a>
          </li>
          <li >
            <a class="  footer-links" href="https://www.deezer.com/mx/artist/11228432" target="_blank"><img className=" footer-links" src={deezer} alt="logoyt" /></a>
          </li>
          <li >
            <a class=" footer-links" href="https://www.pandora.com/artist/lea-in-the-mix/ARqX9txcmxlhfxX" target="_blank"><img className=" footer-links" src={pandora} alt="logoyt" /></a>
          </li>
          <li >
            <a class="  footer-links" href="https://soundcloud.com/leainthemix-sc" target="_blank"><img className=" footer-links" src={sound} alt="logoyt" /></a>
          </li>
          <li >
            <a class="  footer-links" href="https://music.apple.com/ar/artist/lea-in-the-mix/1167164039" target="_blank"><img className=" footer-links" src={apple} alt="logoyt" /></a>
          </li>
        </ul>
      </div>

      <div className='footer-contacto' >
        <div className='footer'>
          <a class="  footer" href="https://api.whatsapp.com/send/?phone=01126720095&text&type=phone_number&app_absent=0" target="_blank"><img src={wsp} className="wsp" alt="logo" /></a>
          <p className='numero'> +54 9 11 2672-0095</p>
        </div>
        <div className='footer'>
          <img src={correo} className="correo-logo" alt="logo" />
          <p className='correo-letra'> Leainthemix.c@hotmail.com</p>
        </div>

      </div>



    </>
  )
}

export default footer
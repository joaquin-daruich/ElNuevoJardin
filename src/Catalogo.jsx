import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";



const Catalogo = () => {


    
    

  return (
      <>
    
        
    <img className='ElJardinDelH' src="https://elnuevonuevojardin.netlify.app/jardin_procesado.jpg" alt="El Jardin Del H" />

        <div className="presentacion">
          <h1  className="parrafo-titulos">Catalogo del Jardin del H!!</h1>
          <span className="parrafo-titulos">Hace click para verlos normalmente los videos suelen estar en el fondo de cada pagina!!</span>
        </div>
        <article className="catalogos">
        
          <div className="anime">
            
            <div className="animes">
              <h2 className="parrafo">Hentai interactivo de Bulma!👇</h2>
              <video 
                autoPlay
                muted
                loop
                onClick={() => (window.location.href = "https://eljardindelh.blogspot.com/2025/07/bulma-hentai-interactivo_25.html")}
                src="https://elnuevonuevojardin.netlify.app/telgram.mp4"
                alt="Ir al Hentai Interactivo de Bulma"
                style={{ cursor: "pointer" }}
              video/>
            </div>
            <div className="animes">
              <h2 className="parrafo">Doujin Hentai de Bulma!👇</h2>
              <img 
                onClick={() => (window.location.href = "https://eljardindelh.blogspot.com/2025/07/bulma-doujin_57.html")}
                src="https://elnuevonuevojardin.netlify.app/134.jpg"
                alt="Ir a ver un Doujin de Bulma"
                style={{ cursor: "pointer" }}
              img/>
            </div>
            <div className="animes">
              <h2 className="parrafo">Hentai de Naruto, Doujin y mas!!👇</h2>
              <video
                autoPlay
                muted
                loop
                onClick={() => (window.location.href = "https://eljardindelh.blogspot.com/2025/07/hentai-videos-y-doujin-de-naruto_24.html")}
                src="https://elnuevonuevojardin.netlify.app/336.mp4"
                alt="Ir a ver un poco de Hentai de Naruto"
                style={{ cursor: "pointer" }}
              video/>
            </div>
            <div className="animes">
              <h2 className="parrafo">Doujin Hentai de Nami y Yamato de One Piece!👇</h2>
              <img 
                onClick={() => (window.location.href = "https://eljardindelh.blogspot.com/2025/07/yamato-y-nami-doujin_45.html")}
                src="https://elnuevonuevojardin.netlify.app/89.jpg"
                alt="Ir a ver un Doujin Hentai de Nami y Yamato de One Piece"
                style={{ cursor: "pointer" }}
              img/>
            </div>
            <div className="animes">
              <h2 className="parrafo">Hentai de Boa Hancock!!👇</h2>
              <video
                autoPlay
                muted
                loop
                onClick={() => (window.location.href = "https://eljardindelh.blogspot.com/2025/08/boa-hancock-one-piece.html")}
                src="https://elnuevonuevojardin.netlify.app/1065.mp4"
                alt="Ir a ver  Hentai de Boa Hancock"
                style={{ cursor: "pointer" }}
              video/>
            </div>
            <div className="animes">
              <h2 className="parrafo">Hentai de Rukia Kuchiki de Bleach!!👇</h2>
              <video
                autoPlay
                muted
                loop
                onClick={() => (window.location.href = "https://eljardindelh.blogspot.com/2025/08/boa-hancock-one-piece.html")}
                src="https://elnuevonuevojardin.netlify.app/906.mp4"
                alt="Ir a ver  Hentai de Rukia Kuchiki"
                style={{ cursor: "pointer" }}
              video/>
            </div>
            <div className="animes">
              <h2 className="parrafo">Hentai de Kanao de Demon Slayer!👇</h2>
              <video
                autoPlay
                muted
                loop
                onClick={() => (window.location.href = "        https://eljardindelh.blogspot.com/2025/08/kanao-demon-slayer-hentairule34_35.html")}
                src="https://elnuevonuevojardin.netlify.app/814.mp4"
                alt="Ir a ver  Hentai de Kanao de Demon Slayer!"
                style={{ cursor: "pointer" }}
              video/>
            </div>
            <div className="animes">
              <h2 className="parrafo">Hentai de Raphtalia de Rising of Shield Hero!👇</h2>
              <video
                autoPlay
                muted
                loop
                onClick={() => (window.location.href = "        https://eljardindelh.blogspot.com/2025/08/raphtalia-de-rising-of-shield-hero_10.html")}
                src="https://elnuevonuevojardin.netlify.app/960.mp4"
                alt="Ir a ver Hentai de Raphtalia de Rising of Shield Hero"
                style={{ cursor: "pointer" }}
              video/>
            </div>
            <div className="animes">
              <h2 className="parrafo">Hentai de Mitsuri de Demon Slayer!👇</h2>
              <video
                autoPlay
                muted
                loop
                onClick={() => (window.location.href = "https://eljardindelh.blogspot.com/2025/08/mitsuri-de-demon-slayer.html")}
                src="https://elnuevonuevojardin.netlify.app/1016.mp4"
                alt="Ir a ver  Hentai de Mitsuri de Demon Slayer!"
                style={{ cursor: "pointer" }}
              video/>
            </div>
                        <div className="animes">
              <h2 className="parrafo">Hentai/Porno de Disney!👇</h2>
              <video
                autoPlay
                muted
                loop
                onClick={() => (window.location.href = "        https://eljardindelh.blogspot.com/2025/07/las-putas-putas-de-disney_22.html")}
                src="https://elnuevonuevojardin.netlify.app/242.mp4"
                alt="Ir a ver  Porno de Disney"
                style={{ cursor: "pointer" }}
              video/>
            </div>
          </div>
  
        </article>

      </>
    );
 
}




export default Catalogo

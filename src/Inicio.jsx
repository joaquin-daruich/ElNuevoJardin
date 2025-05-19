import React, { useEffect, useState, useRef  } from 'react';
import './App.css'
import { Link, Route, Routes, useParams } from 'react-router-dom';

const Inicio = () => {
     
const [androide , setAndroide] = useState('https://eljardindelh.netlify.app/es%20esta.png')
const [krillin , setKrillin] = useState('https://eljardindelh.netlify.app/krillin-quieto.gif')

  const [bulma2Image, setBulma2Image] = useState('https://eljardindelh.netlify.app/bulma2.png');
  const [isBulmaVisible, setIsBulmaVisible] = useState(false); // Controlar si la imagen está visible
  const bulmaRef = useRef(null); // Referencia a la imagen de Bulma

  // Intersection Observer para detectar si la imagen es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBulmaVisible(entry.isIntersecting); // Actualiza si la imagen está visible
      },
      { threshold: 0.1 } // Detecta solo si el 10% de la imagen está en la vista
    );

    if (bulmaRef.current) {
      observer.observe(bulmaRef.current);
    }

    return () => {
      if (bulmaRef.current) {
        observer.unobserve(bulmaRef.current);
      }
    };
  }, []);

  // Cambiar la imagen de Bulma solo si está visible
  useEffect(() => {
    if (!isBulmaVisible) return; // No ejecutar si la imagen no está visible entedi

    const interval = setInterval(() => {
      setBulma2Image((prevImage) =>
        prevImage === 'https://eljardindelh.netlify.app/bulma2.png'
          ? 'https://eljardindelh.netlify.app/bulma3.png'
          : 'https://eljardindelh.netlify.app/bulma2.png'
      );
    }, 400);

    return () => clearInterval(interval); // Limpiar el intervalo cuando la imagen ya no esté visible
  }, [isBulmaVisible]);



const sacarManos = () => {
  setAndroide('https://eljardindelh.netlify.app/cambio.png')
  setTimeout(() => {
    setAndroide('https://eljardindelh.netlify.app/es%20esta.png'); 
  }, 1050); 
}
const explotarAKrillin = () => {
  sacarManos()
  setKrillin('https://eljardindelh.netlify.app/krillin.gif')
  setTimeout(() => {
    setKrillin('https://eljardindelh.netlify.app/krillin-quieto.gif'); 
  }, 2800); 
}
const bulmaHabla = () => {
  const audio = new Audio('https://eljardindelh.netlify.app/final.mp3'); 
  audio.play();
}

const onClikBulma = {
  onClick : 'bulmaHabla()'
}
 



  const { segmento1, segmento2, segmento3 } = useParams();
  const slug = segmento3 || segmento2 || segmento1;

const [imagen , setImagen] = useState('')


  // const buscarABulma = () => {
  //   localStorage.setItem('bulmaSrc' , '')
  //  const elementos = document.getElementsByClassName("bulma")
  //  const bulmaSRC = localStorage.getItem('bulmaSrc')
  //   !bulmaSRC ?
  //       localStorage.setItem('bulmaSrc' , elementos[0])
  //       :
  //    bulmaSRC.src = "https://eljardindelh.netlify.app/bulma.png"
  // };


  if (slug) {


    return (
      <>
    
    
              
      </>
    );
  }


  else {
    return (
          <>
    <div className='inicio'>
      <span>Te dejo un link para ver el video!, leyendo un poco la pagina te cuento un poco de que trata el video :) Tambien si queres hace click en Krillin y mira a 18 ;)  </span>
      {<Link to={'https://drive.google.com/file/d/1ItsRRhb98HPBi0gMhTdzXOb8op76Ihm9/view?usp=drive_link'}>👉 Click aquí para ver el video!!Link directo sin publicidad!!!
      </Link>}
      <span>                (audio latino!)Link al video directo!! </span>
    </div>
    <img className='ElJardinDelH' src="https://eljardindelh.netlify.app/capaz.jpg" alt="El Jardin Del H" />

      <div className='titulos'>
      <h1 className='titulo1'>Androide Numero 18 de Dragon Ball Z </h1>
      <img className='androide-señalando' src="https://eljardindelh.netlify.app/se%C3%B1alar.png" alt="El Jardin Del H Twitter/X/" />
      <h2 className='titulo2'>Lo que ves a la  izquierda de todo es un FanArt de numero 18, pero si tocas a Krillin puede que tenga un secreto...</h2>
      
      </div>
     

          <img className='androide18'  src={androide} alt="Androide número 18" />





      <div className='contenedorDeParrafos'>
      <div className='contenedorDeParrafo2'>
      <p className='parrafo'>Bueno primero si te preguntas acerca del video que podes descargar arriba, tengo un adelanto del video en nuestro X, que es: "kushruchix" , estamos como "El Jardin Del H"</p>
      <p className='parrafo'>Pero.. De que trata el video??</p>
      <p className='parrafo'>El Video como quizas viste en la preview que subi a twitter, cuenta la aventura que tuvieron Bulma y Androide 18, (las voces del video estan en latino!) fueron de compras pero tuvieron un problema...</p>
      <p className='parrafo'>El auto no arrancaba! y encima de todo estaban solas, ni Goku, Ni Vegetta, ni Krillin, ni si quiera Yamcha, menos que menos Piccoro, o por lo menos Gohan, pero no nadie!!</p>
      <img className='Bulmay18' src='https://eljardindelh.netlify.app/03.jpg'  alt="Bulma y Numero 18 van de compras" ></img>
      <p className='parrafo'>Estan desesperadas y encima en medio de la nada, 18 sugiere buscar algunos hombres que puedan ayudarlas, y Bulma ve a lo lejos una casa dudosa, entonces le dice a 18 de ir a pedir ayuda que alla hay unos hombres, los hombres sospechosos ven por la ventana y emocionados salen a hablar con Bulma, Bulma le cuenta la situacion a los siniestros hombres, a lo que responden que tienen sus herramientas adentro de la casa, peroooo que estan muy cansados para ir a buscarlos ellos... </p>
      <p className='parrafo'>Asi que le preguntan a Bulma si puede ir a buscarlos por ellos, todo bastante por no decir MUY sospechoso, a lo que 18 empieza a dudar, pero Bulma con inocencia le dice que vayan... </p>
      <video className='ElVideo' src='https://eljardindelh.netlify.app/pesa.mp4'  controls ></video>
      <p className='parrafo'> Como se puede ver en el video, Bulma termina persuadiendo a 18 a pesar de las dudas y van a buscar las herramientas </p>
      <p className='parrafo'>Pero bueno... obviamente el escenario no era para nada favorable para estas 2, el interior de la casa era de lo mas extraño y sospechoso, parecia como una especie de calabozo.. </p>
      <p className='parrafo'>Y en medio de la sorpresa, le apagan la luz, le cierran la puerta, y bueno el resto de la historia la podes ver en el video... :) </p>
      <img onClick={bulmaHabla} className='bulma' src="https://eljardindelh.netlify.app/bulma.png" alt="Bulma Dragon Ball Z" />
      </div>
      <div className='contenedorDeParrafo3'>
      <p>Hace Click en Bulma puede que pase algo ;)</p>
      <div className='contenedorDeParrafo4'>
      <img  ref={bulmaRef} className='bulma2' src={bulma2Image}  alt="Bulma FanArt " ></img>
      <p>Bueno hasta aqui llegamos, espero disfruten mucho el video!! Nos vemos y suerte!!</p>
      
      </div>

          <img className='krilin' onClick={explotarAKrillin }    src={krillin} alt="Krillin" />

      </div>
      
      </div>
</>
    );
  }


}


export default Inicio
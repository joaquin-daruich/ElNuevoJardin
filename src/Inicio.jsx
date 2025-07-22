import { useEffect, useState, useRef  } from 'react';
import './App.css'
import { Link,  useParams } from 'react-router-dom';

const Inicio = () => {
     
const [androide , setAndroide] = useState('https://eljardindelh.netlify.app/es%20esta.png')
const [krillin , setKrillin] = useState('https://eljardindelh.netlify.app/krillin-quieto.gif')
const [esEntradaInteractiva, setEsEntradaInteractiva] = useState(false);

useEffect(() => {
  const path = window.location.href;
  if (path.includes('bulma-hentai-interactivo')) {
    setEsEntradaInteractiva(true);
  }
}, []);

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



  const { segmento1, segmento2, segmento3 } = useParams();
  const slug = segmento3 || segmento2 || segmento1;

  const [imagenBulma , setimagenBulma] = useState("/perfecta33.png")
  const [transformarAVideo , setransformarAVideo] = useState(
        <img className='bulma2' src={imagenBulma} alt="" />)
  
  const listaDePalabrasClaves = ['follada' , 'chupando polla(video)' , 'otro' , 'follada(video)', 'futanari' , 'futanari(video)' ,'otro(video)' , 'chupando polla' ]
  
  
  const rangosPorPalabra = {
    'follada': [21, 46],
    'follada(video)': [6, 20],
    'chupando polla': [1, 20],
    'chupando polla(video)': [1,5],
    'otro': [47, 67],
    'otro(video)': [22, 24],
    'futanari': [333, 338],
    'futanari(video)': [333, 339],
  };
  
  const [videOFoto,setVideOFoto] = useState('')
  const [numerosUsados, setNumerosUsados] = useState({}); // en vez de array, un objeto
  
  const usarNumeroNoUsadoPorPalabra = (palabra, min, max) => {
    const total = max - min + 1;
    const usadosActuales = numerosUsados[palabra] || [];
  
    let usados = [...usadosActuales];
  
    // Reiniciar si ya se usaron todos
    if (usados.length >= total) {
      console.log(`Se usaron todos los números para "${palabra}", reiniciando.`);
      usados = [];
    }
  
    let numeroNuevo;
    let intentos = 0;
    do {
      numeroNuevo = Math.floor(Math.random() * total) + min;
      intentos++;
      if (intentos > 100) {
        console.warn("Demasiados intentos para generar número único.");
        break;
      }
    } while (usados.includes(numeroNuevo));
  
    // Guardar el nuevo número como usado
    usados.push(numeroNuevo);
    setNumerosUsados(prev => ({ ...prev, [palabra]: usados }));
  
    return numeroNuevo;
  };
   
  
  const transformarImagen = (palabra , palabraAleatoria ) => {
    if(listaDePalabrasClaves.includes(palabra)){
      const [min, max] = rangosPorPalabra[palabra];
        const numeroAleatorio = usarNumeroNoUsadoPorPalabra(palabra, min, max);
  
          videOFoto == '.mp4' ?
        setransformarAVideo(
          <video className='bulma2' src={palabra + numeroAleatorio + videOFoto} controls></video>
        )
        :
        setransformarAVideo(
          <img className='bulma2' src={palabra + numeroAleatorio + videOFoto} alt="" />
        )
      console.log(transformarAVideo)
  
      return
    }
    else{
  
   
    const [min, max] = rangosPorPalabra[palabraAleatoria];
    const numeroAleatorio = usarNumeroNoUsadoPorPalabra(palabraAleatoria, min, max);
      videOFoto == '.mp4' ?
        setransformarAVideo(
          <video className='bulma2' src={palabraAleatoria + numeroAleatorio + videOFoto} controls></video>
        )
        :
        setransformarAVideo(
          <img className='bulma2' src={palabraAleatoria + numeroAleatorio + videOFoto} alt="" />
        )
     return
    }
  }
  
  const [textoInput , setTextoInput] = useState('')
  
  
  const setearAmbos = ( palabra) => {
  
  
    // excluir las chanchadas:
    const listaSinGuarradas = []
     for(let palabras of listaDePalabrasClaves){
      if (palabras.includes('futanari')){
        ''
      } 
      else{
        listaSinGuarradas.push(palabras)
      }
    }
  
    // diferenciar entre video o imagen:
    const soloPalabrasSinVideo = listaSinGuarradas.filter(p => !p.includes('(video)'))
    const soloPalabrasConVideo = listaSinGuarradas.filter(p => p.includes('(video)'))
  
    // crear palabras aleatorias por las dudas
    const palabraAleatoriaVideo  = soloPalabrasConVideo[
    Math.floor(Math.random() * soloPalabrasConVideo.length)
  ]
    const palabraAleatoriaSinVideo  = soloPalabrasSinVideo[
    Math.floor(Math.random() * soloPalabrasSinVideo.length)
  ]
  
   
  videOFoto == ".mp4" ?
    transformarImagen(palabra , palabraAleatoriaVideo )
    :
    transformarImagen(palabra , palabraAleatoriaSinVideo)
  }
  
  const cambiarimagen = (e) => {
  const textoUsuario = e.toLowerCase()
    textoUsuario.includes("(video)") ? 
      setVideOFoto(".mp4")
      :
      setVideOFoto(".png")
  setTextoInput(textoUsuario)
  }
  
  
   
  
  const mandarForm = (e) => {
   e.preventDefault();
  
    // Guardar el prompt en Netlify Forms
    const form = e.target;
  
    // Crear objeto con datos
    const data = new FormData(form);
  
    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        console.log("Prompt enviado a Netlify correctamente.");
        setearAmbos(textoInput); // Ejecutar tu lógica de imagen
      })
      .catch((error) => alert(error));
  
  }
     


  if (slug && !esEntradaInteractiva) {
  return (
    <>
    </>
  );
}



  if (slug && esEntradaInteractiva) {


    return (
      <>
    
          <form name="promptForm" netlify hidden>
        <input type="text" name="prompt" />
      </form>
   
    <img className='ElJardinDelH' src="https://elnuevonuevojardin.netlify.app/jardin_procesado.jpg" alt="El Jardin Del H" />



      <h1 className='parrafo'>Bulma</h1>
<form
  name="promptForm"
  method="POST"
  data-netlify="true"
  onSubmit={mandarForm}
>
  <input type="hidden" name="form-name" value="promptForm" />
  <input
    placeholder="Escribí como la querés a bulma"
    type="text"
    name="prompt" // 👈 Esto es lo que se va a guardar en Netlify
    value={textoInput}
    onChange={(e) => cambiarimagen(e.target.value)}
  />
  <button type="submit">Enviar</button>
</form>
    
      {transformarAVideo}

              
      </>
    );
  }


  else {
    return (
          <>
    <div className='inicio'>
      <span>Te dejo un link para ver el video!, leyendo un poco la pagina te cuento un poco de que trata el video :) Tambien si queres hace click en Krillin y mira a 18 ;)  </span>
      {<Link to={'https://gofile.io/d/BfUUAD'}>👉 Click aquí para ver el video!!Link directo sin publicidad!!!
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
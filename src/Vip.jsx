import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Vip = () => {

    const { vip } = useParams();
    
  const { segmento1, segmento2, segmento3 } = useParams();
  const slug = segmento3 || segmento2 || segmento1 
    
    

  const [imagenBulma , setimagenBulma] = useState("https://elnuevonuevojardin.netlify.app/perfecta33.png")
  const [transformarAVideo , setransformarAVideo] = useState(
        <img className='bulma2' src={imagenBulma} alt="" />)
  
  const listaDePalabrasClaves = ['follada' , 'chupando polla(video)' , 'otro' , 'follada(video)', 'futanari' , 'futanari(video)' ,'otro(video)' , 'chupando polla' ]
  
  const url = 'https://elnuevonuevojardin.netlify.app/'
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
        console.log('si incluye')
  
          videOFoto == '.mp4' ?
        setransformarAVideo(
          <video className='bulma2' src={url + palabra + numeroAleatorio + videOFoto} controls></video>
        )
        :
        setransformarAVideo(
          <img className='bulma2' src={ url + palabra + numeroAleatorio + videOFoto} alt="" />
        )
     
  
      return
    }
    else{
    const [min, max] = rangosPorPalabra[palabraAleatoria];
    const numeroAleatorio = usarNumeroNoUsadoPorPalabra(palabraAleatoria, min, max);
      videOFoto == '.mp4' ?
        setransformarAVideo(
          <video className='bulma2' src={url +palabraAleatoria + numeroAleatorio + videOFoto} controls></video>
        )
        :
        setransformarAVideo(
          <img className='bulma2' src={url +palabraAleatoria + numeroAleatorio + videOFoto} alt="" />
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
  
   
  if(videOFoto == ".mp4") {
    transformarImagen(palabra , palabraAleatoriaVideo )
    console.log('va por aca (es video)')
  }
    else{
    transformarImagen(palabra , palabraAleatoriaSinVideo)
    }
  }
  
  const cambiarimagen = (e) => {
  const textoUsuario = e.toLowerCase()
    textoUsuario.includes("(video)") ? 
      setVideOFoto(".mp4")
      :
      setVideOFoto(".png")
  setTextoInput(textoUsuario)
  }
  
  
   
  
  const mandarForm = async (e) => {
   e.preventDefault();
     setearAmbos(textoInput)
    try {
      const res = await fetch('https://jardin-secreto-nbs9.onrender.com/enviar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensaje: textoInput })
      });

      const texto = await res.text();
      document.getElementById('respuesta').textContent = texto;
    } catch {
      document.getElementById('respuesta').textContent = 'Error al enviar.';
    }

    setTextoInput("");
  
  
   
  }
  ;

 

  
  
    if (slug && vip.includes('vip-bulma33')){
  return (
      <>
    
        <span className="parrafo">Bienvenido al VIP gracias por la ayuda al jardin!!!
         ATENCION SI QUERES VOLVER A ENTRAR AL VIP SIMPLEMENTE ESCRIBI "/vip-bulma33" ADELANTE DE LA URL DEL BLOG.</span> 
   
    <img className='ElJardinDelH' src="https://elnuevonuevojardin.netlify.app/jardin_procesado.jpg" alt="El Jardin Del H" />


<form
  
  onSubmit={mandarForm}
>
  <input
    placeholder="Escribí como la querés a bulma"
    type="text"
    value={textoInput}
    onChange={(e) => cambiarimagen(e.target.value)}
  />
  <button type="submit">Enviar</button>
</form>
    
      {transformarAVideo}

              
      </>
    );
 
}

else{
    console.log('no tenes vip')
}

}


export default Vip
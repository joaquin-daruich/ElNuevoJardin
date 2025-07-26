import { useEffect, useState } from 'react';

const ContadorRegresivo = ({ onFinalizar }) => {
  const [tiempoRestante, setTiempoRestante] = useState(0);

  useEffect(() => {
    // Cargar hora final desde localStorage
    const finGuardado = Number(localStorage.getItem('finContador'));

    // Si no hay, se guarda ahora + 3 horas
    if (!finGuardado) {
      const fin = Date.now() + 3 * 60 * 60 * 1000;
      localStorage.setItem('finContador', fin);
      setTiempoRestante(fin - Date.now());
    } else {
      const diferencia = finGuardado - Date.now();
      if (diferencia <= 0) {
        localStorage.removeItem('finContador');
        localStorage.setItem('contador', 0);
        onFinalizar();
      } else {
        setTiempoRestante(diferencia);
      }
    }
  }, []);

  // Iniciar intervalo de cuenta regresiva
  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempoRestante((prev) => {
        if (prev <= 1000) {
          clearInterval(intervalo);
          localStorage.removeItem('finContador');
          localStorage.setItem('contador', 0);
          onFinalizar();
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const formatTiempo = (ms) => {
    const totalSegundos = Math.floor(ms / 1000);
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
  };

  return (
  <>
      <span className='parrafo-especial'> Tiempo restante para volver a usar a Bulma: </span>
      <span className='parrafo-especial' style={{ fontSize: '2rem', fontWeight: 'bold' }}>{formatTiempo(tiempoRestante)}</span>
</>
  );
};

export default ContadorRegresivo;
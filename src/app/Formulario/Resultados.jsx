import './resultado.scss'

export default function Resultados({
  tasaDeInteres,
  plazo,
  PagoMensual,
  prestamo,
}) {
  return (
    <>
      <div className="container">
        <h2 className='container__title'>Resultado de la simulación</h2>
        <p className='container__result'>
          Valor Solicitado: <span className='simulator'>$ {prestamo.toLocaleString()}</span>
        </p>
        <p className='container__result'>
          Sistema de Amortización: <span className='simulator'>Cuota fija</span>
        </p>
        <p className='container__result'>
          Tasa de interés: <span className='simulator'>{tasaDeInteres}%</span>
        </p>
        <p className='container__result'>
          Plazo: <span className='simulator'>{plazo} meses</span>
        </p>
        <p className='container__result'>
          Valor Cuota Mensual: <span className='simulator'>${PagoMensual.toLocaleString()}</span>
        </p>
      </div>
      <a className='button' href="#">Solicite su crédito</a>
    </>
  );
}

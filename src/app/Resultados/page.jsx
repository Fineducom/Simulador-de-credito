export default function Resultados({
  tasaDeInteres,
  plazo,
  PagoMensual,
  prestamo,
}) {
  return (
    <>
      <div className="container">
        <h2>Resultado de la simulación</h2>
        <p>
          Valor Solicitado:<span>$ {prestamo.toLocaleString()}</span>
        </p>
        <p>
          Sistrma de Amortización:<span>Cuota fija</span>
        </p>
        <p>
          Tasa de interes:<span>{tasaDeInteres}%</span>
        </p>
        <p>
          Plazo:<span>{plazo}</span>
        </p>
        <p>
          Valor Cuota Mensual:<span>${PagoMensual.toLocaleString()}</span>
        </p>
      </div>
      <div className="container">
        <a href="#">Solicite su crédito</a>
      </div>
    </>
  );
}

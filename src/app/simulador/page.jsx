import Formulario from "./Formulario/page";
import "./simulador.scss";
export default function page() {
  return (
    <>
      <div className="contenedor">
        <header className="encabezado">
          <h1 className="encabezado__titulo">Calculadora de Crédito</h1>
        </header>
        <section className="main">
          <Formulario />
        </section>
        <main className="main">
          <div>
            <h2>Resultado de la simulación</h2>
            <p>
              Valor Solicitado:<span>aqui va el valor</span>
            </p>
            <p>
              Sistrma de Amortización:<span>Cuota fija</span>
            </p>
            <p>
              Plazo:<span>aquiva el valor</span>
            </p>
            <p>
              Valor Cuota Mensual:<span>aqui va el valor</span>
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

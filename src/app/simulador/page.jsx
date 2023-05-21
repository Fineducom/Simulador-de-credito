import Formulario from "../Formulario/page";
import "./simulador.scss";
export const metadata = {
  title: "Fineducom | Simulador de credito",
  description: "creado por Fineducom",
};
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
      </div>
    </>
  );
}

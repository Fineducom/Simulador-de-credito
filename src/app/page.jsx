import Link from "next/link";
import "./Home.scss";
export default function HomePage() {
  return (
    <>
      <header className="header container">
        <h1 className="header__titulo">Simulador de crédito</h1>
      </header>
      <section className="bienvenida container">
        <p className="bienvenida__descripcion">
          ¡Hola! Le damos la bienvenida. Simule el valor de la cuota o el monto
          que puede solicitar de acuerdo a sus necesidades de crédito o
          capacidades de pago.
        </p>
      </section>
      <main className="principal container">
        <div>
          <h2 className="principal__titulo">Caracterpisticas</h2>
        </div>
        <div className="principal__grupo">
          <div className="principal__grupo-card">
            <i className="principal__grupo-icon bx bx-money"></i>
            <p className="principal__grupo-texto">
              Monto mínimo{" "}
              <span className="principal__grupo-span">$500.000</span>
            </p>
          </div>
          <div className="principal__grupo-card">
            <i className="principal__grupo-icon bx bxs-user"></i>
            <p className="principal__grupo-texto">
              Edad entre los{" "}
              <span className="principal__grupo-span">18 y 84</span>
              {""} años
            </p>
          </div>
          <div className="principal__grupo-card">
            <i className="principal__grupo-icon bx bx-calendar"></i>
            <p className="principal__grupo-texto">
              Plazo entre <span className="principal__grupo-span">6 y 24</span>
              {""} meses
            </p>
          </div>
        </div>
        <p className="principal__text-info">
          Aprobación sujeta a estudio de crédito.
        </p>
        <Link href={"/simulador"} className="principal__btn">
          Continuar
        </Link>
      </main>
    </>
  );
}

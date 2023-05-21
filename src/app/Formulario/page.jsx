"use client";
import { useState } from "react";
import Resultados from "./Resultados";
import "./formulario.scss";

export default function Formulario() {
  const [prestamo, setPrestamo] = useState(500000);
  const [tasaDeInteres, setTasaDeInteres] = useState("");
  const [plazo, setPlazo] = useState("");
  const [pagoMensual, setPagoMensual] = useState(0);

  // State for loading the spinner

  const [laoding, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tasaInteresMensual = tasaDeInteres / plazo;
    const denominador = 1 - Math.pow(1 + tasaInteresMensual, -prestamo);
    const pagoMensual = (prestamo * tasaInteresMensual) / denominador;
    setPagoMensual(pagoMensual);
  };

  function handleChange(event) {
    const value = event.target.value;
    if (/^\d{0,2}$/.test(value)) {
      setPlazo(value);
    }
  }

  // aquí agrego el cambio de estado del input range
  function handleValor(event) {
    const value = parseFloat(event.target.value);
    const nuevoValor = value * 500000;
    setPrestamo(nuevoValor);
  }

  // Funcion the loading
  function loadingSimulator() {
    setLoading(true);
  }

  return (
    <>
      <div className="container">
        <form className="formulario" onSubmit={handleSubmit}>
          <div className="formulario__grupo">
            <label className="formulario__grupo-label">Tipo de Crédito</label>
            <select
              value={tasaDeInteres}
              onChange={(e) => setTasaDeInteres(parseFloat(e.target.value))}
              className="formulario__grupo-select"
            >
              <option value="">Seleccione una opcion</option>
              <option value="0.0322">Salga del Hueco</option>
              <option value="0.03">Despegue</option>
              <option value="0.029">Creciendo</option>
              <option value="0.026">Te Apoyamos</option>
              <option value="0.0214">Pa los nuestros</option>
            </select>
          </div>
          <div className="formulario__grupo">
            <label htmlFor="plazo" className="formulario__grupo-label">
              Plazo mensual:
            </label>
            <input
              type="texto"
              max={"48"}
              value={plazo}
              onChange={handleChange}
              name="plazo"
              id="plazo"
              placeholder="Ej: 6"
              className="formulario__grupo-input formulario__grupo-input--modifire"
            />
          </div>
          <div className="formulario__grupo formulario__range">
            <label htmlFor="monto" className="formulario__grupo-label">
              ¿Cuanto necesitas?
            </label>
            <input
              type="range"
              min={"1"}
              max={"10"}
              value={prestamo / 500000}
              onChange={handleValor}
              name="monto"
              id="monto"
              className="formulario__grupo-input formulario__grupo-input--range"
            />
            <span className="formulario__grupo-span">
              $ {prestamo.toLocaleString()}{" "}
            </span>
          </div>
          <button
            type="submit"
            className="formulario__btn-simular"
            onClick={loadingSimulator}
          >
            Simular Crédito
          </button>
        </form>

        {/* Condition of the loading */}
        {laoding && (
          <Resultados
            tasaDeInteres={tasaDeInteres}
            PagoMensual={pagoMensual}
            plazo={plazo}
            prestamo={prestamo}
          />
        )}
      </div>
    </>
  );
}

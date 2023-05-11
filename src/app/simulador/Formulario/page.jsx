"use client";
import { useState } from "react";
import "./formulario.scss";
export default function Formulario() {
  const [inputValue, setInputValue] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    if (/^\d{0,2}$/.test(value)) {
      setInputValue(value);
    }
  }
  // aquí agrego el cambio de estado del input range
  const [valor, setValor] = useState(500000);
  function handleValor(event) {
    const value = parseFloat(event.target.value);
    const newValor = value * 500000;
    setValor(newValor);
  }
  return (
    <>
      <form className="formulario">
        <div className="formulario__grupo">
          <label className="formulario__grupo-label">Tipo de Crédito</label>
          <select className="formulario__grupo-select">
            <option value="">Seleccione una opcion</option>
            <option value="3.22">Salga del Hueco</option>
            <option value="3.00">Despegue</option>
            <option value="2.90">Creciendo</option>
            <option value="2.60">Te Apoyamos</option>
            <option value="2.14">Pa'los nuestros</option>
          </select>
        </div>
        <div className="formulario__grupo">
          <label htmlFor="plazo" className="formulario__grupo-label">
            Plazo:
          </label>
          <input
            type="texto"
            max={"48"}
            value={inputValue}
            onChange={handleChange}
            name="palzo"
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
            value={valor / 500000}
            onChange={handleValor}
            name="monto"
            id="monto"
            className="formulario__grupo-input formulario__grupo-input--range"
          />
          <p className="formulario__grupo-span">
            <span>$</span> {valor.toLocaleString()}{" "}
          </p>
        </div>
        <button type="submit" className="formulario__btn-simular">
          Simular Crédito
        </button>
      </form>
    </>
  );
}

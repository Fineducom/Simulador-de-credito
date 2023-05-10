"use client";
import "./formulario.scss";
export default function Formulario() {
  return (
    <>
      <form className="formulario">
        <div className="formulario__grupo">
          <label className="formulario__grupo-label">Tipo de Crédito</label>
          <select className="formulario__grupo-select">
            <option value="">Seleccione una opcion</option>
            <option value="Salga del huego">Salga del Hueco</option>
            <option value="Despegue">Despegue</option>
            <option value="Creciendo">Creciendo</option>
            <option value="Te Apoyamos">Te Apoyamos</option>
          </select>
        </div>
        <div className="formulario__grupo">
          <label htmlFor="plazo" className="formulario__grupo-label">
            Plazo:
          </label>
          <input
            type="text"
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
            name="monto"
            id="monto"
            className="formulario__grupo-input formulario__grupo-input--range"
          />
          <span className="formulario__grupo-span">aquí va el monto</span>
        </div>
        <button type="submit" className="formulario__btn-simular">
          Simular Crédito
        </button>
      </form>
    </>
  );
}

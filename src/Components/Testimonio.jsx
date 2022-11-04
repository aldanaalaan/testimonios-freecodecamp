import React from "react";
import "../Stylesheets/Testimonio.css";

function Testimonio({
  nombre = "Neyda Martinez",
  pais = "México",
  puesto = "Estudiante",
  empresa = "Instituto Politecnico Nacional",
  texto = "Sit reprehenderit officia reprehenderit consequat nulla ullamco aliquip pariatur est. Incididunt amet occaecat dolor amet laborum laborum ea consequat anim culpa id. Id nulla aliqua occaecat voluptate nostrud in ex velit nostrud sint excepteur. Sint et in commodo excepteur laboris aliqua voluptate.",
}) {
  return (
    <div className="contenedor-testimonio">
      <img
        src={require(`../Images/testimonio-${nombre
          .substring(0, nombre.indexOf(" "))
          .toLowerCase()}.png`)}
        alt={`Foto de ${nombre.substring(0, nombre.indexOf(" "))}`}
        className="imagen-testimonio"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{nombre}</strong> de {pais}
        </p>
        <p className="cargo-testimonio">
          {puesto} en <strong>{empresa}</strong>
        </p>
        <p className="texto-testimonio">"{texto}"</p>
      </div>
    </div>
  );
}

export default Testimonio;

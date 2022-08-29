import React from "react";
import { Helmet } from "react-helmet";
import logo from "../../assets/images/logo_aqnitio.png";

function LayoutHelmet({ section, description }) {
  return (
    <Helmet>
      {section && <title>{`Diagnóstico Aqnitio | ${section}`}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="icon" href={logo} />
      <html lang="es" />
    </Helmet>
  );
}

export default LayoutHelmet;

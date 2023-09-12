import React from "react";
import { FooterComponent } from "../styles";
const Footer = () => {
  return (
    <FooterComponent>
      <div className="footer-content">
        <ul className="footer-links">
          <li>
            <a href="#">Preguntas frecuentes</a>
          </li>
          <li>
            <a href="#">Centro de ayuda</a>
          </li>
          <li>
            <a href="#">Cuenta</a>
          </li>
          <li>
            <a href="#">Medios de comunicación</a>
          </li>
          <li>
            <a href="#">Relaciones con inversores</a>
          </li>
          <li>
            <a href="#">Empleo</a>
          </li>
          <li>
            <a href="#">Canjear tarjetas de regalo</a>
          </li>
          <li>
            <a href="#">Privacidad</a>
          </li>
          <li>
            <a href="#">Avisos legales</a>
          </li>
          <li>
            <a href="#">Cookies</a>
          </li>
          <li>
            <a href="#">Preferencias de cookies</a>
          </li>
          <li>
            <a href="#">Información corporativa</a>
          </li>
          <li>
            <a href="#">Contáctanos</a>
          </li>
          <li>
            <a href="#">Términos de uso</a>
          </li>
          <li>
            <a href="#">Pruebas de velocidad</a>
          </li>
          <li>
            <a href="#">Avisos legales de la aplicación</a>
          </li>
        </ul>
        <div className="footer-language">
          <select title="No tiene un funcionalidad real, es un ejemplo estetico.">
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
          <select title="No tiene un funcionalidad real, es un ejemplo estetico.">
            <option value="us">Argentina</option>
            <option value="ca">United States</option>
            <option value="mx">Mexico</option>
          </select>
        </div>
      </div>
    </FooterComponent>
  );
};

export default Footer;

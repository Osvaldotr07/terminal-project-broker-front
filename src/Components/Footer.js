import React from 'react'

import { FooterWrapper, FooterUl, FooterLi } from '../assets/styles/FooterStyles'

const Footer = () => (
  <>
    <FooterWrapper>
      <FooterUl>
        <FooterLi>Contacto</FooterLi>
        <FooterLi>Privacidad</FooterLi>
        <FooterLi>Términos de uso</FooterLi>
        <FooterLi>Accesibilidad</FooterLi>
        <FooterLi>Preferencias de Cookies</FooterLi>
      </FooterUl>
    </FooterWrapper>
  </>
);

export default Footer
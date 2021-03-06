import React from 'react'

import { Content, Button } from 'carbon-components-react'
import LogoHero from '../assets/images/ibm-hero.jpg'
import { TitleArticle, Description } from '../assets/styles/General-styles';
import { Link } from 'react-router-dom'


const StoryContent = ({title}) => {
  const content = (
    <div style={{backgroundColor: '#161616', color: 'white', padding: 20, marginBottom: 150}}>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col bx--col-sm-4">
            <img src={LogoHero} alt="" width="100%"></img>
          </div>
          <div className="bx--col">
            <TitleArticle style={{ margin: '0 0 30px', color: 'white' }}>{title}</TitleArticle>
            <Description style={{color: '#fff'}}>
              Bienvenido al sistema de solicitudes para poder obtener sistemas informáticos de IBM. Con este sistema será más fácil poder realizar la solicitud para poder ser una empresa verificada por IBM y poder gozar de todos los beneficios.
              <br />
              <br />
              Como usuario podrás generar un formulario el cual será revisado por nuestro personal el cual dará el visto bueno y todo proceso podrás verlo en este sistema mediante la opción formulario creados en el cual podrás denotar las observaciones que el validador escribió al igual que serás notificado por correo electrónico al email registrado en el formulario
              <br />
              <br />
              <Link to='/form'>
                <Button className="button-sign-in">
                      Crear una forma
                </Button>
              </Link>
            </Description>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Content id="main-content" style={{padding:0}}>
      {content}
    </Content>
  );
};

export default StoryContent
import React from 'react'

import { Content } from 'carbon-components-react'
import LogoHero from '../assets/images/ibm-hero.jpg'
import { TitleArticle, Description } from '../assets/styles/General-styles';


const StoryContent = ({title}) => {
  const content = (
    <div style={{backgroundColor: '#161616', color: 'white', padding: 20}}>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <img src={LogoHero} alt="" width="100%"></img>
          </div>
          <div className="bx--col">
            <TitleArticle style={{ margin: '0 0 30px', color: 'white' }}>{title}</TitleArticle>
            <Description style={{color: '#fff'}}>
              Bienvenido al sistema de solictudes para poder revender sistemas informaticos de IBM. Con este sistema será mas facil poder realizar la solictud para poder ser una empresa verificada por IBM y poder gozar de todos los beneficios.
              <br />
              <br />
              Como usurio podras generar un formulario el cual será revisado por nuestro personal el cual dara el visto bueno y todo proceso podras verlo en este sistema mediante la opcion formulario creados en el cual podras denotar las observaciones que el validador escribió al igual que seras notificado por correo electronico al email registrado en el formulario
              <br />
              <br />
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
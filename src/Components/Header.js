import React from 'react'
import { ImageWrapper, Image, Title, TitleArticle, Wrapper, Description } from '../assets/styles/General-styles'
import { Button } from 'carbon-components-react'
import { Login20 } from '@carbon/icons-react';

import Logo from '../assets/images/pexel-light.jpg'
import '../assets/styles/Header.css'
import { Link } from 'react-router-dom'


export const Header = ({isLogged}) => (
  <>
    <div className="bx--grid grid" style={{margin:0}}>
      <div className="bx--row">
        <div className="bx--col bx--col-sm-16">
          <div className="header__wrapper_info" style={{marginTop: '70px'}}>
            <Title>IBM Application broker</Title>
            <div className="header__wrapper_description" >
              <h3>
                Una forma mas rapida de poder hacer el proceso, <br />
                para poder vender productos tecnologícos de IBM
              </h3>
            </div>
              {
                !isLogged ? 
                  <Link to="/login">
                    <Button>
                      Registrate <Login20 style={{ fontSize: 16 }} />
                    </Button>
                  </Link>
                  :
                  <></>
              }
          </div>
        </div>
        <div className="bx--col bx--col-sm-16" style={{ padding: 0 }}>
          <ImageWrapper>
            <Image src={Logo} />
          </ImageWrapper>
        </div>
      </div>
    </div>
  </>
);

export const Article = ({isLogged}) => (
  <>
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col" style={{display: 'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <Description>Visión general</Description>
        </div>
        <div className="bx--col">
          <Wrapper>
            <TitleArticle>¿Que es usar la aplicacion de broker?</TitleArticle>
            <Description>IBM cuenta con una infinidad de servicios los cuales puede brindar y prestar a otras empresas, la aplicación de broker ayuda a poder realizar un proceso de solicitud de manera mas facil y eficiente. Se necesita realizar el llenado de un formulario el cual será enviado a nuestro validardores los cuales se encargaran de revisar la información enviada para poder aceptar que la empresa registrada es optima para poder revender los productos de hardware de IBM</Description>
          </Wrapper>
        </div>
      </div>
    </div>
  </>
);
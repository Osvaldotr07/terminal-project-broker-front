import React from 'react'
import { TitleArticle } from '../assets/styles/General-styles';
import { Grid, Row, Column } from 'carbon-components-react';
import { Description } from '../assets/styles/General-styles'


const HeroInfo = () => {
  return (
    <>
      <Grid
        narrow
        style={{
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          marginBottom: 101,
        }}
      >
        <Row>
          <Column >
            <Description>
            Broker IBM Aplicación es la herramienta con la cual se estará generando el alta de solicitudes y validación de estas de una manera fácil y eficiente mejorando el proceso que se realizaba de manera manual, esta aplicación cuenta con ayuda de Watson AI para poder realizar la validación de las solicitudes que son creadas por personas dueñas de empresas para poder vender productos de IBM
            </Description>
          </Column>
          <Column style={{ textAlign: 'center' }}>
            <TitleArticle>¿Que es IBM Broker Application?</TitleArticle>
          </Column>
        </Row>
      </Grid>
    </>
  );
}

export default HeroInfo;
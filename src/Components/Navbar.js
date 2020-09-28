import React from 'react'

import {
  Header,
  HeaderName,
  Button,
} from 'carbon-components-react';

import { Login20 } from '@carbon/icons-react'

export const Navbar = (props) => (
  <>
    <div>
      <Header
        aria-label="IBM Brokers Name"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <HeaderName href="#" prefix="IBM">
          [Brokers web]
        </HeaderName>
        <div>
          {
            props.showButton ? 
              <Button className="button-sign-in">
                Inicio de sesión <Login20 style={{ fontSize: 16 }} />
              </Button>
            :
            <></>
          }
        </div>
      </Header>
    </div>
  </>
);
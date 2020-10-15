import React from 'react'

import {Button} from 'carbon-components-react';
import {Header, HeaderName} from 'carbon-components-react/lib/components/UIShell'


import { Link } from 'react-router-dom'
import { Login20, UserAvatarFilled32 } from '@carbon/icons-react';

export const Navbar = props => (
  <>
    <div>
      <Header
        aria-label="IBM Brokers Name"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          textDecoration: 'none'
        }}
      >
        <Link to="/init" style={{textDecoration:'none'}}>
          <HeaderName  prefix="IBM">
            [Brokers web]
          </HeaderName>
        </Link>
        <div>
          {props.showButton ? (
            <Button className="button-sign-in">
              Inicio de sesión <Login20 style={{ fontSize: 16 }} />
            </Button>
          ) : (
            <></>
          )}
          {props.isAunthenticate ? (
            <UserAvatarFilled32 style={{ fontSize: 20, color: 'white', marginRight: 10 }} />
          ) : (
            <></>
          )}
        </div>
      </Header>
    </div>
  </>
);
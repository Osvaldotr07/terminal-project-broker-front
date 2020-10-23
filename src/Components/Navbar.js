import React from 'react'

import { Button, Grid, Row, Column } from 'carbon-components-react';
import { Header, HeaderName } from 'carbon-components-react/lib/components/UIShell'


import { Link } from 'react-router-dom'
import { Login20, UserAvatarFilled32 } from '@carbon/icons-react';

export const Navbar = ({ showButton, isAunthenticate }) => (
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
        <Link to="/init" style={{ textDecoration: 'none' }}>
          <HeaderName prefix="IBM">
            [Brokers web]
          </HeaderName>
        </Link>
        <div>
          {showButton ? (
            <Link to="/login">
              <Button className="button-sign-in">
                Inicio de sesión <Login20 style={{ fontSize: 16 }} />
              </Button>
            </Link>
          ) : (
              <></>
            )}
          {isAunthenticate ? (
            <Grid style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Row>
                <Column sm={2} md={2}>
                  <UserAvatarFilled32 style={{ fontSize: 20, color: 'white', marginRight: 10 }} />
                </Column>
              </Row>
            </Grid>
          ) : (
              <></>
            )}
        </div>
      </Header>
    </div>
  </>
);
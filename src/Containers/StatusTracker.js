import React, { useEffect, useState } from "react";
import { Grid, Row, Column } from "carbon-components-react";
import {
  ContainerView,
  TitleError404,
  TitleArticle,
} from "../assets/styles/General-styles";
import IndicatorStatusTracker from "../Components/IndicatorStatusTracker";
import { getForms } from "../actions/index";

//redux
import { connect } from "react-redux";

const StatusTracker = ({ forms, getForms, tk, email }) => {
  const [statusTracker, setStatusTracker] = useState([]);
  const statusKey = {
    1: "enviado",
    2: "validando",
    3: "Esperando Autorizacion",
    4: "Aceptado",
    0: "Rechazado",
  };
  useEffect(() => {
    getForms(tk, email);
    let formFixed = forms.data
      ? forms.data.map((item) => {
          return {
            id: item._id,
            companyName: item.companyName,
            name: item.name,
            status: statusKey[item.status],
            userEmail: item.userEmail,
          };
        })
      : [];
    setStatusTracker(formFixed);
  }, statusTracker);
  return (
    <div style={{marginTop: '50px'}}>
        <TitleArticle style={{display: 'flex',marginBottom: '50px', 'justifyContent': 'center', 'alignItems': 'center'}}>Seguimeinto en tu formularios enviados</TitleArticle>
        <div style={{ width: '100%',height: 'auto', display: 'flex', 'justifyContent': 'center', 'alignItems': 'center', flexDirection: 'column'}}>
            <Grid style={{ margin: "10px", width:'100%' }}>
                {statusTracker.map((item) => (
                <Row>
                    <Column
                    sm={16}
                    md={16}
                    lg={16}
                    >
                    <TitleArticle>{item.companyName}</TitleArticle>
                    <h1>{item.id}</h1>
                    <IndicatorStatusTracker step={item.status} spaceEqually />
                    </Column>
                    {/* <Column >
                                        {handleStep(step)}
                                    </Column> */}
                </Row>
                ))}
            </Grid>
        </div>
    </div>
  );
};

const mapDispatchToProps = {
  getForms,
};
const mapStateToProps = (state) => {
  return {
    forms: state.forms ? state.forms : [],
    tk: state.data.token,
    email: state.data.user.email,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusTracker);

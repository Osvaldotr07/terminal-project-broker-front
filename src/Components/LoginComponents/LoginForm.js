import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import { TitleArticle } from "../../assets/styles/General-styles";
import { TextInputForm } from "../FormsComponets";
import { Button, Loading } from "carbon-components-react";
import { LoginSchema } from "../../Schemas/formSchema";

//redux
import { connect } from "react-redux";

//actions
import { loginUser } from "../../actions";

const LoginForm = ({ loginUser, isLogged, err }) => {
  const initialData = {
    email: "",
    password: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="form-container">
      <Formik
        initialValues={initialData}
        validationSchema={LoginSchema}
        onSubmit={(values, actions, errors) => {
          setIsLoading(true);
          localStorage.clear();
          loginUser(values, "/init");

          err ? setIsLoading(false) : setIsLoading(true);
          err ? setIsError(true) : setIsError(false);
        }}
      >
        {({ values, validateForm }) => (
          <>
            <TitleArticle>Iniciar sesión</TitleArticle>
            <Form>
              <div className="form-fieldset">
                <div className="form-field">
                  <Field
                    style={{ width: "300px" }}
                    autoFocus
                    labelText="Usuario"
                    name="email"
                    component={TextInputForm}
                  />
                </div>
              </div>
              <div className="form-fieldset">
                <div className="form-field">
                  <Field
                    style={{ width: "300px" }}
                    type="password"
                    autoFocus
                    labelText="Contraseña"
                    name="password"
                    component={TextInputForm}
                  />
                </div>
              </div>
              {!isLoading ? (
                <>
                  <Button
                    style={{ marginLeft: "10px" }}
                    kind="primary"
                    type="submit"
                  >
                    Enviar
                  </Button>
                  <Link to="/register">
                    <Button
                      style={{ marginLeft: "10px" }}
                      kind="primary"
                      type="submit"
                    >
                      Crear cuenta
                    </Button>
                  </Link>
                </>
              ) : (
                <Loading />
              )}
            </Form>
            {isError ? (
              <p style={{ color: "red", marginTop: 10 }}>
                Usuario o contraseña incorrectos
              </p>
            ) : null}
          </>
        )}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = {
  loginUser,
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.user,
    err: state.err,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

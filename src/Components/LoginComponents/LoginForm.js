import React, { useState, useEffect, useRef } from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import { TitleArticle } from "../../assets/styles/General-styles";
import { TextInputForm } from "../FormsComponets";
import { Button, Loading } from "carbon-components-react";
import { LoginSchema } from "../../Schemas/formSchema";
import ReCAPTCHA from "react-google-recaptcha";
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
  const [token, setToken] = useState("");
  const reRef = useRef();

  useEffect(() => {
    window.localStorage.clear();
    setIsLoading(false);
  }, [isLoading]);

  let _reCaptchaRef = React.createRef();

  const handleChange = (value) => {
    setToken(value);
    // if value is null recaptcha expired
  };

  const asyncScriptOnLoad = () => {
    console.log("scriptLoad - reCaptcha Ref-", _reCaptchaRef);
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialData}
        validationSchema={LoginSchema}
        onSubmit={async (values, actions, errors) => {
          try {
            localStorage.clear();
            // const token = await reRef.current.executeAsync();
            // console.log(token);
            // await Promise.resolve(loginUser(values, "/init"));
            // errors ? setIsError(true) : setIsError(false);
            // setIsLoading(false);
          } catch (err) {
            setIsLoading(false);
          }
        }}
      >
        {({ values, validateForm }) => (
          <>
            <TitleArticle>Iniciar sesión</TitleArticle>
            <Form>
              {!isLoading ? (
                <>
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
                </>
              ) : (
                <Loading />
              )}
              <ReCAPTCHA
                sitekey="6LdEj34aAAAAAAKb6ss7rY1aI6ACspotggVpHZvx"
                onChange={handleChange}
                asyncScriptOnLoad={asyncScriptOnLoad}
                ref={_reCaptchaRef}
                style={{ margin: "15px 0" }}
              />
              <>
                <Button
                  style={{ marginLeft: "10px" }}
                  kind="primary"
                  type="submit"
                  onClick={async () => {
                    var myHeaders = new Headers();
                    myHeaders.append(
                      "Authorization",
                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjlhNDVkYTY3N2I5OTAwMTcwY2YxZmMiLCJuYW1lIjoiT3N2YWxkbyBUcmVqbyIsImVtYWlsIjoib3N2YWxkb3RyMDdAZ21haWwuY29tIiwiaWF0IjoxNjEyNzYxMTU5LCJleHAiOjE2MTI3NjIwNTl9.LxqgOTUmdV-igFpFZN9NO2KG_2zpX2AefM4h3RxWLCA"
                    );
                    myHeaders.append(
                      "Content-Type",
                      "application/x-www-form-urlencoded"
                    );

                    var urlencoded = new URLSearchParams();
                    urlencoded.append(
                      "secret",
                      "6LdEj34aAAAAAOX2KQgBOjMS9vgrAG21wQZhvnf1"
                    );
                    urlencoded.append(
                      "response",
                      "03AGdBq272cO5Yu8-5p2P2iNWmtx373vp-poZDZ4G8sgZOn1rJnkFNoBP5QTnSkIUbHSVuOiG-yuh-JIJ0o8ZjaokZAy06bygwyZEwBuWHr1ereFYqJrfjEN5MVDBmIrDQjE_mPxBWENIDFk8twoWfX77KkvchY5KBuP8qV8odoy2tAl8r04c_HLNhVykAgaPsXQZqV04Eud-iV7cMM_UNQcxlahdWeLALsfSzxgLQcK0uc6KgE44Co0QW_su21UQIPQzzdTizelUZx9DGFbbbo4BeE9Zbow2i8lF0wrwP9HnMGvWDTZds3ap9hrdmkPhUs1NbOu4d8656Fk5jooEFnciLUklKY4qFGOtBZGD9XHbpHGcGxceX5crG2nE0U0nwq43NcyHDSH3LDEeUPmhRLXSfKuT7565YCPsyB1K59HxYc3FBwimJEzbsgFzVGLXFgy4TmAMd7WcbyDJXIL3_GAIkF9DtSFxZyw"
                    );

                    var requestOptions = {
                      method: "POST",
                      headers: myHeaders,
                      body: urlencoded,
                      redirect: "follow",
                    };

                    fetch(
                      "https://www.google.com/recaptcha/api/siteverify",
                      requestOptions
                    )
                      .then((response) => response.text())
                      .then((result) => console.log(result))
                      .catch((error) => console.log("error", error));
                  }}
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
            </Form>
            {err ? (
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

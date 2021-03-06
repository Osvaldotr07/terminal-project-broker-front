import React, { useEffect } from "react";

//Componentes
import { Column, Grid, Row, Button } from "carbon-components-react";
import { Field } from "formik";
import { TextInputForm, SelectInputForm } from "../FormsComponets";
import { TitleArticle } from "../../assets/styles/General-styles";
import WrapperForm from "../WrapperForm";
import { countries } from "countries-list";

const CompanyAddress = ({
  setFormData,
  formData,
  validationSchema,
  onBack,
  handleSubmit,
  step,
  nextStep,
  isConfirm,
}) => {
  return (
    <>
      <WrapperForm
        validationSchema={validationSchema}
        formData={formData}
        step={step}
        onBack={onBack}
        nextStep={nextStep}
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        isConfirm={isConfirm}
        title="Dirección de la compañia"
      >
        <Grid>
          <Row>
            <Column>
              <div className="form-fieldset">
                <div className="form-field">
                  <Field
                    style={{ width: "300px" }}
                    autoFocus
                    labelText="Calle"
                    name="addressCompany"
                    component={TextInputForm}
                  />
                </div>
              </div>
            </Column>
            <Column>
              <div className="form-fieldset">
                <div className="form-field">
                  <Field
                    style={{ width: "300px" }}
                    labelText="Numero"
                    name="addressNumber"
                    component={TextInputForm}
                  />
                </div>
              </div>
            </Column>
          </Row>
          <Row>
            <Column>
              <div className="form-fieldset">
                <div className="form-field">
                  <Field
                    style={{ width: "300px" }}
                    labelText="País"
                    name="countryName"
                    options={Object.values(countries)}
                    component={SelectInputForm}
                  />
                </div>
              </div>
            </Column>
            <Column>
              <div className="form-fieldset">
                <div className="form-field">
                  <Field
                    style={{ width: "300px" }}
                    labelText="Ciudad"
                    name="cityName"
                    component={TextInputForm}
                  />
                </div>
              </div>
            </Column>
          </Row>
          <Row>
            <Column>
              <div className="form-fieldset">
                <div className="form-field">
                  <Field
                    style={{ width: "300px" }}
                    labelText="Estado"
                    name="stateName"
                    component={TextInputForm}
                  />
                </div>
              </div>
            </Column>
            <Column>
              <div className="form-fieldset">
                <div className="form-field">
                  <Field
                    style={{ width: "300px" }}
                    labelText="Código postal"
                    name="zipName"
                    component={TextInputForm}
                  />
                </div>
              </div>
            </Column>
          </Row>
        </Grid>
      </WrapperForm>
    </>
  );
};

export default CompanyAddress;

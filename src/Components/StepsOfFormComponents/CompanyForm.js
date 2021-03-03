import React from "react";

import { Grid, Row, Column, Button } from "carbon-components-react";
import { Field } from "formik";
import WrapperForm from "../WrapperForm";
import { TextInputForm } from "../FormsComponets";

import { TitleArticle } from "../../assets/styles/General-styles";

const CompanyForm = ({
  step,
  onBack,
  formData,
  validationSchema,
  handleSubmit,
  nextStep,
  setFormData,
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
        title="Datos de la compañia"
      >
        <Grid>
          <Row>
            <Column>
              <div className="form-fieldset">
                <div className="form-field">
                  <Field
                    handleSubmit={handleSubmit}
                    style={{ width: "300px" }}
                    autoFocus
                    labelText="Nombre de la compañía"
                    name="companyName"
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
                    autoFocus
                    labelText="RFC de la compañía"
                    name="rfcCompany"
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
                    autoFocus
                    labelText="URL de la compañía"
                    name="companyUrl"
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
                    autoFocus
                    labelText="Numero de teléfono"
                    name="companyPhoneNumber"
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
                    autoFocus
                    labelText="Facebook de la compañía"
                    name="facebookProfile"
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
                    autoFocus
                    labelText="Twitter de la compañía"
                    name="twitterProfile"
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

export default CompanyForm;

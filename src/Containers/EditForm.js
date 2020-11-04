import React from "react";
//Componentes
import { Button } from "carbon-components-react";

import { Formik, Form } from "formik";
import { connect } from "react-redux";
import { handleDataSubmit } from '../actions/index'
//Components
import UserInfoForm from "../Components/StepsOfFormComponents/UserInfoForm";
import CompanyAddress from "../Components/StepsOfFormComponents/CompanyAddress";
import CompanyForm from "../Components/StepsOfFormComponents/CompanyForm";
import {
  UserInfoSchema,
  CompanyName,
  CompanyAddressSchema,
} from "../Schemas/formSchema";

const EditForm = ({ item, tk, email, handleDataSubmit }) => {
  return (
    <>
      <div className="form-container" style={{ marginTop: 70, marginBottom: 30 }}>
        <UserInfoForm
          formData={item}
          handleSubmit={handleDataSubmit}
          validationSchema={UserInfoSchema}
          isConfirm={true}
        />
        <CompanyForm
          formData={item}
          validationSchema={CompanyName}
          isConfirm={true}
        />
        <CompanyAddress
          formData={item}
          validationSchema={CompanyAddressSchema}
          isConfirm={true}
        />

        <Formik
          initialValues={item}
          onSubmit={(values) => {
              console.log(values)
            // values.userEmail = email;
            // values.applicationDate = new Date();
            // values.status = "Enviado";
            // createOneForm(values, "/myforms", tk);
          }}
        >
          {({ handleSubmit, isSubmiting }) => (
            <Form>
              <Button className="button" type="submit" disabled={isSubmiting}>
                Enviar
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  handleDataSubmit
}

const mapStateToProps = (state) => {
  return {
    tk: state.data.token,
    email: state.data.user.email,
    item: state.itemFiltered[0] || {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);

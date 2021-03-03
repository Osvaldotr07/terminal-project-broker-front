import React, {useState, useEffect} from 'react'
import { getForms, deleteForm, dataToUpdate } from "../actions/index";

import { connect } from 'react-redux'

import FormTable from './FormTable'

const FormTableWrapper = ({getForms, tk, email}) => {
    const [rows, setRows] = useState([]);

  useEffect(() => {
    (async () => {
      let infoForms = await  getForms(tk, email);
      console.log(infoForms)
      let formFixed = infoForms.data
      ? infoForms.data?.map((item) => {
          return {
            id: item._id,
            companyName: item.companyName,
            name: item.name,
            status: item.status,
            userEmail: item.userEmail,
          };
        })
      : [];
      setRows(formFixed);
    })()
  }, rows );
    return (
        <div style={{'margin-top': 100}}>
            <FormTable 
                title="Solicitudes registradas"
                isDraft={false}
                rows={rows.filter(item => item.status === 'Enviado')}
            />
            <br/>
            <FormTable 
                title="Solicitudes preguardadas"
                isDraft={true}
                rows={rows.filter(item => item.status === 'Preguardado')}
            />
        </div>
    )
}

const mapDispatchToProps = {
    getForms,
    deleteForm,
    dataToUpdate,
  };
  
  const mapStateToProps = (state) => {
    return {
      forms: state.forms ? state.forms : [],
      tk: state.data.token,
      email: state.data.user.email,
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(FormTableWrapper)
import React, { useState ,useEffect} from 'react'
import { connect } from 'react-redux'
import { getForms,deleteForm, dataToUpdate } from '../actions/index'
import {
    DataTable,
    TableContainer,
    Table,
    TableHead,
    TableHeader,
    TableRow,
    TableBody,
    TableCell,
    OverflowMenu,
    OverflowMenuItem,
    TableToolbar,
    TableToolbarContent,
    Button,
    TableToolbarSearch
} from 'carbon-components-react'
import { Link } from 'react-router-dom'

const actionButton = {
    border: 'none',
    background: 'none'
}
const rows = [
    {
        name: 'Nuevo formulario',
        status: 'Submited',
        userEmail: 'osvaldo@ibm.com'

    },
]

const headers = [{
    "header": "Nombre de la empresa",
    "key": "name"
}, {
    "header": "Estatus",
    "key": "status"
},
{
    "header": 'creado por',
    "key": 'userEmail'
}
]

const FormTable = ({ title = "Solicitudes registradas", forms, getForms, tk, email, deleteForm, dataToUpdate }) => {

    const [rows, setRows ] = useState([])

    useEffect(() => {
        getForms(tk, email)
        let formFixed = forms.data ?  forms.data.map(item => {
            return {
                id: item._id,
                name: item.name,
                status: item.status,
                userEmail: item.userEmail
            }
        })
        : []
        setRows(formFixed)
    }, forms.data)

    return (
        <div className="form-container">
            <DataTable
                rows={rows}
                headers={headers}
                render={({
                    rows,
                    headers,
                    getHeaderProps,
                    getRowProps,
                    onInputChange,
                }) => (
                        <TableContainer title={title}>
                            <TableToolbar>
                                <TableToolbarContent>
                                    <TableToolbarSearch
                                    />
                                    <Link to='/form' style={{textDecoration: 'none'}}>
                                        <Button
                                            // onClick={props.add}
                                            size="medium"
                                            kind="primary"
                                        >
                                            Crear nueva forma
                            </Button>
                                    </Link>
                                </TableToolbarContent>
                            </TableToolbar>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {headers.map((header) => (
                                            <TableHeader {...getHeaderProps({ header })}>
                                                {header.header}
                                            </TableHeader>
                                        ))}
                                        <TableHeader>
                                            Acciones
                                        </TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id} {...getRowProps({ row })}>
                                            {row.cells.map((cell) => (
                                                <TableCell key={cell.id}>{cell.value}</TableCell>
                                            ))}
                                            <TableCell className="bx--table-column-menu">
                                                <OverflowMenu flipped style={actionButton}>
                                                    <Link to="/edit">
                                                        <OverflowMenuItem itemText="Editar" onClick={() =>{
                                                            dataToUpdate(row.id)
                                                        }}>
                                                        Editar
                                                        </OverflowMenuItem>
                                                    </Link>
                                                    
                                                    <OverflowMenuItem itemText="Eliminar" onClick={
                                                        () => {
                                                            deleteForm(tk, row.id)
                                                            getForms(tk, email)
                                                        }
                                                    }
                                                    >Eliminar</OverflowMenuItem>
                                                </OverflowMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
            />
        </div>
    )
}

const mapDispatchToProps = {
    getForms,
    deleteForm,
    dataToUpdate
}

const mapStateToProps = state => {
    return {
        forms: state.forms ? state.forms : [],
        tk: state.data.token,
        email: state.data.user.email
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormTable)
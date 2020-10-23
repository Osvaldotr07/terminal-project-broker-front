import React from 'react'
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

const FormTable = ({ title = "Solicitudes registradas" }) => {
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
                                    <Link to='/form'>
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
                                                    <OverflowMenuItem itemText="Editar">Editar</OverflowMenuItem>
                                                    <OverflowMenuItem itemText="Eliminar">Eliminar</OverflowMenuItem>
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

export default FormTable
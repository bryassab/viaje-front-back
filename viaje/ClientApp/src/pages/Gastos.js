import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import axios from 'axios';

export default function Gastos() {
    const [data, setData] = useState([]);
    const GastosGet = async () => {
        await axios.get(`api/ngastos`)
            .then(gastosget => {
                setData(gastosget.data)
            })
    }
    useEffect(() => {
        GastosGet();
    },[])

    return (
        <div className="gastos">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Descripcion</TableCell>
                            <TableCell>Proveedor</TableCell>
                            <TableCell>Alimentacion</TableCell>
                            <TableCell>Transportes</TableCell>
                            <TableCell>Hotel</TableCell>
                            <TableCell>Otros</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((Celda, index) => (
                            <TableRow key={Celda.id}>
                                <TableCell>{Celda.fecha}</TableCell>
                                <TableCell>{Celda.nombre}</TableCell>
                                <TableCell>{Celda.descripcion}</TableCell>
                                <TableCell>{Celda.proveedor}</TableCell>
                                <TableCell>{Celda.alimentacion}</TableCell>
                                <TableCell>{Celda.transportes}</TableCell>
                                <TableCell>{Celda.hotel}</TableCell>
                                <TableCell>{Celda.otros}</TableCell>
                                <TableCell>{Celda.total}</TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

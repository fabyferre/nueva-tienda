import React from 'react'
import { Spinner } from 'react-bootstrap'


const LoaderComponent = ({ }) => {

    return (


        <div style={{
            width: '100%',
            height: '85vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Spinner animation='border' variant='warning' />

            <span style={{ color: 'orange', marginTop: '10px', fontSize: '1.5em', fontWeight: 'bold' }}>Cargando . . .</span>
        </div>

    )
}

export default LoaderComponent
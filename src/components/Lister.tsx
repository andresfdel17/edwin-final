import React from 'react'
import { ListerProps } from '../interfaces';
import { ButtonGroup, Button } from "react-bootstrap";


export const Lister = ({ page, setPage }: ListerProps) => {
    const prev = () => {
        if (page > 1) {
            setPage(prev => prev - 1);
        }
    }
    const next = () => {
        setPage(prev => prev + 1);
    }
    return (
        <>
            <ButtonGroup>
                <Button variant="primary" onClick={prev}>
                    Anterior
                </Button>
                <Button variant="success">
                    {page}
                </Button>
                <Button variant="primary" onClick={next}>
                    Siguiente
                </Button>
            </ButtonGroup>
        </>
    )
}

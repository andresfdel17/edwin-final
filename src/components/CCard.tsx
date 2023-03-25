import React from 'react';
import { CCardProps } from '../interfaces';
import { Card } from "react-bootstrap";

export const CCard = ({ character }: CCardProps) => {
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                   {character.gender}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

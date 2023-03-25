import React from 'react'
import { FilterProps } from '../interfaces';
import { FormControl, Row, Col, Alert } from "react-bootstrap";

export const Filter = ({ setFilter, filter, message }: FilterProps) => {
  return (
    <Row>
      <Col sm={3}>
        <label>Búsqueda</label>
        <FormControl type="text" size="sm" onChange={(e) => setFilter(e.target.value)} value={filter} />
      </Col>
      <Col sm="auto">
        {
          message !== "" && (
            <Alert variant={"warning"}>
              {message}
            </Alert>
          )
        }
      </Col>
    </Row>
  )
}

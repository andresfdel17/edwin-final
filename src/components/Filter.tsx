import React, { useState } from 'react'
import { FilterProps } from '../interfaces';
import { FormControl, Row, Col } from "react-bootstrap";

export const Filter = ({ setFilter, filter }: FilterProps) => {
  const [value,setValue] = useState<string>(filter);
  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = (e.target as HTMLInputElement).value;
    setValue(inputValue);
    setFilter(inputValue);
  }
  return (
    <Row>
      <Col sm={3}>
        <FormControl type="text" size="sm" onChange={changeFilter} value={value}  />
      </Col>
    </Row>
  )
}

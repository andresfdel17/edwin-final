import axios, { AxiosResponse, AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ICharacter, ICharacterAPIResponse } from '../interfaces';
import { CCard, Filter, Lister } from './';

export const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [filter, setFilter] = useState<string>("");
  useEffect(() => {
    getChars();
    // eslint-disable-next-line
  }, [page, filter]);
  const getChars = async (): Promise<void> => {
    try {
      setLoading(true);
      const { data }: AxiosResponse<ICharacterAPIResponse> = filter === "" ? await axios.get(`https://rickandmortyapi.com/api/character?page=${String(page)}`) : await axios.get(`https://rickandmortyapi.com/api/character?name=${filter}&page=${page}`);
      setCharacters(data.results);
    } catch (error: any) {
      const err = error as AxiosError;
      console.log(error);

      setCharacters([]);
      setFilter("");
    }
    setLoading(false)
  }
  return (
    <Container fluid className="mt-4">
      <Filter filter={filter} setFilter={setFilter} />
      <hr />
      <Row className='mt-3 mb-3'>
        {
          loading ? (
            <Spinner animation="grow" variant="primary" />
          ) : (
            <>
              {
                characters.map((val, i) => (
                  <Col sm="auto" key={i}>
                    <CCard character={val} />
                  </Col>
                ))
              }
            </>
          )
        }
      </Row>
      <Row>
        <Col sm="auto">
          <Lister page={page} setPage={setPage} />
        </Col>
      </Row>
    </Container >
  )
}

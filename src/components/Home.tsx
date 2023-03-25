import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { EmptyResponse, ICharacter, ICharacterAPIResponse } from '../interfaces';
import { CCard, Filter, Lister } from './';

export const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    getChars();
    // eslint-disable-next-line
  }, [page, filter]);
  //Funcion que validat tipo EmptyResponse
  const isEmptyResponse = (data: ICharacterAPIResponse | EmptyResponse): data is EmptyResponse => {
     return (data as EmptyResponse).error !== undefined;
  }
  const getChars = async (): Promise<void> => {
    try {
      setLoading(true);
      const options: AxiosRequestConfig = {
        validateStatus: () => true
      }
      const { data }: AxiosResponse<ICharacterAPIResponse| EmptyResponse> = filter === "" ? await axios.get(`https://rickandmortyapi.com/api/character?page=${String(page)}`, options) : await axios.get(`https://rickandmortyapi.com/api/character?name=${filter}&page=${page}`, options);
      setMessage("");
      if(isEmptyResponse(data)){
        setMessage(`No se han hallado datos con éste item de búsqueda: ${filter}`);
        setCharacters([]);
        return;
      }
      setCharacters(data.results);
    } catch (error: any) {
      const err = error as AxiosError;
      console.log(err.toJSON());
      setCharacters([]);
      setMessage(`Error en la búsqueda: ${filter}`);
      setFilter("")
    }
    setLoading(false)
  }
  return (
    <Container fluid className="mt-4">
      <Filter message={message} filter={filter} setFilter={setFilter} />
      <hr />
      <Row>
        <Col sm="auto">
          <Lister page={page} setPage={setPage} />
        </Col>
      </Row>
      <Row className='mt-3 mb-3'>
        {
          loading ? (
            <Spinner animation="grow" variant="primary" />
          ) : (
            <>
              {
                characters.map((val, i) => (
                  <Col sm="auto" key={i} className="mt-2">
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

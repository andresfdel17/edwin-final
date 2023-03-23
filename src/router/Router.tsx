import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Layout } from '../components'

export const Router = () => {
  return (
    <BrowserRouter basename='/edwin-final'>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

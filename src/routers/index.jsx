import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PageLayout } from "../pages/PageLayout"
import Home from "../pages/Home/Home"



export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" />
      </Routes>
    </BrowserRouter>
  )
}
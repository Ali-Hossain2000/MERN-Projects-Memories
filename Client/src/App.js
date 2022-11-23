import { Container } from "@material-ui/core";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (

    <GoogleOAuthProvider clientId="117223520126-riok59jdq4r7bc7fagmci7uu4i6hi1ar.apps.googleusercontent.com">
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Routes>
            <Route path="/" exact element={ <Navigate to="/posts" /> } /> 
            <Route path="/posts" exact element={<Home />} />
            <Route path="/posts/search" exact element={<Home />} />
            <Route path="/posts/:id" exact element={<PostDetails />} />
            <Route path="/auth" exact element={!user ? <Auth /> : <Navigate to="/posts" />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
    
  );
};

export default App;

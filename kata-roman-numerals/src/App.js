import React, { Component, useEffect, useState } from "react";
import axios from 'axios';  // Importez Axios

import Form from "./components/input";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
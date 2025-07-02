import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; import Home from "pages.Home";


function App() {
  return (
    <Router>
      <Router>
        <Route path="/" element={<Home/>} />
      </Router>
    </Router>
  );
};

export default App;

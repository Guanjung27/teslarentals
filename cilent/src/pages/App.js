import SignupCard from "./Signup";
import Homepage from "./Homepage";
import LoginCard from "./Login";
import Dashboard from "./Dashboard"


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/signup" exact element={<SignupCard />} />
          <Route path="/login" exact element={<LoginCard />} />
          <Route path="/dashboard" exact element={<Dashboard/>} />

        
        </Routes>
      </Router>
    </div>
  );
}
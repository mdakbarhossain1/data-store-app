import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function Home() {
  return <div className="p-8 text-center">Home Page</div>;
}
function About() {
  return <div className="p-8 text-center">About Page</div>;
}
function Help() {
  return <div className="p-8 text-center">Help Page</div>;
}
function Features() {
  return <div className="p-8 text-center">Features Page</div>;
}
function SignUp() {
  return <div className="p-8 text-center">Sign Up Page</div>;
}
function RequestDemo() {
  return <div className="p-8 text-center">Request Demo Page</div>;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/features" element={<Features />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/demo" element={<RequestDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import PageWrapper from "./components/common/PageWrapper";

function About() {
  return (
    <PageWrapper title="About Us">
      Learn more about our mission, vision, and the values that guide us.
    </PageWrapper>
  );
}
function Help() {
  return (
    <PageWrapper title="Help Center">
      Find answers to common questions and resources to get started.
    </PageWrapper>
  );
}
function Features() {
  return (
    <PageWrapper title="Features">
      Discover the powerful tools and features our platform provides.
    </PageWrapper>
  );
}
function SignUp() {
  return (
    <PageWrapper title="Create an Account">
      Join us today and start using our secure, flexible data storage.
    </PageWrapper>
  );
}
function RequestDemo() {
  return (
    <PageWrapper title="Request a Demo">
      See our product in action and explore how it can help your business.
    </PageWrapper>
  );
}

function NotFound() {
  return (
    <PageWrapper title="404 - Page Not Found">
      Oops! The page you are looking for does not exist. Check the URL or go back to the homepage.
    </PageWrapper>
  );
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
          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

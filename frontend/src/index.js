import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.scss";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import AddTopic from "./components/AddTopic";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-topic" element={<AddTopic />} />
          {/* <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import MoodCheck from "./pages/MoodCheck";
import MoodFactors from "./pages/MoodFactors";
import MoodSummary from "./pages/MoodSummary";
import Professionals from "./pages/Professionals";
import ProfessionalProfile from "./pages/ProfessionalProfile";
import BookAppointment from "./pages/BookAppointment";
import AppointmentConfirmed from "./pages/AppointmentConfirmed";
import Appointments from "./pages/Appointments";
import Wellness from "./pages/Wellness";
import Payment from "./pages/Payment";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/book-appointment/:id"
  element={<BookAppointment />}
/>
<Route path="/wellness" element={<Wellness />} />

<Route
  path="/appointment-confirmed/:id"
  element={<AppointmentConfirmed />}
/>
<Route
  path="/appointments"
  element={<Appointments />}
/>
<Route
  path="/appointment-confirmed/:id"
  element={<AppointmentConfirmed />}
/>
<Route path="/payment" element={<Payment />} />

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/mood-check" element={<MoodCheck />} />

        <Route path="/mood-factors" element={<MoodFactors />} />

        <Route path="/mood-summary" element={<MoodSummary />} />

        <Route
          path="/professionals"
          element={<Professionals />}
        />

        <Route
          path="/professional-profile/:id"
          element={<ProfessionalProfile />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
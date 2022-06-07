import "./App.css";
import React from "react";
import Header from "./components/Header";
import BOQAssistance from "./components/BOQ Assistance/BOQAssistance";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectDetails from "./components/Project Details/ProjectDetails";
import ScheduleConsultation from "./components/Schedule Consultation/ScheduleConsultation";
import Checkout from "./components/Checkout/Checkout";
import MeetingScheduled from "./components/MeetingScheduled/MeetingScheduled";
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar";
import MeetingRescheduled from "./components/MeetingRescheduled/MeetingRescheduled";
import ScheduleMeetingMob from "./components/ScheduleMeetingMob/ScheduleMeetingMob";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <div className="d-flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<BOQAssistance />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route
              path="/schedule-consultation"
              element={<ScheduleConsultation />}
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/meeting-scheduled" element={<MeetingScheduled />} />
            <Route path="/schedule-meeting" element={<ScheduleMeetingMob />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/meeting-rescheduled"
              element={<MeetingRescheduled />}
            />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;

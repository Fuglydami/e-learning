import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClassSchedule from "./screens/class-schedule/class-schedule";
import Courses from "./screens/courses/courses";
import Dashboard from "./screens/dashboard/home";
import CreateDispute from "./screens/dispute-payment-list/create-dispute";
import DisputePayment from "./screens/dispute-payment-list/dispute-payment";

import LoginScreen from "./screens/login/login";
import ViewPaymentReceipt from "./screens/payment-reciept/component/view-payment-receipt";
import CourseForm from "./screens/print-course-form/print-course-form";
import RegisterCourses from "./screens/register-courses/register-courses";
import CheckResult from "./screens/results/check-result";
import MyResult from "./screens/results/my-result";
import Settings from "./screens/settings/settings";
import Class from "./screens/view-my-courses/class";
import CourseDetails from "./screens/view-my-courses/course-details";
import ViewMyCourses from "./screens/view-my-courses/view-my-courses";
import ViewRegisterCourse from "./screens/view-register-courses/view-register-course";
import SaveNotes from "./screens/view-save-notes.js/save-notes";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/my-learning" element={<ViewMyCourses />} />
        <Route path="my-learning/:courseId" element={<CourseDetails />} />
        <Route path="/register-course" element={<RegisterCourses />} />
        <Route path="/class-schedule" element={<ClassSchedule />} />
        <Route path="/view-payment-receipt" element={<ViewPaymentReceipt />} />
        <Route path="/my-learning/class/:courseId" element={<Class />} />
        <Route
          path="/view-registered-courses"
          element={<ViewRegisterCourse />}
        />
        <Route path="/dispute-payment" element={<DisputePayment />} />
        <Route
          path="dispute-payment/create-dispute"
          element={<CreateDispute />}
        />
        <Route path="/check-result" element={<CheckResult />} />
        <Route path="check-result/result" element={<MyResult />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/save-notes" element={<SaveNotes />} />
        <Route path="/print-course-form" element={<CourseForm />} />
      </Routes>
    </>
  );
}

export default App;

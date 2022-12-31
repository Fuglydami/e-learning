import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Protected from './routes/routes';
import ClassSchedule from './screens/class-schedule/class-schedule';
import Courses from './screens/courses/courses';
import Dashboard from './screens/dashboard/home';
import CreateDispute from './screens/dispute-payment-list/create-dispute';
import DisputePayment from './screens/dispute-payment-list/dispute-payment';
import ErrorPage from './screens/error-page';

import 'react-toastify/dist/ReactToastify.css';
import LoginScreen from './screens/login/login';
import ViewPaymentReceipt from './screens/payment-reciept/component/view-payment-receipt';
import PrintAllCourse from './screens/print-all-course/print-all-course';
import CourseForm from './screens/print-course-form/print-course-form';
import RegisterCourses from './screens/register-courses/register-courses';
import CheckResult from './screens/results/check-result';
import MyResult from './screens/results/my-result';
import Settings from './screens/settings/settings';
import Class from './screens/view-my-courses/class';
import CourseDetails from './screens/view-my-courses/course-details';
import ViewMyCourses from './screens/view-my-courses/view-my-courses';
import ViewRegisterCourse from './screens/view-register-courses/view-register-course';
import SaveNotes from './screens/view-save-notes.js/save-notes';

function App() {
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme='light'
      />

      <Routes>
        <Route element={<Protected />}>
          <Route
            errorElement={<div>Hello world</div>}
            path='/dashboard'
            element={<Dashboard />}
          />
          <Route path='/course' element={<Courses />} />
          <Route path='/my-learning' element={<ViewMyCourses />} />
          <Route path='my-learning/:courseId' element={<CourseDetails />} />
          <Route path='/register-course' element={<RegisterCourses />} />
          <Route path='/class-schedule' element={<ClassSchedule />} />
          <Route
            path='/view-payment-receipt'
            element={<ViewPaymentReceipt />}
          />
          <Route path='/my-learning/class/:courseId' element={<Class />} />
          <Route
            path='/view-registered-courses/print-course-form'
            element={<CourseForm />}
          />
          <Route
            path='/view-registered-courses'
            element={<ViewRegisterCourse />}
          />
          <Route path='/dispute-payment' element={<DisputePayment />} />
          <Route
            path='dispute-payment/create-dispute'
            element={<CreateDispute />}
          />
          <Route path='/check-result' element={<CheckResult />} />
          <Route path='check-result/result' element={<MyResult />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/save-notes' element={<SaveNotes />} />
          <Route path='/print-all-course' element={<PrintAllCourse />} />
        </Route>
        <Route exact path='/' element={<LoginScreen />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import Protected from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from './screens/loading-screen';
import {
  clearLocalStorage,
  getJsonItemFromLocalStorage,
} from './shared/helper-functions/save-data';
import { toastData } from './shared/shared';
import useLogoutTimer from './hooks/expiringTimeout';

const SaveNotes = lazy(() => import('./screens/view-save-notes.js/save-notes'));
const ViewRegisterCourse = lazy(() =>
  import('./screens/view-register-courses/view-register-course')
);
const ViewMyCourses = lazy(() =>
  import('./screens/view-my-courses/view-my-courses')
);
const CourseDetails = lazy(() =>
  import('./screens/view-my-courses/course-details')
);
const Class = lazy(() => import('./screens/view-my-courses/class'));
const Settings = lazy(() => import('./screens/settings/settings'));
const MyResult = lazy(() => import('./screens/results/my-result'));
const CheckResult = lazy(() => import('./screens/results/check-result'));
const RegisterCourses = lazy(() =>
  import('./screens/register-courses/register-courses')
);
const CourseForm = lazy(() =>
  import('./screens/print-course-form/print-course-form')
);
const PrintAllCourse = lazy(() =>
  import('./screens/print-all-course/print-all-course')
);
const ViewPaymentReceipt = lazy(() =>
  import('./screens/payment-reciept/component/view-payment-receipt')
);
const LoginScreen = lazy(() => import('./screens/login/login'));
const ErrorPage = lazy(() => import('./screens/error-page'));
const DisputePayment = lazy(() =>
  import('./screens/dispute-payment-list/dispute-payment')
);
const CreateDispute = lazy(() =>
  import('./screens/dispute-payment-list/create-dispute')
);
const Dashboard = lazy(() => import('./screens/dashboard/home'));

const ClassSchedule = lazy(() =>
  import('./screens/class-schedule/class-schedule')
);
const PaymentTechReceipt = lazy(() =>
  import('./screens/payment-tech-receipt/payment-tech-receipt')
);

function App() {
  let navigate = useNavigate();
  const tokenDetails = getJsonItemFromLocalStorage('token-details');
  const expiringTime = tokenDetails?.expiryTime;

  const logoutCallback = () => {
    clearLocalStorage();
    navigate('/');
    toast.error('Session timeout', toastData);
  };
  useLogoutTimer(expiringTime, logoutCallback);
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

      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<Protected />}>
            <Route
              errorElement={<div>Hello world</div>}
              path='/dashboard'
              element={<Dashboard />}
            />

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
            <Route
              path='/print-tech-fee-receipt'
              element={<PaymentTechReceipt />}
            />
          </Route>
          <Route exact path='/' element={<LoginScreen />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

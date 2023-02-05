import "./App.css";
import Login from "./Components/Auth/Login";
import {Route, Routes} from "react-router-dom";
import SignUp from "./Components/Auth/SignUp";
import ResetPassword from "./Components/Auth/ResetPassword";
import ForgetPassword from "./Components/Auth/ForgetPassword";

import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query-devtools";
// import UpdateToDo from "./Components/Todo/UpdateTodo";
import Accordian from "./Components/Todo/Accordian";
import Todo from "./Components/Home";
import NotFoundPage from "./Components/NotFoundPage";
import UpdateToDo from "./Components/Todo/UpdateTodo";
import TestFetch from "./Components/TestFetch";

const queryClient = new QueryClient({});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/forget_password" element={<ForgetPassword />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/update_todo" element={<UpdateToDo />} />
          <Route path="/abc" element={<TestFetch />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>

        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}

export default App;

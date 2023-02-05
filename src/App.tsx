import "./App.css";
import Login from "./login";
import Todo from "./todo/todo";
import {Route, Routes} from "react-router-dom";
import Accordian from "./todo/accordian";
import SignUp from "./signUp";
import ResetPassword from "./resetPassword";
import ForgetPassword from "./forgetPassword";
import UpdateToDo from "./todo/updateTodo";
// import DropDown from "./dropdown";
// import Login2 from "./login2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accordian />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/update-todo" element={<UpdateToDo />} />
        <Route path="/collaps" element={<Accordian />} />
        {/* <Route path="/dropdown" element={<DropDown />} /> */}
        {/* <Route path="/l" element={<Login2 />} /> */}
      </Routes>
    </>
  );
}

export default App;

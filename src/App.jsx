// App.jsx
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./LayoutComponents/Footer";
import Header from "./LayoutComponents/Header";
import Home from "./PageComponents/Home";
import Blog from "./PageComponents/Blog";
import Shop from "./PageComponents/Shop";
import About from "./PageComponents/About";
import Contact from "./PageComponents/Contact";
import Signup from "./PageComponents/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./PageComponents/Login";
import { AxiosInstance } from "./api/api";
import md5 from "md5";
import { useDispatch } from "react-redux";
import { loginData } from "./store/actions/globalAction";
//Shop/* verdim cunku alt componentler icin de path acildi
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hasToken = localStorage.getItem("token");

  // console.log("localde token var mi ?", hasToken);
  const getGravatar = (email) => {
    const emailHash = md5(email.trim().toLowerCase());
    //https://gravatar.com/avatar/HASH
    return `https://gravatar.com/avatar/${emailHash}`;
  };

  const verifyHandler = async () => {
    try {
      await AxiosInstance.get("/verify")
        .then((res) => {
          console.log("res data", res.data);
          const gravatar = getGravatar(res.data.email);
          toast.success("Succesfully Logged In !");
          dispatch(
            loginData({
              name: res.data.name,
              email: res.data.email,
              role: res.data.role_id,
              loggedIn: true,
              photo: gravatar,
              token: res.data.token,
            })
          );
        })
        .catch((err) => {
          console.log("Hata olustu", err);
          localStorage.removeItem("token");
        });
    } catch {}
  };

  useEffect(() => {
    const fetchData = async () => {
      if (hasToken == null) {
        navigate("/signup");
      } else {
        await verifyHandler();
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;

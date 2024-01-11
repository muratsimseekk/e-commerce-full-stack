// App.jsx
import React, { useEffect, useState } from "react";
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
import gravatar from "gravatar";
import ShoppingCart from "./PageComponents/Shop/ShoppingCart";
import OrderPage from "./PageComponents/Shop/OrderPage";
import { ProtectedRoute } from "./PageComponents/ProtectedRoute";
import OrderCompletePage from "./PageComponents/Shop/OrderCompletePage";
//Shop/* verdim cunku alt componentler icin de path acildi
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hasToken = localStorage.getItem("token");

  const [discount, setDiscount] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discountApply, setDiscountApply] = useState(false);

  const getGravatar = (email) => {
    return gravatar.url(email, { s: "100", r: "x", d: "monsterid" }, true);
  };

  const verifyHandler = async () => {
    try {
      await AxiosInstance.get("/verify")
        .then((res) => {
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
          localStorage.removeItem("token");
        });
    } catch {}
  };

  useEffect(() => {
    const fetchData = async () => {
      await verifyHandler();
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
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route
          path="/order/*"
          element={
            <ProtectedRoute>
              <OrderPage
                discount={discount}
                discountCode={discountCode}
                discountApply={discountApply}
              />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/complete-order" element={<OrderCompletePage />} />
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

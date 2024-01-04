import { useState } from "react";
import Img1 from "../client/assets/svg/1.svg";
import Img2 from "../client/assets/svg/2.svg";
import Index from '../admin/index'
import CarPage from "../client/components/carPage/CarPage";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const SignIn = () => {
    if (email === "admin" && password === "123") {
      setLogin(true);
    } else {
      alert("bunday odam topilmadi!")
    }
  };
  return (
   <div>
     {login ? (
        <Index />
     ) : ( 
     <div>
        <div className="w-[100%] h-[100px] bg-yellow-400"></div>
        <div className="w-[100%] h-[100%] bg-stone-900 p-[150px]">
          <div className="text-white text-7xl text-center">ADMIN KIRISH</div>
          <div className="text-center mt-[50px]">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center h-[79px] w-[70px] bg-yellow-400">
                <img src={Img1} alt="" />
              </div>
              <input
                className="p-[20px] text-white hyphens-none w-[681px] h-[79px] bg-stone-900 border-4 border-yellow-400"
                type="email"
                placeholder="admin"
                value={email}
                onChange={(el) => setEmail(el.target.value)}
              />
            </div>
            <br />
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center h-[79px] w-[70px] bg-yellow-400">
                <img src={Img2} alt="" />
              </div>
              <input
                id="input"
                className="p-[20px] text-white  hyphens-none w-[681px] h-[79px] bg-stone-900 border-4 border-yellow-400"
                type="password"
                placeholder="password"
                value={password}
                onChange={(el) => setPassword(el.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-[20px]">
            <button
              onClick={SignIn}
              className="w-[139px] h-[45px] bg-yellow-400 text-[25px] font-[800]"
            >
              Kirish
            </button>
          </div>
        </div>
      </div>
     )}
     <CarPage />
   </div>
  );
};

export default Admin;

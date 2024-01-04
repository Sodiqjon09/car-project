import { useEffect, useState } from "react";
import Img1 from "../../assets/img/1.png";

const Soum = () => {
  const [number, setNumber] = useState('101 0201111')

  useEffect(()=>{
      setNumber(number)
  },[])
  return (
    <div>
      <div className="w-[100%] h-[100%] bg-stone-900 flex">
        <div className="mx-[auto]">
          <span className={`cursor-pointer mx-[auto] text-white  ${number.length >= 7 ? "text-[160px]" : "text-[260px]" && number.length >= 9 ? "text-[100px]" : "text-[80px]"}`}>
            {number}
          </span>
          <span className="cursor-pointer mx-[auto] text-yellow-400 text-[114px]">
            / so’m
          </span>
          <div className="cursor-pointer w-[100%] h-[60px] bg-yellow-400 mx-[auto]"></div>
        </div>
      </div>
      <div className="bg-stone-900">
        <img
          className="cursor-pointer p-[20px] w-[765] h-[171px] flex items-center justify-center mx-[auto]"
          src={Img1}
        />
      </div>
    </div>
  )
}

export default Soum

import { Link } from "react-router-dom";

const CarPage = () => {
  return (
    <div>
      <div className="w-[100%] h-[100px] bg-yellow-400 flex items-center justify-center gap-[30px]">
        <div className=" opacity-70 text-black text-3xl">
          <Link to="/MashinalarStatistika"> MASHINALAR STATISTIKA</Link>
        </div>
        <div className="opacity-70 text-black text-3xl">
          <Link to="/KrimStatistika"> KIRIM STATISTIKA</Link>
        </div>
        <div className="opacity-70 text-black text-3xl">
          <Link to="/Konfiguratsiyasi">KONFIGURATSIYA</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default CarPage;

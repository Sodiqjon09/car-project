import CarPage from "../carPage/CarPage";
import Img1 from "../../assets/svg/1.svg";
import Img2 from "../../assets/svg/2.svg";
import Img3 from "../../assets/svg/5.svg";

const Konfiguratsiyasi = () => {
  const css = "w-[400px] h-[580px] bg-yellow-800 bg-opacity-5 mt-[20px]";
  return (
    <div>
      <CarPage />
      <div className="flex justify-around w-[100%] h-[1080px] bg-stone-900">
        <div className={css}>
          <h1 className="w-[431px] text-center text-white text-[33px] font-bold font-['Poppins'] leading-[33px] mt-[60px]">
            ADMIN PAROLINI ALMASHTIRISH
          </h1>
          <div>
            <div className="">
              <div className="flex justify-center items-center mt-[20px]">
                <div className="flex justify-center items-center h-[50px] w-[70px] bg-yellow-400">
                  <img src={Img1} alt="" />
                </div>
                <input
                  className="p-[20px] text-white hyphens-none w-[250px] h-[50px] bg-stone-900 border-4 border-yellow-400"
                  type="email"
                  // placeholder="admin"
                />
              </div>
              <br />
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center h-[50px] w-[70px] bg-yellow-400">
                  <img src={Img2} alt="" />
                </div>
                <input
                  id="input"
                  className="p-[20px] text-white hyphens-none w-[250px] h-[50px] bg-stone-900 border-4 border-yellow-400"
                  type="password"
                  // placeholder="password"
                />
              </div>
              <div className="flex justify-center items-center mt-[20px]">
                <button className="w-[160px] h-[35px] bg-yellow-400 text-[25px] font-[800]">
                  saqlash
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={css}>
          <h1 className="w-[431px] text-center text-white text-[33px] font-bold font-['Poppins'] leading-[33px] mt-[60px]">
            PARKOVKA NARXINI ALMASHTIRISH
          </h1>
          <div className="flex justify-center items-center mt-[20px]">
            <div className="flex justify-center items-center h-[50px] w-[70px] bg-yellow-400">
              <img src={Img3} alt="" />
            </div>
            <input
              id="input"
              className="p-[20px] text-white hyphens-none w-[250px] h-[50px] bg-stone-900 border-4 border-yellow-400"
              type="text"
            />
          </div>
          <div className="flex justify-center items-center mt-[20px]">
            <button className="w-[160px] h-[35px] bg-yellow-400 text-[25px] font-[800]">
              saqlash
            </button>
          </div>
        </div>
        <div className={css}>
          <div className="flex justify-center items-center">
        <div className="w-[431px] text-center text-white text-[33px] mt-[220px]">QO’SHIMCHA NARSA QO’SHILSA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Konfiguratsiyasi;

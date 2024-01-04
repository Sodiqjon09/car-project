import Kirim from "../Kirim/Kirim";
import CarPage from "../carPage/CarPage";
import This from "../this/This";
import Img3 from "../../assets/svg/3.svg";
import Img4 from "../../assets/svg/4.svg";
import { kirim } from "../Kirim/Kirim";
import AnnualObservations from "../AnnualObservations/AnnualObservations";

const KrimStatistika = () => {
  return (
    <div>
      <CarPage />
      <div>
        <div className="flex justifiy-between bg-stone-900 p-[10px] px-[30px] gap-[40px]">
          <div className="mt-[50px]">
            <div className="w-[364px] border border-yellow-400">
              <div className="w-[100%] h-[62px] bg-yellow-400 flex justifiy-center items-center ">
                <div className="text-stone-900 text-3xl m-[auto]">
                  BUGUNGI KIRIM
                </div>
              </div>
              <Kirim />
            </div>
            <This />
          </div>
          <div className="mt-[50px]">
          <AnnualObservations />
            <div className="mt-[50px] w-[1050px] h-[433px] bg-yellow-800 bg-opacity-5 px-[20px]">
              <div className="flex justify-between">
                <div>
                  <div className="flex gap-[20px]">
                    <img src={Img3} alt="" />{" "}
                    <h1 className="text-yellow-400 text-[62px]">
                      {" "}
                      JAMI KIRIM:{" "}
                    </h1>
                  </div>
                  <div className="flex gap-[20px]">
                    <img src={Img4} alt="" />{" "}
                    <h1 className="text-yellow-400 text-[62px]">
                      {" "}
                      MASHINALAR:{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-white text-[62.49px]">10 901 000 so’m</h1>
                  <h1 className="text-white text-[62.49px]">{kirim}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KrimStatistika;

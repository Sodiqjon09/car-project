import CarPage from "../carPage/CarPage";
import NumberTimePrice from "../numberTimePrice/numberTimePrice";

export function MashinalaxrStatistika() {
  return (
    <div>
      <CarPage />
      <div className="bg-stone-900 p-[10px] flex justify-center items-center">
        <div>
        <div className="w-[1200px] h-[78px] bg-[#FFD600] bg-opacity-40 flex items-center justify-between p-[40px]">
          <div className="flex items-center gap-[100px] ">
            <div className="text-white text-3xl">T/r</div>
            <div className="text-white text-3xl">RAQAMI</div>
          </div>
          <div className="flex items-center gap-[300px]">
            <div className="text-white text-3xl">VAQTI</div>
            <div className="text-white text-3xl">NARXI</div>
          </div>
        </div>
        <div className="h-[492px]">
      <NumberTimePrice />
      </div>
        </div>
      </div>
    </div>
  );
}

export default MashinalaxrStatistika;

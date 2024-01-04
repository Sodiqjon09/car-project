import { NumberTimePrice } from "../../data/NumberTimePrice/NumberTimePrice";

const numberTimePrice = () => {
  return (
    <div>
      <div className="w-[1200px]  h-[78px]  bg-opacity-5">
        {NumberTimePrice?.map((el) => {
          return (
            <div key={el.id}>
              <div className="bg-[#28271e] h-[78px] bg-opacity-40 flex items-center justify-between p-[40px]">
                <div className="flex items-center gap-[100px] ">
                  <div className="text-white text-3xl">{el.number}</div>
                  <div className="text-white text-3xl">{el.numbers}</div>
                </div>
                <div className="flex items-center gap-[100px]">
                  <div className="text-white text-3xl">
                    {el.time1} <br /> {el.time2}
                  </div>
                  <div className="text-white text-3xl">{el.cost}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default numberTimePrice;

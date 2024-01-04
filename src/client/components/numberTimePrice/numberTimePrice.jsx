import { NumberTimePrice } from "../../data/NumberTimePrice/NumberTimePrice";
import './numberTimePricestyle.css';

const NumberTimePriceComponent = () => {
  return (
    <div>
      <div className="w-[1200px] h-[78px] bg-opacity-5">
        {NumberTimePrice?.map((el, backgroundColor) => {
          const isEven = backgroundColor % 2 === 0;
          const backgroundClass = isEven ? 'custom-bg' : 'custom-bg-red';

          return (
            <div key={el.id}>
              <div id="background" className={`${backgroundClass} h-[78px] bg-opacity-40 flex items-center justify-between p-[40px]`}>
                <div className="flex items-center gap-[100px]">
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

export default NumberTimePriceComponent;
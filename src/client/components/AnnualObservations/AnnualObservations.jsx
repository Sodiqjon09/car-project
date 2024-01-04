import { KrimStatistika1 } from "../../data/KrimStatistika/KrimStatistika";

const AnnualObservations = () => {
  return (
    <div>
        <div className="flex gap-[10px]">
              {KrimStatistika1?.map((nameButton) => {
                return (
                  <div key={nameButton.id}>
                    <input className="w-[142px] h-[39px] bg-yellow-800 border border-yellow-400 text-black text-[10px] text-[white] p-[10px]" type="text" placeholder={nameButton.name}/>
                    {/* <button className="w-[140px] h-[39px] bg-yellow-800 border border-yellow-400 text-black text-xs">
                      {nameButton.name}
                    </button> */}
                  </div>
                );
              })}
            </div>
    </div>
  )
}

export default AnnualObservations

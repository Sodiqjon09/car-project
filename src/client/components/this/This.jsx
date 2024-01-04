import { button } from "../../data/this/this"

const This = () => {
  return (
    <div className="flex justify-between w-[364px]">
      {button?.map((button) => {
        return (
            <div key={button.id} className="mt-[40px]">
                <button className="w-[172.42px] h-[39px] bg-yellow-400">{button.name}</button>
            </div>
        )
      })}
    </div>
  )
}

export default This

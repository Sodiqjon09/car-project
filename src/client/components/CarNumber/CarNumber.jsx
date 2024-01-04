import './CarNumber.css'
import UZB from '../../assets/img/uzb.jpg'

const CarNumber = () => {
    // const Number = "text-[200px]"
  return (
    <div id="CarNumber" className="m-[auto] mt-[50px] flex justify-center items-center">
       <div className="bg-[#fff] w-[765px] h-[171px] p-[10px]">
        <div className="border-[3px] border-[black] h-[100%] flex justify-between" >
            <div className="flex">
                <h1 className="flex justify-cnter items-center text-[150px]  w-[125px] h-[150px]">00</h1>
                <div className="ml-[15px] border-[2px] border-[black] w-[3px] h-[148px]" ></div>
            </div>
            <div className='flex gap-[5px]'>
                <h1 className="flex justify-center items-center text-[200px]">000</h1>
                <h1 id='CarNumberPart2' className="flex justify-center items-center text-[120px] font-[700]">DAV</h1>
                <div className='ml-[10px] p-[10px] '>
                    <img className='w-[50px] mt-[15px]' src={UZB} alt="" />
                    <br />
                    <h1 id='CarNumberPart2' className='mt-[-20px] text-[#2e8387] text-[40px]'>UZ</h1>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default CarNumber

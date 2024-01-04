let css = "flex justify-between items-center p-5";
let h1 = "text-yellow-400 text-3xl";
let divFooture =
  "w-[100%] h-[50px] bg-yellow-400 mt-[70px] flex justify-between px-5";
let h1Footure = "text-stone-900 text-[30px] font-bold";
let kirdi = 101;
let chiqdi = 90;
let parkovdan = 11;
export let kirim = kirdi + chiqdi + parkovdan;

const Kirim = () => {


  return (
    <div>
    <div>
    <div>
        <div>
          <div className={css}>
            <h1 className={h1}>KIRDI</h1> <h1 className={h1}>{kirdi}</h1>
          </div>
          <div className={css}>
            <h1 className={h1}>CHIQDI</h1> <h1 className={h1}>{chiqdi}</h1>
          </div>
          <div className={css}>
            <h1 className={h1}>PARKOVDA </h1>{" "}
            <h1 className={h1}>{parkovdan}</h1>
          </div>
        </div>
        <div className={divFooture}>
          <h1 className={h1Footure}>JAMI:</h1>{" "}
          <h1 className={h1Footure}> {kirim}</h1>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Kirim;

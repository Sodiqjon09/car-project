import { Link } from "react-router-dom";
import { UserNamePage } from "../../data/UserNmaePage/UserNmaePage";
import Soum from "../soum/Soum";

const UsernamePage = () => {
  return (
    <div>
      <div className="flex bg-yellow-400">
        {UserNamePage?.map((el) => {
          return (
            <div
              key={el.id}
              className="w-[1220px] h-[82px] flex items-center justify-around"
            >
              <div>
                <span className="cursor-pointer text-stone-900 text-6xl">
                  {el.name}
                </span>
                <span className="text-white text-6xl">{el.hour}</span>
              </div>
              <div></div>
            </div>
          );
        })}
        <div className="p-[20px] flex justify-center items-center">
          <Link to="/sign">
            <button className="w-[100px] h-[50px] bg-yellow-500 text-[#fff]">
              login in
            </button>
          </Link>
        </div>
      </div>
      <Soum />
    </div>
  );
};

export default UsernamePage;

import swimImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playGroundImg from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 py-5">
      <h1 className="font-bold m-5 mt-0">Q-Zone</h1>
      <div className="grid grid-cols-1 place-center gap-5 px-2">
        <div>
          <img className="w-full" src={swimImg} alt="" />
        </div>
        <div>
          <img className="w-full" src={classImg} alt="" />
        </div>
        <div>
          <img className="w-full" src={playGroundImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default QZone;

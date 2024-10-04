import React, { Key } from "react";
import { ImCross } from "react-icons/im";
import { avat, xp } from "../../../assets/images";
import { StaticImageData } from "next/image";
import style from "./popup.module.css";

type Rewards = {
  badge: StaticImageData | string | undefined;
  label: string;
};

const rewards: Rewards[] = [
  {
    badge: xp,
    label: "20 XP",
  },
  {
    badge: avat,
    label: "250,000,000",
  },
];
function RewardPopup() {
  return (
    <div className="border-2 border-[#423520] rounded-xl p-14 relative w-[50%]">
      <div className="absolute right-4 top-4 border-white rounded-md border p-2">
        <ImCross size={12} />
      </div>
      <div className="text-center mb-12">
        <h1 className="text-themeYellow font-black text-5xl [text-shadow:_2px_2px_10px_rgb(243_186_47_/_40%)] my-2">
          Congratulations!
        </h1>
        <h3 className="text-themeYellow font-semibold text-3xl my-2">
          Command completed Successfully!
        </h3>
        <p className="text-[#C8AA7A] font-normal text-xl text-center my-2">
          You have successfully completed a command! Here are your well-earned
          rewards. Keep exploring the Command Center roe even more exciting
          mission and bigger rewards!
        </p>
      </div>
      <svg width="300" height="50">
        <path
          d="M10 25 H200 Q220 25 225 40 T330 45 H470"
          stroke="white"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
      <h5 className="text-center text-[#fff] font-normal text-xl my-2">
        Rewards
      </h5>
      <div className="flex justify-center items-center ">
        {rewards.map((reward: Rewards, _ind: Key) => (
          <div
            key={_ind}
            className={`flex justify-center items-center flex-col border border-white rounded-md w-36 h-40 m-2 relative ${style.borderClip}`}
          >
            <span className="mb-4">
              <img
                src={
                  typeof reward.badge === "string"
                    ? reward.badge
                    : reward?.badge?.src
                }
                className=" p-2 "
                alt={"reward logo"}
                width={"100%"}
                height={"100%"}
              />
            </span>
            <p className="absolute bottom-0 bg-themeYellow font-black text-[#000] w-full px-2">
              {reward.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RewardPopup;

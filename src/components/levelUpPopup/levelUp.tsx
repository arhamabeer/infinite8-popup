"use client";

import React, { useEffect, useState } from "react";
import { Line } from "rc-progress";

import { Lieutenant } from "../../../assets/images";

function LevelUpPopup() {
  const [progressPercent, setProgressPercent] = useState<number>(0);
  let sum = (progressPercent / 50000) * 100;

  useEffect(() => {
    if (progressPercent < 32500) {
      const intervalId = setInterval(() => {
        setProgressPercent((prevProgress) => {
          if (progressPercent >= 32500) {
            clearInterval(intervalId);
            return prevProgress;
          } else {
            return prevProgress + 2500;
          }
        });
      }, 10);
      return () => clearInterval(intervalId);
    }
  }, [progressPercent]);

  console.log(sum);
  console.log(`progressPercent`, progressPercent);
  return (
    <div className="h-[100vh] flex justify-center items-center m-0 p-0 flex-col w-[60%]">
      <div>
        <h1
          className="font-black text-7xl [text-shadow:_2px_2px_10px_rgb(255_186_11_/_60%)]"
          style={{
            background: "radial-gradient(#FFF4C0, #FFE02E, transparent)",
            color: "transparent",
            backgroundClip: "text",
          }}
        >
          LEVEL UP
        </h1>
      </div>
      <div>
        <img
          src={Lieutenant.src}
          className=" p-2 "
          alt={"Badge"}
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div>
        <h2 className="font-bold text-5xl text-[#291911] [text-shadow:_1px_5px_15px_rgb(41_26_17_/_60%)]">
          Corporal
        </h2>
      </div>
      <div className="bg-[#291911] rounded-md w-3/4 h-4 px-1 py-1 border border-[#1a100b]  ">
        <Line
          percent={sum}
          strokeWidth={1}
          trailColor={`transparent`}
          strokeColor={"#F37433"}
        />
      </div>
      <div className="my-6">
        <button
          style={{
            background:
              "linear-gradient(to bottom, #FFFFFF 1%, #F7C790 4%, #F3AC59 4%, #EC6615 40%, #944617 80%)",
          }}
          className="w-60 h-14 border-2 cursor-pointer border-themeMaroon text-black font-bold rounded-md"
        >
          Claim NFT Badge
        </button>
      </div>
      <div>
        <h5 className="text-center text-themeMaroon text-2xl font-bold">
          You’ve leveled up and earned a new badge!
        </h5>
        <p className="text-center text-themeLightYellow text-lg font-normal">
          Claim your{" "}
          <span className="text-center text-themeLightYellow text-xl font-bold">
            NFT badge
          </span>{" "}
          now, or retrieve it later from your Inventory.
        </p>

        <p className="text-center my-6 text-themeLightYellow text-base font-normal">
          To claim your new badge, you'll need to transfer your previous badge
          from your wallet for it to be burned in exchange for the new one. If
          there's insufficient gas in your wallet, the transaction will be
          canceled. You can always visit your Inventory and claim your badge at
          any time.
        </p>
      </div>
    </div>
  );
}

export default LevelUpPopup;

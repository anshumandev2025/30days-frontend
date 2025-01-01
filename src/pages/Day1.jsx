import { motion } from "motion/react";
import { useState } from "react";
const Day1 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  return (
    <>
      <div className="p-10">
        <div className="flex h-screen items-center justify-center space-x-20">
          <div>
            <motion.div
              animate={{ x, y, rotate }}
              transition={{ type: "spring" }}
              className="size-60 pointer-events-none border-4 rounded-xl  border-dotted border-red-500"
            />
          </div>
          <div className="flex text-red-500 flex-col space-y-12">
            <div className="flex w-60 justify-between ">
              <p>X:</p>
              <div className="flex items-center space-x-10">
                <input
                  className="accent-red-500 ml-20"
                  type="range"
                  value={x}
                  min={-500}
                  max={500}
                  onInput={(e) => setX(parseFloat(e.target.value))}
                />
                <p className="border-b-red-500 border-b-2  border-dotted ">
                  {x}
                </p>
              </div>
            </div>
            <div className="flex w-60 justify-between ">
              <p>Y:</p>
              <div className="flex items-center space-x-10">
                <input
                  className="accent-red-500 ml-20"
                  type="range"
                  value={y}
                  min={-500}
                  max={500}
                  onChange={(e) => setY(parseFloat(e.target.value))}
                />
                <p className="border-b-red-500 border-b-2 border-dotted">{y}</p>
              </div>
            </div>

            <div className="flex w-60 justify-between ">
              <p>rotate:</p>
              <div className="flex items-center space-x-10">
                <input
                  className="accent-red-500 ml-12"
                  type="range"
                  value={rotate}
                  min={-180}
                  max={180}
                  onChange={(e) => setRotate(parseFloat(e.target.value))}
                />
                <p className="border-b-red-500 border-b-2  border-dotted ">
                  {rotate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day1;

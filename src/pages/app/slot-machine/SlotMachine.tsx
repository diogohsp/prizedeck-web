import { useState } from "react";
import SlotMachineGif from "@/assets/slot-machine-png.gif";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const SlotMachine = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const startSpin = () => {
    setIsSpinning(!isSpinning);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <motion.img
        src={SlotMachineGif}
        className="w-56 h-56 ml-[22px]"
        animate={isSpinning ? { scale: 1.2 } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "backInOut" }}
      />
      <Button className="" onClick={startSpin}>
        Girar
      </Button>
    </div>
  );
};

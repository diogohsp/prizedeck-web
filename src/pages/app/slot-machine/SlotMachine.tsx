import { useEffect, useState } from "react";
import SlotMachineGif from "@/assets/slot-machine-png.gif";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMutation, useQuery } from "@tanstack/react-query";
import { drawPrize } from "@/api/date-prizes/draw-prize";
import { listDatePrizesNotAwarded } from "@/api/date-prizes/list-date-prizes-not-awarded";

export const SlotMachine = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(false);
  const [erroModal, setErrorModal] = useState(false);
  const [winnerPrize, setWinnerPrize] = useState("");

  const handleSpin = () => {
    setIsSpinning(!isSpinning);
  };

  const {
    data: datePrizesNotAwardedList,
    isLoading: isDatePrizeLoading,
    refetch: refetchDatePrizesNotAwardedList,
  } = useQuery({
    queryKey: ["list-dateprizes"],
    queryFn: listDatePrizesNotAwarded,
    staleTime: 10,
  });

  useEffect(() => {
    console.log(datePrizesNotAwardedList);
  }, [datePrizesNotAwardedList]);

  const { mutateAsync: drawPrizeMutate, isPending: isCreatePrizePending } =
    useMutation({
      mutationFn: drawPrize,
      onSuccess: (response) => {
        console.log(response);
        if (response.data !== null) {
          setWinner(true);
          setWinnerPrize(response.data.prize.name);

          refetchDatePrizesNotAwardedList();
          return;
        }

        setErrorModal(true);
      },
    });

  const drawPrizeFn = () => {
    console.log("funcao model");
    handleSpin();

    const id = datePrizesNotAwardedList?.listRegisteredPrizes?.[0]?.id ?? "0";

    drawPrizeMutate({ id });
  };

  if (isDatePrizeLoading) {
    return (
      <div>
        <p>Carregando premios...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <motion.img
        src={SlotMachineGif}
        className="w-56 h-56 ml-[22px]"
        animate={isCreatePrizePending ? { scale: 2 } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "backInOut" }}
      />
      <motion.div
        animate={winner ? { scale: 1.2 } : { rotate: 0, scale: 1 }}
        className={`${
          winner ? "block" : "hidden"
        } w-[400px] h-[350px] bg-primary absolute rounded-2xl justify-center items-center flex`}
      >
        <div className="text-center">
          <p className="text-white text-xl">PARABÉNS!</p>
          <p className="text-white text-xl">VOCÊ GANHOU UM </p>
          <p className="text-thertiary text-2xl font-bold">{winnerPrize}</p>
        </div>
        <div
          className="absolute top-3 right-5 cursor-pointer"
          onClick={() => setWinner(false)}
        >
          <p className="text-white text-xl">x</p>
        </div>
      </motion.div>
      <motion.div
        animate={erroModal ? { scale: 1.2 } : { rotate: 0, scale: 1 }}
        className={`${
          erroModal ? "block" : "hidden"
        } w-[400px] h-[350px] bg-primary absolute rounded-2xl justify-center items-center flex`}
      >
        <div className="text-center">
          <p className="text-white text-xl">Não foi dessa vez...</p>
        </div>
        <div
          className="absolute top-3 right-5 cursor-pointer"
          onClick={() => setErrorModal(false)}
        >
          <p className="text-white text-xl">x</p>
        </div>
      </motion.div>
      <Button className="" onClick={() => drawPrizeFn()}>
        Girar
      </Button>
    </div>
  );
};

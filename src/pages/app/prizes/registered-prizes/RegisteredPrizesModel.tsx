import { Prize } from "@/api/interfaces";
import { createPrize } from "@/api/prizes/create-prize";
import { listRegisteredPrizes } from "@/api/prizes/list-registered-prizes";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useRegisteredPrizeModel = () => {
  const { data, isLoading: isPrizeModelLoading } = useQuery({
    queryKey: ["list-registered-prizes"],
    queryFn: listRegisteredPrizes,
  });

  const { mutateAsync: createPrizeMutate, isPending: isCreatePrizePending } =
    useMutation({ mutationFn: createPrize });

  const deletePrizeFn = () => {
    console.log("Deleted");
  };

  const createNewPrize = (data: Prize) => {
    createPrizeMutate({
      code: data.code,
      name: data.name,
      quantity: data.quantity,
    });
  };

  return {
    listRegisteredPrizes: data?.listRegisteredPrizes,
    isPrizeModelLoading,
    deletePrizeFn,
    createNewPrize,
    isCreatePrizePending,
  };
};

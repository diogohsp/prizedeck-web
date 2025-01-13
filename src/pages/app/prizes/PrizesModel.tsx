import { listRegisteredPrizes } from "@/api/prizes/list-registered-prizes";
import { useQuery } from "@tanstack/react-query";

export const usePrizeModel = () => {
  const { data, isLoading: isPrizeModelLoading } = useQuery({
    queryKey: ["list-registered-prizes"],
    queryFn: listRegisteredPrizes,
  });

  console.log('func', data?.listRegisteredPrizes);

  return { listRegisteredPrizes: data?.listRegisteredPrizes, isPrizeModelLoading };
};

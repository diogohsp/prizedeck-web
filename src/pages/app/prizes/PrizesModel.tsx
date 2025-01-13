import { helloWorld } from "@/api/hello_world/hello_world";
import { useQuery } from "@tanstack/react-query";

export const usePrizeModel = () => {
  const { data } = useQuery({ queryKey: ["hello_world"], queryFn: helloWorld });

  return {data};
};

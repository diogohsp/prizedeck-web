import { Prize } from "@/api/interfaces";
import { ResourceNotFoundViewModel } from "@/components/resource-not-found/ResourceNotFoundViewModel";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect } from "react";

interface PrizeViewProps {
  listRegisteredPrizes: Prize[] | undefined;
  isPrizeModelLoading: boolean;
}

export const PrizeView = (props: PrizeViewProps) => {
  const { listRegisteredPrizes, isPrizeModelLoading } = props;

  useEffect(() => {
    console.log("teste: ", listRegisteredPrizes);
  }, [listRegisteredPrizes]);

  if (isPrizeModelLoading) {
    return (
      <>
        <Skeleton className="w-full h-[40px] rounded-full" />
      </>
    );
  }

  return (
    <section>
      <div>
        {listRegisteredPrizes && listRegisteredPrizes.length > 0 && (
          <div className="bg-thertiary border-l-8 border-primary p-3 rounded-md">
            {listRegisteredPrizes.map((prize) => (
              <div className="flex gap-x-3">
                <div className="flex gap-x-2">
                  <p className="text-primary">ID:</p>
                  <p>{prize.code}</p>
                </div>

                <div className="flex gap-x-2">
                  <p className="text-primary">NAME:</p>
                  <p>{prize.name}</p>
                </div>

                <div className="flex gap-x-2">
                  <p className="text-primary">QUANTITY:</p>
                  <p>{prize.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {listRegisteredPrizes && listRegisteredPrizes.length == 0 && (
          <i>Nenhum prêmio registrado...</i>
        )}
        {!listRegisteredPrizes && <ResourceNotFoundViewModel />}
      </div>
    </section>
  );
};

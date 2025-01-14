import { ResourceNotFoundViewModel } from "@/components/resource-not-found/ResourceNotFoundViewModel";
import {
  BasePill,
  BasePillFirstCol,
  BasePillSecondCol,
  BasePillThidCol,
} from "@/components/ui/base-pill/BasePìllView";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect } from "react";
import { DeletePrizeModal } from "./DeletePrizeModal";
import { PrizeViewProps } from "./InterfacePrizeViewProps";

export const PrizeView = (props: PrizeViewProps) => {
  const { listRegisteredPrizes, isPrizeModelLoading, deletePrizeFn } = props;

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
      <div className="flex flex-col gap-y-2">
        {listRegisteredPrizes && listRegisteredPrizes.length > 0 && (
          <>
            {listRegisteredPrizes.map((prize) => (
              <div className="w-full flex items-center gap-x-3">
                <div className="flex-1">
                  <BasePill className="flex flex-wrap">
                    <BasePillFirstCol>
                      <p className="text-primary uppercase font-medium">
                        code:
                      </p>
                      <p className="uppercase">{prize.code}</p>
                    </BasePillFirstCol>
                    <BasePillSecondCol>
                      <p className="text-primary uppercase font-medium">
                        name:
                      </p>
                      <p className="uppercase">{prize.name}</p>
                    </BasePillSecondCol>
                    <BasePillThidCol>
                      <p className="text-primary uppercase font-medium">
                        quantity:
                      </p>
                      <p className="uppercase">{prize.quantity}</p>
                    </BasePillThidCol>
                  </BasePill>
                </div>

                <DeletePrizeModal
                  className=""
                  deleteFn={deletePrizeFn}
                />
              </div>
            ))}
          </>
        )}
        {listRegisteredPrizes && listRegisteredPrizes.length == 0 && (
          <i>Nenhum prêmio registrado...</i>
        )}
        {!listRegisteredPrizes && <ResourceNotFoundViewModel />}
      </div>
    </section>
  );
};

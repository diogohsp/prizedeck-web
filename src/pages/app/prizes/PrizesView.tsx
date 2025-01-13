import { Prize } from "@/api/interfaces";
import { useEffect } from "react";

interface PrizeViewProps {
  listRegisteredPrizes: Prize[] | undefined;
}

export const PrizeView = (props: PrizeViewProps) => {
  const { listRegisteredPrizes } = props;

  useEffect(() => {
    console.log("teste: ", listRegisteredPrizes);
  }, [listRegisteredPrizes]);

  return (
    <section>
      <h1 className="pb-10">Registered Prizes</h1>
      <div>
        {listRegisteredPrizes && listRegisteredPrizes.length > 0 ? (
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
        ) : (
          <div>nao tem</div>
        )}
      </div>
    </section>
  );
};

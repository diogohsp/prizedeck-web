import { usePrizeModel } from "./PrizesModel";
import { PrizeView } from "./PrizesView";

export const PrizesViewModel = () => {
  const prizeModel = usePrizeModel();

  return (
    <div>
      <PrizeView {...prizeModel}/>
    </div>
  );
};

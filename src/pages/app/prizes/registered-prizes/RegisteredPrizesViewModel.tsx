import { useRegisteredPrizeModel } from "./RegisteredPrizesModel";
import { RegisteredPrizesView } from "./RegisteredPrizesView";

export const PrizesViewModel = () => {
  const prizeModel = useRegisteredPrizeModel();

  return (
    <div>
      <RegisteredPrizesView {...prizeModel} />
    </div>
  );
};

import { Prize } from "@/api/interfaces";

export interface PrizeViewProps {
    listRegisteredPrizes: Prize[] | undefined;
    isPrizeModelLoading: boolean;
    deletePrizeFn():void
    createNewPrize(data: Prize): void
    isCreatePrizePending: boolean
  }
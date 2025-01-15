import { Prize } from "@/api/interfaces";

export interface PrizeViewProps {
    listRegisteredPrizes: Prize[] | undefined;
    isPrizeModelLoading: boolean;
    deletePrizeFn():void
    createPrize(data: Prize): void
    isCreatePrizePending: boolean
  }
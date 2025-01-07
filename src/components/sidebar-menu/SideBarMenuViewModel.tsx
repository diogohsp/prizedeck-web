import { useSideBarMenuModel } from "./SideBarMenuModel";
import { SideBarMenuView } from "./SideBarMenuView";

export const SideBarMenuViewModal = () => {

    const siderBarMenuModel = useSideBarMenuModel()

  return (
    <>
      <SideBarMenuView {...siderBarMenuModel} />
    </>
  );
};

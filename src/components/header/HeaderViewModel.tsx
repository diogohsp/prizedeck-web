import { useHeaderModel } from "./HeaderModel";
import { HeaderView } from "./HeaderView";

export const HeaderViewModel = () => {
  const headerModel = useHeaderModel();

  return (
    <>
      <HeaderView {...headerModel} />
    </>
  );
};

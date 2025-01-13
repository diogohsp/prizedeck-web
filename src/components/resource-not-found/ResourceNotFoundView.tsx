import { IoReloadCircleOutline } from "react-icons/io5";
import { ResourceNotFoundViewProps } from "./InterfaceResourceNotFound";

export const ResourceNotFoundView = (props: ResourceNotFoundViewProps) => {
  const { reload } = props;

  return (
    <div className="flex gap-x-3 items-center">
      <div className="bg-primary w-fit p-3 rounded-xl">
        <i>Resource not found. Try reload the page...</i>
      </div>
      <IoReloadCircleOutline
        className="hover:scale-150 cursor-pointer"
        onClick={reload}
      />
    </div>
  );
};

import { useResourceNotFoundModel } from "./ResourceNotFoundModel";
import { ResourceNotFoundView } from "./ResourceNotFoundView";

export const ResourceNotFoundViewModel = () => {
  const resourceNotFoundModel = useResourceNotFoundModel();

  return (
    <>
      <ResourceNotFoundView {...resourceNotFoundModel} />
    </>
  );
};

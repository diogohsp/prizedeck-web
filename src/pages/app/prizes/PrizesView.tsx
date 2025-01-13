import { useEffect } from "react";

interface PrizeViewProps {
  data: any;
}

export const PrizeView = (props: PrizeViewProps) => {
  const { data } = props;

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <p>view Prize</p>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface DelePrizeModalProps {
  className?: string;
  deleteFn(): void;
}

export const DeleteRegisteredPrizeModal = ({
  className,
  deleteFn,
}: DelePrizeModalProps) => {
  return (
    <div className={cn(className)}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"destructive"}>x</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] flex flex-col justify-center items-center gap-y-12">
          <DialogHeader>
            <DialogTitle>
              Are you sure you want <br />
              to delete this prize?
            </DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit" variant={"destructive"} onClick={deleteFn}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";

const BuyCredits = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-row justify-start bg-orange-200/20 border border-orange-500/30 rounded-lg p-2 cursor-pointer">
          <div className="flex flex-row justify-start items-center w-full gap-1">
            <Image
              src="/hat.svg"
              alt="iconpark_one"
              className="h-[20px] w-[20px]"
              height={20}
              width={20}
            />
            <p className="mr-0.5 font-bold !text-orange-500">
              Your Credits : 4
            </p>
            <Image
              src="/plusicon.svg"
              alt="iconpark_one"
              className="h-[20px] w-[20px] ml-2"
              height={20}
              width={20}
            />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader className="space-y-3">
          <DialogTitle className="mx-auto">
            <Image
              src="/hat.svg"
              alt="iconpark_one"
              className="h-[35px] w-[35px]"
              height={35}
              width={35}
            />
          </DialogTitle>
          <DialogTitle className="text-center">Buy more credits</DialogTitle>
          <DialogDescription className="text-center">
            1 video requires around 2 credits
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 items-center">
          <Slider defaultValue={[30]} />{" "}
          <p className="border rounded-lg px-2 py-1">10</p>
          <p className="text-sm text-slate-900">credits</p>
        </div>
        <p className="text-center">1 credit ≈ $2</p>
        <DialogFooter className="flex gap-2 w-full">
          <DialogClose className="w-full">
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose className="w-full">
            <Button className="bg-gradient text-white hover:text-white w-full">
              Buy
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BuyCredits;

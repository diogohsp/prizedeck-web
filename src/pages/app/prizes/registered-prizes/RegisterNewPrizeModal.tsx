import React, { useReducer } from "react";
import { Prize } from "@/api/interfaces";
import {
  BasePill,
  BasePillFirstCol,
} from "@/components/ui/base-pill/BasePìllView";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { IoIosAddCircleOutline } from "react-icons/io";

interface RegisterNewPrizeProps {
  className?: string;
  createPrize(prize: Prize): void;
}

const initialState = {
  formData: {
    code: "",
    name: "",
    quantity: 0,
  },

  errors: {
    code: "",
    name: "",
    quantity: "",
  },
};

type State = typeof initialState;

type Action =
  | { type: "UPDATE_FIELD"; field: string; value: string | number }
  | {
      type: "SET_ERRORS";
      errors: { code: string; name: string; quantity: string };
    }
  | { type: "RESET_FORM" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: { ...state.formData, [action.field]: action.value },
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

export const RegisterNewPrizeModal = ({
  className,
  createPrize,
}: RegisterNewPrizeProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validate = () => {
    const { code, name, quantity } = state.formData;
    const errors = { code: "", name: "", quantity: "" };

    if (name.length < 2) {
      errors.name = "O nome deve ter pelo menos 2 caracteres.";
    }

    if (code.length < 1) {
      errors.code = "O código deve ter mais de 0 dígitos.";
    }

    if (quantity <= 0) {
      errors.quantity = "A quantidade deve ser maior que zero.";
    }

    dispatch({ type: "SET_ERRORS", errors });
    return Object.values(errors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Dados enviados:", state.formData);
      createPrize(state.formData);
      dispatch({ type: "RESET_FORM" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = name === "quantity" ? parseInt(value, 10) || 0 : value; // Converte "quantity" para número
    dispatch({ type: "UPDATE_FIELD", field: name, value: newValue });
  };

  return (
    <div className={cn(className)}>
      <Dialog>
        <DialogTrigger asChild>
          <BasePill className="flex justify-center items-center h-12 bg-transparent border-thertiary border-2 cursor-pointer hover:bg-green-950 w-64 m-auto">
            <BasePillFirstCol>
              <p className="uppercase self-center">Register a Prize</p>
              <IoIosAddCircleOutline size={28} />
            </BasePillFirstCol>
          </BasePill>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create new prize</DialogTitle>
          </DialogHeader>
          <form onSubmit={() => handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="code" className="text-right">
                  Code
                </Label>
                <Input
                  id="code"
                  name="code"
                  value={state.formData.code}
                  onChange={handleChange}
                  className="col-span-3"
                />
                {state.errors.code && <p>{state.errors.code}</p>}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={state.formData.name}
                  onChange={handleChange}
                  className="col-span-3"
                />
                {state.errors.name && <p>{state.errors.name}</p>}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="quantity" className="text-right">
                  Quantity
                </Label>
                <Input
                  id="quantity"
                  name="quantity"
                  value={state.formData.quantity}
                  onChange={handleChange}
                  className="col-span-3"
                />
                {state.errors.quantity && <p>{state.errors.quantity}</p>}
              </div>
            </div>
          </form>
          <DialogFooter>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

import { Prize } from "@/api/interfaces";
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
import { useReducer } from "react";

interface RegisterNewPrizeProps {
  className?: string;
  // eslint-disable-next-line no-empty-pattern
  createPrize({}: Prize): void;
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
  | { type: "UPDATE_FIELD"; field: string; value: string }
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
      errors.code = "o codigo deve ser maior de 0 digitos";
    }

    if (quantity <= 0) {
      errors.quantity = "nao é possivel adicionar 0 a quantidade";
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
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={cn(className)}>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create new prize</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="code" className="text-right">
                  Code
                </Label>
                <Input
                  id="code"
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
                  value={state.formData.quantity}
                  onChange={handleChange}
                  className="col-span-3"
                />
                {state.errors.quantity && <p>{state.errors.quantity}</p>}
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </form>
  );
};

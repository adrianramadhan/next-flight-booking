"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { logout } from "../actions";
import { useFormStatus } from "react-dom";

const ButtonLogout = () => {
  const { pending } = useFormStatus();
  return (
    <div className="space-y-2">
      <form action={logout}>
        <Button
          disabled={pending}
          variant={"destructive"}
          className="w-full justify-start"
          type="submit"
        >
          <LogOut className="mr-2 h-4 w-4" />
          {pending ? "Loading..." : "Logout"}
        </Button>
      </form>
    </div>
  );
};

export default ButtonLogout;

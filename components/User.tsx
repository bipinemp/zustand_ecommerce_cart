"use client";

import { CircleX, ShoppingCart, Trash2, UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useStore } from "@/store/store";
import { useShallow } from "zustand/react/shallow";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ChangeQtyButtons from "./ChangeQtyButtons";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect } from "react";

const User = () => {
  const { fetchUser, setAddress, address, fullName, userName } = useStore(
    useShallow((state) => ({
      fullName: state.fullName,
      userName: state.userName,
      address: state.address,
      setAddress: state.setAddress,
      fetchUser: state.fetchUser,
    }))
  );

  useEffect(() => {
    async function fetchData() {
      await fetchUser();
    }

    fetchUser();
  }, [fetchUser]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"secondary"} size={"icon"}>
          <UserIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="space-y-2 w-96">
        <div className="flex items-center gap-2">
          <p>{fullName}</p>
          <p className="text-sm">{userName}</p>
        </div>

        <Label htmlFor="address">Your Address</Label>
        <Input
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default User;

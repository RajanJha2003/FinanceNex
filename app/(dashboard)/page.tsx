"use client";

import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import Image from "next/image";

export default function Home() {
  const {onOpen}=useNewAccount();
  
  return (
   <div>
    <Button onClick={onOpen}>
      Add
    </Button>
    
    
   </div>
  );
}

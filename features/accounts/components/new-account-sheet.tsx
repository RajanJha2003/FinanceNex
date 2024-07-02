import React from 'react'

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const NewAccountSheet = () => {
  return (
   <Sheet open>
    <SheetContent>
        <SheetHeader>
        <SheetTitle>
            New Account
          </SheetTitle>
          <SheetDescription>
            Create a new account to track your transactions
          </SheetDescription>
        </SheetHeader>
    </SheetContent>

   </Sheet>
  )
}

export default NewAccountSheet
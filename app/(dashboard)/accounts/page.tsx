"use client"


import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton';
import { useNewAccount } from '@/features/accounts/hooks/use-new-account';
import { Loader2, Plus } from 'lucide-react';
import React from 'react'
import {  columns } from './columns';
import { DataTable } from '@/components/data-table';
import { useGetAccounts } from '@/features/accounts/api/use-get-accounts';
import { useBulkDeleteAccounts } from '@/features/accounts/api/use-bulk-delete-accounts';



const AccountsPage = () => {
   

    const {onOpen}=useNewAccount();
    const accountsQuery=useGetAccounts();
    const deleteaccounts=useBulkDeleteAccounts();
    const accounts = accountsQuery.data || [];

    const isDisabled =
    accountsQuery.isLoading ||
    deleteaccounts.isPending;

    if (accountsQuery.isLoading) {
        return (
          <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
            <Card className="border-none drop-shadow-sm">
              <CardHeader>
                <Skeleton className="h-8 w-48" />
              </CardHeader>
              <CardContent>
                <div className="flex h-[500px] w-full items-center justify-center">
                  <Loader2 className="size-6 animate-spin text-slate-300" />
                </div>
              </CardContent>
            </Card>
    
    
          </div>
        );
      }
  return (
    <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
        <Card className="border-none drop-shadow-sm">
            <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
            <CardTitle className="line-clamp-1 text-xl">
            Accounts Page
          </CardTitle>
          <Button size="sm" onClick={onOpen}>
            <Plus className="mr-2 size-4" />
            Add New
          </Button>
                

            </CardHeader>
            <CardContent>
                <DataTable data={accounts}  columns={columns} filterKey='email' onDelete={(row)=>{
                    const ids=row.map((r)=>r.original.id);
                    deleteaccounts.mutate({ids});
                }} disabled={isDisabled}  />

            </CardContent>
            


        </Card>
        
    </div>
  )
}

export default AccountsPage
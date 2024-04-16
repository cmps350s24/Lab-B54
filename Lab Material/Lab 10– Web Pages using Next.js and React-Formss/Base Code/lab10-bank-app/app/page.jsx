import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import accountsRepo from '@/app/repo/accounts-repo'
import Accounts from '@/app/accounts/Accounts'

export default async function Home() {
  const accounts = await accountsRepo.getAccounts()

  // we will get the data
  // const accounts = 
  return (
    <Accounts
      initialAccounts={accounts}>
      </Accounts>
  )
}

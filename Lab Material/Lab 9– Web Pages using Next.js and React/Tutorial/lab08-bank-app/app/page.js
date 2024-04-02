import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Accounts from '@/app/accounts/Accounts'
import accountRepo from '@/app/repo/accounts-repo'


export default async function Home() {
  const accounts = await accountRepo.getAccounts()

  return (
    <div>
      <Accounts initialAccounts={accounts} />
    </div>
  )
}

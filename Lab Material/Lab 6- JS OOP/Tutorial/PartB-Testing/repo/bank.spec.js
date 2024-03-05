
import { convertFromUSToQAR, addAccount, getAccounts } from './bank.js'
import { expect } from 'chai'

const testingAccount = {
    accountNo: 345,
    balance: 100,
    type: 'current'
}
describe('Bank Repo Test Cases', () => {
    describe('Test Cases for Convert From US To QAR Function', () => {
        it('Expect 1 USD to be 3.64 QAR', () => {
            const answer = convertFromUSToQAR(1)
            expect(answer).to.equal(3.64)
        })

        it('Expect 100 USD to be 364 QAR', () => {
            const answer = convertFromUSToQAR(100)
            expect(answer).to.equal(364)
        })
    })

    describe('Test Cases for Add an Account', () => {
        it('Expect the size of the array to increase', () => {
            const numberOfAccountsBeforeAdding = getAccounts().length
            addAccount(testingAccount)
            const numberOfAccountsAfterAdding = getAccounts().length

            expect(numberOfAccountsAfterAdding).to.equal(numberOfAccountsBeforeAdding + 1)

        })
    })
})
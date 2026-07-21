class BankAccount {

    constructor(
        private balance:number
    ){}
	deposit(amount:number){
        this.balance +=amount;
    };
	withdraw (amount:number){
        
           if(amount> this.balance){
            throw new Error('Withdraw cannot be more than the balance.')
           }

           this.balance -=amount;
        
    };
	getBalance ():number{return this.balance}

}
const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance());

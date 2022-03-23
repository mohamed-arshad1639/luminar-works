class Bank 
{
    createAccount()
    {

        let bankAccountNUmber=bk_accno.value
        let bankName=bk_name.value
        let bankaAccountType=bk_acctype.value
        let bankPassword=bk_pwd.value
        let balance=2000;

        let account={
            bankAccountNUmber,bankName,bankaAccountType,bankPassword,balance
        }
        localStorage.setItem(account.bankAccountNUmber,JSON.stringify(account))
        alert("accoumt created")


    }


}
var obj=new Bank()
class User{
  	private _username: string  ;


    constructor( username:string){
    this._username=username;
    }

   public get username(){

    return this._username;
    }

    public set username(newUsername: string){

        if(newUsername.length < 3){
  throw new Error('Error: Username must be at least 3 characters long');
  
        }
        else{

        
         this._username=newUsername;
        }

    }
}

const user = new User("Martin");
user.username = "johnDoe";
console.log(user.username);

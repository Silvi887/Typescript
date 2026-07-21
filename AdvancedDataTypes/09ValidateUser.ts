
type User = {
    id: number | string,
    username: string,
    passwordHash: string | string[],
    status: 'Locked' | 'Unlocked' | 'Deleted',
    email?: string
}

function ValidateUser(user:User):boolean{

    if(typeof user.id =="number" ){

       if(user.id<100){
        return false;
       }
    }
    if(typeof user.username =="string"  && user.username.length <5 || 
        (user.username.length>10)){
       return false;
    }

     if(typeof user.id =="string" ){
         if(user.id.length!=14){
            return false;
         }
        }

         if(typeof user.passwordHash =="string"){
          if(user.passwordHash.length !=20){
              return false;
          }
         }

         if( Array.isArray(user.passwordHash) && (user.passwordHash.length !=4 || 
            user.passwordHash.some(x=> x.length !=8))){
            
           return false;
         }

         if(user.status !="Locked" && user.status !="Unlocked"){
            return false;
         }
         return true;
    }

   

console.log(ValidateUser({ id: '1234-abcd-5678', username: 'tes', passwordHash: '123456-123456-123456', status: 'Unlocked'  }))
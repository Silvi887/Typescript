
enum Reverseday{
    Monday=1,
    Tuesday,
    Wednesday,
    Thirsday,
    Friday,
    Saturday,
    Sunday

}


function Reverse(num:string ):void{

    if(num in Reverseday){
     console.log(Reverseday[num as keyof typeof Reverseday ]);
    }
    else{
        console.log('error');
    }

}

Reverse('Tuesday');
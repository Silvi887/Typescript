function sumarrizePerson(
    id:number,
    firstName:string,
    lastName:string,
    age: number,
    middleName?:string,
    hobbies?:string[],
    workInfo?:[string,number]
 
):[id:number,fullname:string,age:number,hobbies:string, jobsalary:string]{
   let fullname='';
    if (middleName=='' || middleName== undefined){
  fullname=`${firstName} ${lastName}`;
    }
    else if(middleName !=''){
         fullname=`${firstName} ${middleName} ${lastName}`;
    }

    let lasthbbies='';
    if(!hobbies || hobbies?.length==0){
        lasthbbies='-';
    }
    else if(hobbies){
     lasthbbies= hobbies.join(',')
    }
    
    let lastjobsalary='';
    if(workInfo == undefined){
         lastjobsalary='-';
    }
    else{
        lastjobsalary=`${workInfo[0]} -> ${workInfo[1]}`
    }

    return[id,fullname,age,lasthbbies,lastjobsalary];


}
console.log(sumarrizePerson(21,'Kristine', 'Neva', 23, ''))
/*  console.log(sumarrizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']))*/
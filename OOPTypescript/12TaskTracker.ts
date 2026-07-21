class Task{

	public title: string;
	public description: string;
	public completed: boolean= false;
	private  _createdBy: string;

    constructor(title: string,description: string,createdBy: string){

        this.title=title;
        this.description= description;    
        this._createdBy=createdBy;
    }

    get createdBy (){
        return this._createdBy;
    }

    public toggleStatus(){
      this.completed= !this.completed;
    }

    public getDetails():string{
        let completedtask='completed';

        if(this.completed==true){
             completedtask='completed';
        }
        else{
             completedtask='pending';
        }

        const status = this.completed ? "Completed" : "Pending";
        return `Task: ${this.title} - ${this.description} - ${status}`;
    }
    public static createSampleTasks(): Task[]{

       return[new Task("Complete homework", "Finish math exercises", "Charlie"),
        new Task("Clean room", "Clean the room", "Mary")];
       
    }
}
const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));

const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
task1.toggleStatus();
console.log(task1.getDetails());

const task2 = new Task("Clean room", "Clean the room", "Mary");
console.log(task2.getDetails());

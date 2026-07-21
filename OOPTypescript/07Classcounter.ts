class Counter{

    protected static count=0;
    static increment(){
    this.count++;
    }

    static getCount():number{
    return this.count;
    }
}

Counter.increment();

console.log(Counter.getCount());

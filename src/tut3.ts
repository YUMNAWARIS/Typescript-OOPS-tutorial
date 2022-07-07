class Todo{
    private title;
    private todoDetail;

    constructor(t:string,d:string){
        this.title = t;
        this.todoDetail = d;
    }

    public getTitle(){
        return this.title;
    }

    public setTitle(t:string){
        this.title = t;
    }

}

let todo1 = new Todo("TS", "learn Access modifiers");
console.log(todo1.getTitle());
todo1.setTitle("Typescript");
console.log(todo1.getTitle());

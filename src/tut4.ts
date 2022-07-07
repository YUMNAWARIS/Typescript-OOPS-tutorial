class Todos{
    constructor(private title:string, public desc:string){}

    public getTitle(){
        return this.title;
    }

    public setTitle(t:string){
        this.title = t;
    }

}

let todo2 = new Todos("TS", "learn Access modifiers");
console.log(todo2.getTitle());
todo2.setTitle("Typescript");
console.log(todo2.getTitle());
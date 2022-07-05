class User{
    nam:string;
    age:number;
    points:number;

    constructor(n:string,a:number,p?:number){
        this.nam = n;
        this.age = a;
        if (p) {
            this.points=p;
        }else{
            this.points =0;
        }
    }

    format(this:User){
        return `${this.nam} ${this.age} has enrolled with ${this.points} points.`
    }
}

let yums = new User ("yums", 20);
let hums = new User ("hums", 19,1);
let bums = new User ("bums", 20,100);
console.log(yums);

class Point {
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
      // TBD
    }
}



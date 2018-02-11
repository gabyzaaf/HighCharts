export class Point{
    private name:string;
    private data:string[];

    constructor(name:string,data:string[]){
        this.name = name;
        this.data = data;
    }

    getName():string{
        return this.name;
    }

    getData():string[]{
        return this.data;
    }

}
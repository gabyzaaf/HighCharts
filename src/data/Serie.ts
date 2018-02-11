export class Serie{
    private name:string;
    private data:number[];

    constructor(name:string,data:number[]){
        this.name = name;
        this.data = data;
    }

    getName():string{
        return this.name;
    }

    getData():number[]{
        return this.data;
    }
}
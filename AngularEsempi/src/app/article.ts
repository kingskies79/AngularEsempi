export class Article {
    type: string;
    content: string;
    title: string;
    constructor(public t: string, public c: string, public ty: string){
        this.title = t;
        this.content = c;
        this.type = ty;
    }
}

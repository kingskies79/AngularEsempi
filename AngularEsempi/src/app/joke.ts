export class Joke {
    public setup: string;
    public punchline: string;
    public hide: boolean;
    constructor(public set: string, public punch: string){
        this.setup = set;
        this.punchline = punch;
        this.hide = true;
    }
    toggle() {
        this.hide = !this.hide;
    }
}

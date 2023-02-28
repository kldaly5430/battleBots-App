export class Robot {
    public name: string;
    public color: string;
    public attack: number;
    public defense: number;

    constructor(name: string, color: string, attack: number, defense: number) {
        this.name = name || '';
        this.color = color || '';
        this.attack = attack || 0;
        this.defense = defense || 0;
    }
    // id?: string;
    // name?: string;
    // color?: string;
    // attack?: number;
    // defense?: number;
}
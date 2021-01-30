export class Session {

    constructor(
        public id: number,
        public name: string,
        public track: string,
        public date: Date,
        public duree: number,
        public adress: string,
        public participants: number[],
        public isCompleted: boolean) { }
}

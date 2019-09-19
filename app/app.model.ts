export interface Person {
    name: string;
    surname: string;
}

export interface Group {
    name: string;
    people: Person[];
}
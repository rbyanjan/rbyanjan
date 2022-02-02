export interface Person {
    name: string;
    age?: number;
    formatName: () => string; // any object that implements this interface will have to provide an implementation for that function
}
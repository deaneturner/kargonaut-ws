export enum Type {
    ITEM,
    PACKAGE,
    CONTAINER,
}

export class CargoFactory {
    /**
     * Generator
     */
    static generate(generationType: Type) {
        return {};
    }
}

export abstract class AbstractObserver {
    abstract notify(message: string): void;
}
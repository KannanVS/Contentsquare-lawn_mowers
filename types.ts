export type Callback<T> = (error: Error, results?: T) => void;

export interface result {
    position: number[],
    finalDirection: string,
}
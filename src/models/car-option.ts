export interface CarOption {
    configs: CarConfiguration[];
    towHitch: boolean;
    yoke: boolean;
}

export interface CarConfiguration {
    id: number;
    description: string;
    range: number;
    speed: number;
    price: number;
}
declare const enum Color {
    Off,
    Black = 0,
    Pink,
    Purple,
    Blue,
    LightBlue,
    Cyan,
    Green,
    Yellow,
    Orange,
    Red,
    White,
}

declare const enum Orientation {
    Back,
    Up,
    Down,
    Left,
    Right,
    Front,
}

interface IColorAndDistanceValue {
    color: Color | undefined;
    distance: number;
}

interface ITiltValue {
    x: number;
    y: number;
    z: number;
}

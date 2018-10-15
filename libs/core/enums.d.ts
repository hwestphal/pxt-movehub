declare const enum Color {
    Black,
    Off = 0,
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

declare const enum ColorAndDistanceMode {
    //% block="Color or Distance"
    ColorOrDistance,
    Luminosity,
}

declare const enum TiltMode {
    Simple,
    Precise,
}

declare const enum RotationMode {
    Angle,
    Speed,
}

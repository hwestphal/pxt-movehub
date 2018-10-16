let turning = false
function turn() {
    if (!(turning)) {
        turning = true
        motorAB.stop()
        motorAB.turnRight(20, 400 + Math.randomRange(0, 200))
        motorAB.forward(40)
        turning = false
    }
}
colorDistanceC.onColorOrDistanceChanged(function (color, distance) {
    if (distance < 0.2) {
        turn()
    }
})
rotationAB.onSpeedChanged(function (speed) {
    if (speed == 0) {
        turn()
    }
})
rotationAB.mode(RotationMode.Speed)

basic.forever(function () {
    if (input.compassHeading() > 270 && input.compassHeading() < 360) {
        basic.showArrow(ArrowNames.East)
    }
    if (input.compassHeading() > 0 && input.compassHeading() < 90) {
        basic.showArrow(ArrowNames.North)
    }
    if (input.compassHeading() > 90 && input.compassHeading() < 180) {
        basic.showArrow(ArrowNames.West)
    }
    if (input.compassHeading() > 180 && input.compassHeading() < 270) {
        basic.showArrow(ArrowNames.South)
    }
})

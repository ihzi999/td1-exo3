input.onButtonPressed(Button.A, function () {
    nb += 1
    basic.showString("" + (nb))
    if (nb == 10) {
        nb = 0
    }
})
let nb = 0
nb = 1
basic.showString("" + (nb))
basic.forever(function () {
	
})

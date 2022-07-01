/** Functions for button handling **/

#include <avr/io.h>
#include "led.h"
#include "adc.h"



void Buttons_Init(void) {

}

// BUTTON STOP => PB5 PORT B  0x20
void executeWhenClicked(volatile unsigned char *ddr,
                        volatile unsigned char *port,
                        volatile unsigned char *pin,
                        int value,
                        void (*action)(void)
) {
    //*ddr &= ~value;
    //*port |= value;
    if (*pin & value) {
        action();
    }
}


// joystick

void executeWithJoystick(void) {

    int vertical, horizontal;

    int valueLeft = 0x04;
    int valueRight = 0x01;
    int valueCenterLeft = 0x10;
    int valueCenterRight = 0x20;

    initLed(&DDRE, valueLeft);
    initLed(&DDRD, valueRight);
    initLed(&DDRD, valueCenterRight);
    initLed(&DDRD, valueCenterLeft);

    switchOff(&PORTE, valueLeft);
    switchOff(&PORTD, valueRight);
    switchOff(&PORTD, valueCenterRight);
    switchOff(&PORTD, valueCenterLeft);


    while (1) {

        ad_init(6); // vertical
        vertical = ad_capture();

        ad_init(7); // horizontal
        horizontal = ad_capture();

        if (horizontal < 50) {
            // init led gauche
            switchOn(&PORTE, valueLeft);
        } else {
            switchOff(&PORTE, valueLeft);
        }

        if (horizontal > 200) {
            // init led droite
            switchOn(&PORTD, valueRight);
        } else {
            switchOff(&PORTD, valueRight);
        }
        if (vertical < 50) {
            // init led gauche
            switchOn(&PORTD, valueCenterRight);
        } else {
            switchOff(&PORTD, valueCenterRight);
        }

        if (vertical > 200) {
            // init led droite
            switchOn(&PORTD, valueCenterLeft);
        } else {
            switchOff(&PORTD, valueCenterLeft);
        }
    }
}



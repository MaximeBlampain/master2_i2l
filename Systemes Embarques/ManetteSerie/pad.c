#include <avr/io.h>
#include <util/delay.h>
#include <stdio.h>

#include "serial.h"
#include "led.h"
#include "adc.h"
#include "button.h"

int main(void) {

  executeWithJoystick();

  // executeWithMinicom();

  // while(1) {
    // executeWhenClicked(
    //   &DDRB,
    //   &PORTB,
    //   &PINB,
    //   0x20,
    //   toggleAllChenillard
    // ); 

  // }


}



#include <avr/io.h>
#include <util/delay.h>
#include <stdio.h>

#include "serial.h"
#include "led.h"
#include "adc.h"
#include "button.h"

int main(void) {
  // int value = 0x02;
  // DDRF &= ~value;
  // while(1) {
  //   executeWhenClicked(
  //     &DDRF,
  //     &PORTF,
  //     &PINF,
  //     value,
  //     toggleAllChenillard
  //   ); 
  // }
  executeWithJoystick();
}



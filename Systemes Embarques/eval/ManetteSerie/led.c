/** Functions for led handling **/

#include <avr/io.h>
#include <util/delay.h>
#include "led.h"

extern int LEDS[LEDS_SIZE];
extern volatile unsigned char* REFS[LEDS_SIZE][2];

// LED 1 => 0x10 PORT C PC4
// LED 2 => 0x20 PORT C PC5
// LED 3 => 0x04 PORT D PD2
// LED 4 => 0x10 PORT D PD4
// LED 5 => 0x08 PORT D PD3
// LED 6 => 0x40 PORT D PD6
// LED 7 => 0x80 PORT D PD7
// LED 8 => 0x01 PORT B PB0
// LED 9 => 0x02 PORT B PB1
// LED 10=> 0x04 PORT B PB2

void initLed(volatile unsigned char *ddr, int value) {
  *ddr |= value;
}

void toggleLed(volatile unsigned char *port, int value) {
  *port ^= value;
}

void switchOn(volatile unsigned char *port, int value) {
  *port |= value;
}
void switchOff(volatile unsigned char *port, int value) {
  *port &= ~value;
}

void toggleAllChenillard() {
  for(unsigned int i = 0; i < LEDS_SIZE; i++) {
    initLed(REFS[i][1], LEDS[i]);
    toggleLed(REFS[i][0], LEDS[i]);
  }

  for(unsigned int i = 0; i < LEDS_SIZE; i++) {
    toggleLed(REFS[i][0], LEDS[i]);
    if (i != 0) {
      int previous = i - 1;
      toggleLed(REFS[previous][0], LEDS[previous]);
    }
    _delay_ms(500);
  }
  toggleLed(REFS[LEDS_SIZE - 1][0], LEDS[LEDS_SIZE - 1]);

}

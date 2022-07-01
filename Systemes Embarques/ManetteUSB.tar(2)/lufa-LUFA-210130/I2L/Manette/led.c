/** Functions for led handling **/

#include <avr/io.h>
#include <util/delay.h>
#include "led.h"

extern int LEDS[LEDS_SIZE];
extern volatile unsigned char* REFS[LEDS_SIZE][2];

// LED 2 => 0x01 PORT D PD0
// LED 3 => 0x02 PORT D PD1
// LED 4 => 0x08 PORT D PD3
// LED 5 => 0x04 PORT D PD2
// LED 6 => 0x10 PORT D PD4
// LED 7 => 0x10 PORT B PB4
// LED 8 => 0x40 PORT B PB6
// LED 9 => 0x40 PORT C PC6
// LED 10=> 0x80 PORT C PC7
// LED 11=> 0x04 PORT E PE2

void initLed(volatile unsigned char *ddr, int value) {
  *ddr |= value;
}

void toggleLed(volatile unsigned char *port, int value) {
  *port ^= value;
}


/** Configure LEDs to off */
void LEDs_Init(void)
{
  for(int i=0 ; i<LEDS_SIZE ; i++){
    initLed(REFS[i][1], LEDS[i]);
    toggleLed(REFS[i][0], LEDS[i]);
  }
  LEDs_Toggle();
}

void LEDs_Toggle(void)
{
  for(int i=0 ; i<LEDS_SIZE ; i++){
    toggleLed(REFS[i][0], LEDS[i]);
  }
}

void toggleAllLeds(void)
{
  int valueB = 0x07;
  int valueC = 0x30;
  int valueD = 0xDC;
  initLed(&DDRB, valueB);
  initLed(&DDRC, valueC);
  initLed(&DDRD, valueD);
  while(1) {
    toggleLed(&PORTB, valueB);
    toggleLed(&PORTC, valueC);
    toggleLed(&PORTD, valueD);
    _delay_ms(500);
  }
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

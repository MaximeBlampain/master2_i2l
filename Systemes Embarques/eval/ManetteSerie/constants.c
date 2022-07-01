#include <avr/io.h>
#include "led.h"

int LEDS[LEDS_SIZE] = {
    0x10,
    0x20,
    0x04,
    0x10,
    0x08,
    0x40,
    0x80,
    0x01,
    0x02,
    0x04
};

volatile unsigned char* REFS[LEDS_SIZE][2] = {
    {&PORTC, &DDRC},
    {&PORTC, &DDRC},
    {&PORTD, &DDRD},
    {&PORTD, &DDRD},
    {&PORTD, &DDRD},
    {&PORTD, &DDRD},
    {&PORTD, &DDRD},
    {&PORTB, &DDRB},
    {&PORTB, &DDRB},
    {&PORTB, &DDRB}
};

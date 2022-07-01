#include <avr/io.h>
#include "led.h"

#define LEDS_SIZE 10

int LEDS[LEDS_SIZE] = {
    0x01,
    0x02,
    0x08,
    0x04,
    0x10,
    0x10,
    0x40,
    0x40,
    0x80,
    0x04
};

volatile unsigned char* REFS[LEDS_SIZE][2] = {
    {&PORTD, &DDRD},
    {&PORTD, &DDRD},
    {&PORTD, &DDRD},
    {&PORTD, &DDRD},
    {&PORTD, &DDRD},
    {&PORTB, &DDRB},
    {&PORTB, &DDRB},
    {&PORTC, &DDRC},
    {&PORTC, &DDRC},
    {&PORTE, &DDRE}
};

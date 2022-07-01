/** Functions for serial port **/

#include <avr/io.h>
#include <stdio.h>
#include "led.h"
#include "adc.h"

extern int LEDS[LEDS_SIZE];
extern volatile unsigned char* REFS[LEDS_SIZE][2];

void serie_init(long int speed){
    UBRR0=F_CPU/(((unsigned long int)speed)<<4)-1; // configure la vitesse
    UCSR0B=(1<<TXEN0 | 1<<RXEN0);                  // autorise l'envoi et la réception
    UCSR0C=(1<<UCSZ01 | 1<<UCSZ00);                // 8 bits et 1 bit de stop
    UCSR0A &= ~(1 << U2X0);                        // double vitesse désactivée
}

void serie_envoyer(char c){
    loop_until_bit_is_set(UCSR0A,UDRE0);
    UDR0=c;
}

char serie_recevoir(void){
    loop_until_bit_is_set(UCSR0A, RXC0);
    return UDR0;
}


void executeWithMinicom(){

    int vertical, horizontal;
    unsigned char letter;
    serie_init(9600);

    // initLeds
    for(unsigned int i = 0; i < LEDS_SIZE; i++) {
        initLed(REFS[i][1], LEDS[i]);
        switchOff(REFS[i][0], LEDS[i]);
    }

    while(1){
        letter = serie_recevoir();

        // quand la manette reçois le caractère ?
        if(letter == '?') {
            // Init joystick
            ad_init(2); // vertical
            vertical = ad_capture();
            ad_init(1); // horizontal
            horizontal = ad_capture();

            if(horizontal < 5) {
                serie_envoyer('Q');
            }
            if(horizontal > 250) {
                serie_envoyer('D');
            }

            if(vertical < 5) {
                serie_envoyer('S');
            }

            if(vertical > 250) {
                serie_envoyer('Z');
            }

            if(vertical == 128 && horizontal == 128){
                serie_envoyer('*');
            }
        }

        // Quand la manette reçois le caractère D
        if(letter == 'D') {
            // switch on all leds, pas testé car plus possible d'upload, bug sur la manette
            for(unsigned int i = 0; i < LEDS_SIZE; i++) {
                initLed(REFS[i][1], LEDS[i]);
                switchOn(REFS[i][0], LEDS[i]);
            }
            
        }

        // envoyer caractère appuyé sur le clavier
        //serie_envoyer(letter);

    }

}

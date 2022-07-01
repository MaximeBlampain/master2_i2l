/** Functions for serial port **/

#include <avr/io.h>
#include <stdio.h>



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

    int valueB = 0x07;
    int valueC = 0x30;
    int valueD = 0xDC;
    initLed(&DDRB, valueB);
    initLed(&DDRC, valueC);
    initLed(&DDRD, valueD);
    serie_init(9600);

    while(1){

        unsigned char letter = serie_recevoir();

        if(letter == '0') {
            toggleLed(&PORTB, valueB);
            toggleLed(&PORTC, valueC);
            toggleLed(&PORTD, valueD);
        }

        DDRB &= ~0x20;
        PORTB |= 0x20;
        if (PINB & 0x20) {
                    serie_envoyer('C');
        }

        serie_envoyer(letter);

       
    }

}

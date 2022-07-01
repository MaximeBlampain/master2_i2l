/** Functions for button handling **/

#include <avr/io.h>
#include "led.h"
#define ADFR 5


void ad_init(unsigned char channel){    // Sélectionne un canal
ADCSRA |= (1<<ADPS2)|(1<<ADPS1)|(1<<ADPS0); // Division de fréquence 128 => 125KHz
ADCSRA &= ~(1<<ADFR);                       // Mode conversion unique
ADMUX |= (1<<REFS0)|(1<<ADLAR);             // Référence de mesure AVCC
ADMUX=(ADMUX&0xf0)|channel;             // Selection du canal   
ADCSRA|=(1<<ADEN);                      // Convertisseur activé
}

unsigned int ad_capture(void){          // Acquisition de tension
ADCSRA|=(1<<ADSC);                      // Début de conversion
while(bit_is_set(ADCSRA, ADSC));        // Attente de la fin de conversion
return ADCH;                            // Résultat sur 8 bits car ADLAR=1
}

// BUTTON STOP => PB5 PORT B  0x20
void executeWhenClicked(volatile unsigned char *ddr, 
                        volatile unsigned char *port, 
                        volatile unsigned char *pin, 
                        int value,
                        void (*action)()
) {
  *ddr &= ~value;
  *port |= value;
  if (*pin & value) {
    action();
  }
}


// joystick

void executeWithJoystick() {

  int vertical, horizontal;

  int valueB = 0x07;
  int valueC = 0x30;
  int valueD = 0xDC;
  initLed(&DDRB, valueB);
  initLed(&DDRC, valueC);
  initLed(&DDRD, valueD);

  toggleLed(&PORTB, valueB);
  toggleLed(&PORTC, valueC);
  toggleLed(&PORTD, valueD);

  while(1) {

      ad_init(2); // vertical
      vertical = ad_capture();

      ad_init(1); // horizontal
      horizontal = ad_capture();

      if(horizontal < 10) {
      // init led gauche
        toggleLed(&PORTB, 0x04);
      }

      if(horizontal > 245) {
      // init led droite
        toggleLed(&PORTC, 0x10);
      }

      if(vertical < 10) {
      // init led gauche
        toggleLed(&PORTD, 0x10);
      }

      if(vertical > 245) {
      // init led droite
        toggleLed(&PORTD, 0x80);
      }
  }



}

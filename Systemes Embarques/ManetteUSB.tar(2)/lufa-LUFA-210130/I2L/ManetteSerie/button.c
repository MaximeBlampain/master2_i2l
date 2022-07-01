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
  //*ddr &= ~value;
  //*port |= value;
  if (*pin & value) {
    action();
  }
}


// joystick

void executeWithJoystick() {

  int vertical, horizontal;

  int valueLeft = 0x04;
  int valueRight = 0x01;
  int valueCenterLeft = 0x10;
  int valueCenterRight = 0x20;

  initLed(&DDRE, valueLeft);
  initLed(&DDRD, valueRight);
  initLed(&DDRD, valueCenterRight);
  initLed(&DDRD, valueCenterLeft);

  toggleLed(&PORTE, valueLeft);
  toggleLed(&PORTD, valueRight);
  toggleLed(&PORTD, valueCenterRight);
  toggleLed(&PORTD, valueCenterLeft);

  while(1) {

      ad_init(6); // vertical
      vertical = ad_capture();

      ad_init(7); // horizontal
      horizontal = ad_capture();

      if(horizontal < 50) {
      // init led gauche
        toggleLed(&PORTE, valueLeft);
      }

      if(horizontal > 200) {
      // init led droite
        toggleLed(&PORTD, valueRight);
      }

      if(vertical < 50) {
      // init led gauche
        toggleLed(&PORTD, valueCenterRight);
      }

      if(vertical > 200) {
      // init led droite
        toggleLed(&PORTD, valueCenterLeft);
      }
  }



}

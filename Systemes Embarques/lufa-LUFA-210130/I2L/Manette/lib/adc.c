//
// Created by arthur on 6/28/22.
//

#include "adc.h"
#include <avr/io.h>
#define ADFR 5

void ad_init(unsigned char channel) {    // Sélectionne un canal
    ADCSRA |= (1 << ADPS2) | (1 << ADPS1) | (1 << ADPS0); // Division de fréquence 128 => 125KHz
    ADCSRA &= ~(1 << ADFR);                       // Mode conversion unique
    ADMUX |= (1 << REFS0) | (1 << ADLAR);             // Référence de mesure AVCC
    ADMUX = (ADMUX & 0xf0) | channel;             // Selection du canal
    ADCSRA |= (1 << ADEN);                      // Convertisseur activé
}

unsigned int ad_capture(void) {          // Acquisition de tension
    ADCSRA |= (1 << ADSC);                      // Début de conversion
    while (bit_is_set(ADCSRA, ADSC));        // Attente de la fin de conversion
    return ADCH;                            // Résultat sur 8 bits car ADLAR=1
}
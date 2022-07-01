/** Definitions for led handling **/

#define LEDS_SIZE 11


void LEDs_SwitchOn(void);
void LEDs_SwitchOff(void);
void LEDs_Init(void);

void initLed(volatile unsigned char *ddr, int value);
void switchOn(volatile unsigned char *port, int value);
void switchOff(volatile unsigned char *port, int value);

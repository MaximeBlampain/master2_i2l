/** Definitions for led handling **/
#define LEDS_SIZE 10

void initLed(volatile unsigned char *ddr, int value);

void toggleLed(volatile unsigned char *port, int value);

void switchOn(volatile unsigned char *port, int value);

void switchOff(volatile unsigned char *port, int value);

void toggleAllLeds(void);

void toggleAllChenillard(void);

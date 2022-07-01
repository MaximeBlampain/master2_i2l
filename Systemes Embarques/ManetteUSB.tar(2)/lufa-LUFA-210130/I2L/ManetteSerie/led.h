/** Definitions for led handling **/
#define LEDS_SIZE 11

void initLed(volatile unsigned char *ddr, int value);

void toggleLed(volatile unsigned char *port, int value);

void toggleAllLeds(void);

void toggleAllChenillard(void);

/** Definitions for led handling **/
#define LEDS_SIZE 10

void initLed(volatile unsigned char *ddr, int value);

void toggleLed(volatile unsigned char *port, int value);

void LEDs_Init(void);

void LEDs_Toggle(void);

void toggleAllLeds(void);

void toggleAllChenillard(void);

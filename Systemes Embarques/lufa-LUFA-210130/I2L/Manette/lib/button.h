
/** Definitions for button handling **/

void executeWhenClicked(volatile unsigned char *ddr, 
                        volatile unsigned char *port, 
                        volatile unsigned char *pin, 
                        int value,
                        void (*action)(void)
);

void executeWithJoystick(void);

void Buttons_Init(void);
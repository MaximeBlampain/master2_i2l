/** Definitions for button handling **/

void executeWhenClicked(volatile unsigned char *ddr, 
                        volatile unsigned char *port, 
                        volatile unsigned char *pin, 
                        int value,
                        void (*action)()
);

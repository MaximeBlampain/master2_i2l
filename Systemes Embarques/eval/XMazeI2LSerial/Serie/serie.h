/*
 * Public definitions for serial library
 */

////
// Constants
////

#define SERIAL_READ	0
#define SERIAL_WRITE	1
#define SERIAL_BOTH	2

////
// Public prototypes
////
int serialOpen(char *device,int mode,unsigned char block);
void serialConfig(int fd,int speed);
void serialClose(int fd);

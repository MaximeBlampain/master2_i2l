/*
 * Serial library
 */

////
// Include files
////
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <termios.h>
#include <strings.h>
#include <sys/types.h>
#include <sys/ioctl.h>
#include <sys/file.h>
#include <linux/serial.h>

#include "serie.h"

////
// Functions
////

//
// Open serial port device
//
int serialOpen(char *device,int mode,unsigned char block){
int flags=(mode==SERIAL_READ?O_RDONLY:(mode==SERIAL_WRITE?O_WRONLY:O_RDWR));
if(!block) flags |= O_NONBLOCK;
int fd=open(device,flags|O_NOCTTY); 
if(fd<0){ perror(device); exit(-1); }
return fd;
}

//
// Serial port configuration
//
void serialConfig(int fd,int speed){
int fspeed;
switch(speed){
  case 1200: fspeed=B1200; break;
  case 2400: fspeed=B2400; break;
  case 4800: fspeed=B4800; break;
  case 9600: fspeed=B9600; break;
  case 19200: fspeed=B19200; break;
  case 38400: fspeed=B38400; break;
  case 57600: fspeed=B57600; break;
  case 115200: fspeed=B115200; break;
  default: fprintf(stderr,"Unknown serial speed %d.\n",speed); exit(-1);
  }
struct termios new;
bzero(&new,sizeof(new));
new.c_cflag=CLOCAL|CREAD|fspeed|CS8;
new.c_iflag=0;
new.c_oflag=0;
new.c_lflag=0;     /* set input mode (non-canonical, no echo,...) */
new.c_cc[VTIME]=0; /* inter-character timer unused */
new.c_cc[VMIN]=1;  /* blocking read until 1 char received */
if(tcsetattr(fd,TCSANOW,&new)<0){ perror("serialInit.tcsetattr"); exit(-1); }
}

//
// Serial port termination
//
void serialClose(int fd){
close(fd);
}

#include <arpa/inet.h>  // sockaddr_in(), inet_ntoa()
#include <cstring>      // memset()
#include <iostream>     // cout() and cerr()
#include <sys/socket.h> // socket(), bind(), recvfrom(), sendto()
#include <unistd.h>     // close()

/**
 * A BIT MORE ABOUT THESE IMPORTS.
 * ===============================
 * cout()        : Writing to the stdout stream
 * cerr()        : Write to stderr stream
 * memset()      : Clearing the memory
 * close()       : Closing the UDP Socket
 * sockaddr_in   : Stores the IP address, Port Number and Address Family info.
 * inet_ntoa()   : Convert binary IP addresses into readable strings.
 * inet_addr()   : Convert IP string into binary address.
 * socket()      : Create socket file descriptor (Int to track the socket).
 * bind()        : Binds the socket an IP and port to listen for messages
 * recvfrom()    : Receive incoming messages
 * sendto()      : Send messages to the client.
 */

#define SERVER_PORT 8080 // Port where the server will listen for messages
#define BUFFER_SIZE 1024 // Max size of the message buffer

/**
 * MAIN OUTLINE OF THE PROGRAM
 * ---------------------------
 * 1. create a socket file descriptor
 * 2. flush the server address struct
 * 3. re-create the server address struct
 * 4. bind the socket to the specified ip and port
 * 5. create a buffer to hold incoming messages
 * 6. Store the client's information
 * 7. run an infinite loop to continuously receive messages.
 * 8. receive data (blocking)
 * 9. print received message
 * 10. echo message back
 * 11. break out of the loop when a shutdown message arrives
 * 12. close the socket.
 */

int main() {
  // 1. create a socket file descriptor
  //   Domain - AF_INET = Addressing Family is IPv4
  //   Socket Type - SOCK_DGRAM = Use UDP as socket type
  //   Protocol - 0 = Use the default protocol for the mentioned socket type.
  int sockFd = socket(AF_INET, SOCK_DGRAM, 0);

  // Check if the socket was created properly (Shouldn't be -ve int)
  if (sockFd < 0) {
    std::cerr << "Failed to create a socket" << std::endl; // Print message.
    return 1; // Exit with non zero value to indicate error.
  }

  // 2. Create and flush the server address struct
  sockaddr_in serverAddr;                          // Create the server address
  unsigned long servAddrSize = sizeof(serverAddr); // Store server addr size
  memset(&serverAddr, 0, servAddrSize);            // Set all bytes to 0

  // 3. Re-create the server address struct
  serverAddr.sin_family = AF_INET;          // Use IPv4 Address Family
  serverAddr.sin_addr.s_addr = inet_addr("127.0.0.1");  // Listen to loopback
  serverAddr.sin_port = htons(SERVER_PORT); // Convert Port to Network Byte

  // 4. Bind the socket to the specified ip and port
  int bindResult = bind(sockFd, (sockaddr *)&serverAddr, servAddrSize);

  // If binding was unsuccessful, print to the std error stream
  if (bindResult < 0) {
    std::cerr << "Could not bind socket" << std::endl; // print the message
    return 1; // Exit with non zero code
  }

  // 5. Create a buffer to hold incoming messages
  char msgBuffer[BUFFER_SIZE];

  // 6. Store the client information
  sockaddr_in clientAddr;                   // Create a client address struct
  socklen_t clientLen = sizeof(clientAddr); // Store the length of client addr

  // Print a message on the console.
  std::cout << "UDP server started on port : " << SERVER_PORT << std::endl;

  // 7. Run an infinite loop to continuously receive messages.
  while (true) {
    // Clear the message buffer
    std::memset(msgBuffer, 0, BUFFER_SIZE);

    // 8. Receive data (blocking)
    ssize_t bytesReceived = recvfrom(sockFd, msgBuffer, BUFFER_SIZE, 0,
                                     (sockaddr *)&clientAddr, &clientLen);

    // Check if there was an error in getting the data
    if (bytesReceived < 0) {
      std::cerr << "Error receiving data..." << std::endl;
      continue;
    }

    // 9. print received message
    std::cout << "Incoming Message: " << msgBuffer;
    // Print client information
    std::cout << "From : " << inet_ntoa(clientAddr.sin_addr) << ":"
              << ntohs(clientAddr.sin_port) << "\n";

    // 10. echo message back
    sendto(sockFd, msgBuffer, bytesReceived, 0, (sockaddr *)&clientAddr,
           clientLen);

    // 11. break out of the loop when a shutdown message arrives
    if (std::strcmp(msgBuffer, "shutdown") == 0) {
      std::cout << "Shutdown command received. Exiting server.\n";
      break; // Exit the loop
    }
  }

  // 12. close the socket.
  close(sockFd);
  return 0;
}

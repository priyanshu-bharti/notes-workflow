import { createSocket } from "node:dgram";

const PORT = 8080;
const IP_ADDRESS = "127.0.0.1";

// Create a UDPv4 Socket
const socket = createSocket("udp4");

// Listen to incoming requests.
socket.on("message", (message, clientInfo) => {
  // Store the current message
  const currentMessage = message.toString();

  // Print the incoming message and the client information
  console.log(`Incoming Message : ${currentMessage}`);
  console.log(`From : ${clientInfo.address}:${clientInfo.port}`);

  // Trigger a shutdown when "shutdown" is sent
  if (currentMessage.trim() === "shutdown") {
    console.log("Closing the Socket...");
    socket.close();
    return;
  }

  // Send an echo response.
  socket.send(
    `Echo From Server : ${currentMessage}`,
    clientInfo.port,
    clientInfo.address,
    (error) => {
      if (error) console.error("Could not send the message : ", error);
    }
  );
});

// Bind the port and the host to listen for messages
socket.bind(PORT, IP_ADDRESS, () => {
  console.log(`UDP server is running on : ${IP_ADDRESS}:${PORT}`);
});

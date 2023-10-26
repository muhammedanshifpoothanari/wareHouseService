const amqp = require("amqplib");
const { updateCntrl:updateCntrlAbstraction } = require('../controller/userSpecific/update.controller');
const { setCntrl:createCntrlAbstraction } = require('../controller/userSpecific/create.controller');
const {blockByIdCntrl: blockByIdCntrlAbstraction } = require('../controller/adminSpecific/block.controller');
const {unBlockByIdCntrl: unBlockByIdCntrlAbstraction } = require('../controller/adminSpecific/unBlock.controller');
const {unVerifyByIdCntrl: unVerifyByIdCntrlAbstraction } = require('../controller/adminSpecific/unVerify.controller');
const {verifyByIdCntrl: verifyByIdCntrlAbstraction } = require('../controller/adminSpecific/verify.controller');
const queue1 = "updateWareHouse";
const queue2 = "createWareHouse";
const queue3 = "blockWareHouseById";
const queue4 = "unBlockWareHouseById";
const queue5 = "unVerifyWareHouseById";
const queue6 = "verifyWareHouseById";

(async () => {
  try {
    const rabbitMqurl = process.env.RABBITMQURL;
    const connection = await amqp.connect(`${rabbitMqurl}`);
    const channel = await connection.createChannel();
 //////////queue1\\\\\\\\\\\
    await channel.assertQueue(queue1, { durable: false });
    await channel.consume(
        queue1,
      (message:any) => {
        if (message) {
          console.log(
            " [x] Received '%s'",
            JSON.parse(message.content.toString())
          );
          const dataFromMessage = JSON.parse(message.content.toString());

          updateCntrlAbstraction(dataFromMessage).then((result:any) => {
            console.log("Controller result:", result);
          });
        }
      },
      { noAck: true }
    );
   //////////queue2\\\\\\\\\\\
    await channel.assertQueue(queue2, { durable: false });
    await channel.consume(
        queue2,
      (message:any) => {
        if (message) {
          console.log(
            " [x] Received '%s'",
            JSON.parse(message.content.toString())
          );
          const dataFromMessage = JSON.parse(message.content.toString());

          // Call the updateCntrl function with the data
          createCntrlAbstraction(dataFromMessage).then((result:any) => {
            // Handle the result here, you can log or perform other actions
            console.log("Controller result:", result);
          });
        }
      },
      { noAck: true }
    );
    //////////queue3\\\\\\\\\\\
    await channel.assertQueue(queue3, { durable: false });
    await channel.consume(
        queue3,
      (message:any) => {
        if (message) {
          console.log(
            " [x] Received '%s'",
            JSON.parse(message.content.toString())
          );
          const dataFromMessage = JSON.parse(message.content.toString());

          // Call the updateCntrl function with the data
          blockByIdCntrlAbstraction(dataFromMessage).then((result:any) => {
            // Handle the result here, you can log or perform other actions
            console.log("Controller result:", result);
          });
        }
      },
      { noAck: true }
    );
    //////////queue4\\\\\\\\\\\
    await channel.assertQueue(queue4, { durable: false });
    await channel.consume(
        queue4,
      (message:any) => {
        if (message) {
          console.log(
            " [x] Received '%s'",
            JSON.parse(message.content.toString())
          );
          const dataFromMessage = JSON.parse(message.content.toString());

          // Call the updateCntrl function with the data
          unBlockByIdCntrlAbstraction(dataFromMessage).then((result:any) => {
            // Handle the result here, you can log or perform other actions
            console.log("Controller result:", result);
          });
        }
      },
      { noAck: true }
    );
    //////////queue5\\\\\\\\\\\
    await channel.assertQueue(queue5, { durable: false });
    await channel.consume(
        queue5,
      (message:any) => {
        if (message) {
          console.log(
            " [x] Received '%s'",
            JSON.parse(message.content.toString())
          );
          const dataFromMessage = JSON.parse(message.content.toString());

          // Call the updateCntrl function with the data
          unVerifyByIdCntrlAbstraction(dataFromMessage).then((result:any) => {
            // Handle the result here, you can log or perform other actions
            console.log("Controller result:", result);
          });
        }
      },
      { noAck: true }
    );
    //////////queue6\\\\\\\\\\\
    await channel.assertQueue(queue6, { durable: false });
    await channel.consume(
        queue6,
      (message:any) => {
        if (message) {
          console.log(
            " [x] Received '%s'",
            JSON.parse(message.content.toString())
          );
          const dataFromMessage = JSON.parse(message.content.toString());

          // Call the updateCntrl function with the data
          verifyByIdCntrlAbstraction(dataFromMessage).then((result:any) => {
            // Handle the result here, you can log or perform other actions
            console.log("Controller result:", result);
          });
        }
      },
      { noAck: true }
    );

    console.log("[*] Waiting for messages. To exit press CTRL+C");
  } catch (err) {
    console.warn(err);
  }
})();
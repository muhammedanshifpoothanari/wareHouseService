"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const amqp = require("amqplib");
const { updateCntrl: updateCntrlAbstraction } = require('../controller/userSpecific/update.controller');
const { setCntrl: createCntrlAbstraction } = require('../controller/userSpecific/create.controller');
const { blockByIdCntrl: blockByIdCntrlAbstraction } = require('../controller/adminSpecific/block.controller');
const { unBlockByIdCntrl: unBlockByIdCntrlAbstraction } = require('../controller/adminSpecific/unBlock.controller');
const { unVerifyByIdCntrl: unVerifyByIdCntrlAbstraction } = require('../controller/adminSpecific/unVerify.controller');
const { verifyByIdCntrl: verifyByIdCntrlAbstraction } = require('../controller/adminSpecific/verify.controller');
const queue1 = "updateWareHouse";
const queue2 = "createWareHouse";
const queue3 = "blockWareHouseById";
const queue4 = "unBlockWareHouseById";
const queue5 = "unVerifyWareHouseById";
const queue6 = "verifyWareHouseById";
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rabbitMqurl = process.env.RABBITMQURL;
        const connection = yield amqp.connect(`${rabbitMqurl}`);
        const channel = yield connection.createChannel();
        //////////queue1\\\\\\\\\\\
        yield channel.assertQueue(queue1, { durable: false });
        yield channel.consume(queue1, (message) => {
            if (message) {
                console.log(" [x] Received '%s'", JSON.parse(message.content.toString()));
                const dataFromMessage = JSON.parse(message.content.toString());
                updateCntrlAbstraction(dataFromMessage).then((result) => {
                    console.log("Controller result:", result);
                });
            }
        }, { noAck: true });
        //////////queue2\\\\\\\\\\\
        yield channel.assertQueue(queue2, { durable: false });
        yield channel.consume(queue2, (message) => {
            if (message) {
                console.log(" [x] Received '%s'", JSON.parse(message.content.toString()));
                const dataFromMessage = JSON.parse(message.content.toString());
                // Call the updateCntrl function with the data
                createCntrlAbstraction(dataFromMessage).then((result) => {
                    // Handle the result here, you can log or perform other actions
                    console.log("Controller result:", result);
                });
            }
        }, { noAck: true });
        //////////queue3\\\\\\\\\\\
        yield channel.assertQueue(queue3, { durable: false });
        yield channel.consume(queue3, (message) => {
            if (message) {
                console.log(" [x] Received '%s'", JSON.parse(message.content.toString()));
                const dataFromMessage = JSON.parse(message.content.toString());
                // Call the updateCntrl function with the data
                blockByIdCntrlAbstraction(dataFromMessage).then((result) => {
                    // Handle the result here, you can log or perform other actions
                    console.log("Controller result:", result);
                });
            }
        }, { noAck: true });
        //////////queue4\\\\\\\\\\\
        yield channel.assertQueue(queue4, { durable: false });
        yield channel.consume(queue4, (message) => {
            if (message) {
                console.log(" [x] Received '%s'", JSON.parse(message.content.toString()));
                const dataFromMessage = JSON.parse(message.content.toString());
                // Call the updateCntrl function with the data
                unBlockByIdCntrlAbstraction(dataFromMessage).then((result) => {
                    // Handle the result here, you can log or perform other actions
                    console.log("Controller result:", result);
                });
            }
        }, { noAck: true });
        //////////queue5\\\\\\\\\\\
        yield channel.assertQueue(queue5, { durable: false });
        yield channel.consume(queue5, (message) => {
            if (message) {
                console.log(" [x] Received '%s'", JSON.parse(message.content.toString()));
                const dataFromMessage = JSON.parse(message.content.toString());
                // Call the updateCntrl function with the data
                unVerifyByIdCntrlAbstraction(dataFromMessage).then((result) => {
                    // Handle the result here, you can log or perform other actions
                    console.log("Controller result:", result);
                });
            }
        }, { noAck: true });
        //////////queue6\\\\\\\\\\\
        yield channel.assertQueue(queue6, { durable: false });
        yield channel.consume(queue6, (message) => {
            if (message) {
                console.log(" [x] Received '%s'", JSON.parse(message.content.toString()));
                const dataFromMessage = JSON.parse(message.content.toString());
                // Call the updateCntrl function with the data
                verifyByIdCntrlAbstraction(dataFromMessage).then((result) => {
                    // Handle the result here, you can log or perform other actions
                    console.log("Controller result:", result);
                });
            }
        }, { noAck: true });
        console.log("[*] Waiting for messages. To exit press CTRL+C");
    }
    catch (err) {
        console.warn(err);
    }
}))();

'use strict';

const line = require('@line/bot-sdk');

const config = {
    channelSecret: process.env.LINE_SECRET,
    channelAccessToken: process.env.LINE_ACCESS_TOKEN
};

const client = new line.Client(config);

module.exports = async function(time) {
    const messages = [
        {
            type: 'text',
            text: `${time}になりました！\nお薬飲んでください！`
        }
    ];

    try {
        const res = await client.broadcast(messages);
        console.log(res);
    } catch (error) {
        console.log(`エラー: ${error.statusMessage}`);
        console.log(error.originalError.response.data);
    }
}
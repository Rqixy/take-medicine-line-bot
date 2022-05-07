// 朝に通知する時と夜に通知する時の文字を変えるためのモジュール
'use strict';

const line = require('@line/bot-sdk');

// LINEのシークレットチャンネルIDとアクセストークンの環境変数を取得
const config = {
    channelSecret: process.env.LINE_SECRET,
    channelAccessToken: process.env.LINE_ACCESS_TOKEN
};

const client = new line.Client(config);

// 基盤となる通知内容と送信のモジュールを作成
module.exports = async function(time) {
    // メッセージの設定
    const messages = [
        {
            type: 'text',
            text: `${time}になりました！\nお薬飲んでください！`
        }
    ];

    try {
        // 登録されているアカウントに一斉送信
        const res = await client.broadcast(messages);
        console.log(res);
    } catch (error) {
        console.log(`エラー: ${error.statusMessage}`);
        console.log(error.originalError.response.data);
    }
}
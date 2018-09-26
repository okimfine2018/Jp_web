var nodemailer = require('nodemailer');


function mailerTo(u_name,u_phone,u_email,u_works){
var start = Date.now();
console.log(start);
var smtpConfig = {
    host: 'smtp.qq.com',
    port: 465,
    secure: true, // 启动 SSL
    auth: {
    user: "327588233@qq.com", // 账号
    pass: "jarmzekkvappbhba" // 密码
    }
};
var transporter = nodemailer.createTransport(smtpConfig);
var mailOptions = {
    from: u_email, // 发件人邮箱
    to: '327588233@qq.com', // 收件人邮箱
    subject: '用户名称：'+u_name+'用户联系方式：'+u_phone, // 主题
    html: u_works // 内容
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    console.log("Finish send mail:"+Date.now());
    console.log(Date.now() - start);
});
console.log("After send mail:"+Date.now());
console.log(Date.now() - start);
}
module.exports.mailerTo=mailerTo;
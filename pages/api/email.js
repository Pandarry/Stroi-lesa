import nodemailer from 'nodemailer';

export default function SendMail(req, res) {
    const { contactName, contactDetail, checked } = req.body;

    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.mail.ru',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOption = {
        from: process.env.EMAIL,
        to: process.env.SEND_TO,
        subject: 'Заявка на консультацию',
        text: `
        Имя: ${contactName}
        Контактные данные: ${contactDetail}
        Товар: ${checked}`,
    };

    transporter.sendMail(mailOption, (err, data) => {
        if (err) {
            res.send('error' + JSON.stringify(err));
        } else {
            res.send('success');
        }
    });
}

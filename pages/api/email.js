import nodemailer from 'nodemailer';

export default function SendMail(req, res) {
    const { contactName, contactDetail, checked } = req.body;

    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.mail.ru',
        auth: {
            user: 'mr.zxc1992@bk.ru',
            pass: 'sxVgr7ncdda8UmRZe9x6',
        },
    });

    const mailOption = {
        from: 'mr.zxc1992@bk.ru',
        to: 'dchtole@gmail.com',
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

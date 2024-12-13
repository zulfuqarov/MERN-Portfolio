import express from "express"
import nodemailer from "nodemailer"

const router = express.Router()

router.get('/', async (req, res) => {
    const { to, name, senderName, htmltext, } = req.query;
    console.log(req.query)
    if (!to) {
        return res.status(400).json({ message: "The user's contact email address is not provided." });
    }
    if (!name || !htmltext) {
        return res.status(400).json({ message: "Name and email content are required." });
    }
    try {
        const transporter = nodemailer.createTransport({
            host: 'mail.nabi.net.tr',
            port: 465,
            secure: true,
            auth: {
                user: 'portfolio@nabi.net.tr',
                pass: 'Nebi1234!'
            }
        });

        const emailContent = `
           <div style="
    font-family: Arial, sans-serif; 
    line-height: 1.6; 
    color: #333; 
    background-color: #f9f9f9; 
    padding: 20px; 
    border: 1px solid #ddd;
    border-radius: 8px;
    max-width: 600px; 
    margin: 20px auto;">
    <h2 style="color: #ff6600; text-align: center;">Portfolio Notification</h2>
    <p>Dear ${name},</p>
    <p>${htmltext}</p>
    <p style="font-size: 0.9em; margin-top: 30px; color: #555;">
        From: <strong>${senderName}</strong>
    </p>
    <p style="font-size: 0.9em; color: #999; text-align: center; margin-top: 30px;">
        &copy; ${new Date().getFullYear()} ${name} Inc. All rights reserved.
    </p>
</div>

        `;

        const info = await transporter.sendMail({
            from: 'portfolio@nabi.net.tr',
            to: to,
            subject: 'Portfolio Notification',
            html: emailContent,
        });

        console.log(`message send: ${info.messageId}`);
        res.status(200).json({ message: "Email was sent successfully." });
    } catch (error) {
        console.error('E-posta gönderilemedi:', error);
        res.status(500).send('E-posta gönderilemedi.');
    }


});

export default router;

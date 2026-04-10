import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

export async function POST({ request }) {
	try {
		const data = await request.json();
		const { name, email, phone, subject, level, schedule, message } = data;

		// Validation
		if (!name || !email) {
			return json({ success: false, message: 'Name and email are required' }, { status: 400 });
		}

		// Configure transporter
		// Note: The user MUST provide valid SMTP credentials in the .env file for this to work
		const transporter = nodemailer.createTransport({
			host: env.SMTP_HOST || 'smtp.gmail.com',
			port: parseInt(env.SMTP_PORT || '587'),
			secure: env.SMTP_SECURE === 'true', // Use 'true' for 465, 'false' for 587
			auth: {
				user: env.SMTP_USER,
				pass: env.SMTP_PASS
			}
		});

		const mailOptions = {
			from: `"${name} (Mathera Registration)" <${env.SMTP_FROM || env.SMTP_USER}>`,
			to: env.CONTACT_EMAIL || 'info@mathera.fi',
			replyTo: email,
			subject: `New Mathera Registration: ${subject || 'General Inquiry'} from ${name}`,
			html: `
				<div style="font-family: sans-serif; padding: 20px; max-w-xl; color: #333;">
					<h2 style="color: #6366f1;">New Student Registration</h2>
					<p>A new student has registered on the Mathera website. Details below:</p>
					
					<table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
						<tr>
							<td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
							<td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
						</tr>
						<tr>
							<td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
							<td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
						</tr>
						<tr>
							<td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
							<td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
						</tr>
						<tr>
							<td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Subject/Topic:</strong></td>
							<td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
						</tr>
						<tr>
							<td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Education Level:</strong></td>
							<td style="padding: 10px; border-bottom: 1px solid #eee;">${level}</td>
						</tr>
						<tr>
							<td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Schedule Preference:</strong></td>
							<td style="padding: 10px; border-bottom: 1px solid #eee;">${schedule}</td>
						</tr>
					</table>

					<h3 style="margin-top: 20px;">Additional Message from Student:</h3>
					<div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #6366f1; border-radius: 4px;">
						${message ? message.replace(/\n/g, '<br/>') : '<em>No additional message provided.</em>'}
					</div>
					
					<p style="margin-top: 30px; font-size: 12px; color: #888;">
						Sent automatically from the Mathera.fi website registration form.
					</p>
				</div>
			`
		};

		const info = await transporter.sendMail(mailOptions);
		console.log('Message sent: %s', info.messageId);

		return json({ success: true, message: 'Registration sent successfully' });
	} catch (error) {
		console.error('Email API Error:', error);
		return json(
			{ success: false, message: 'Failed to send registration info. Check server logs.' },
			{ status: 500 }
		);
	}
}

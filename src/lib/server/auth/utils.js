import nodemailer from 'nodemailer';
import fs from 'fs/promises';

const environement = process.env.ENVIRONMENT;
export const sendConfirmationEmail = async (email, token) => {
	let baseUrl;
	if (environement === 'local') {
		baseUrl = 'http://localhost:5173';
	}

	if (environement === 'deployed') {
		baseUrl = 'https://word-alchemy-dictionary.vercel.app';
	}

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'adil2mae@gmail.com', // Replace with your email
			pass: 'btxo htzr gqdw dryy ' // Replace with your email password
		}
	});

	const confirmationLink = `${baseUrl}/confirm/${token}`;

	const mailOptions = {
		from: 'adil2mae@gmail.com',
		to: email,
		subject: 'Word Alchemy Account Confirmation',
		text: `Please click the following link to confirm your email: ${confirmationLink}`
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent ->', info.response);
	} catch (error) {
		console.error('Error sending email ->', error);
		// Handle email sending error if needed
	}
};
// -------------------------------------------------------------------------------
export const sendResetPasswordEmail = async (email, token) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'adil2mae@gmail.com', // Replace with your email
			pass: 'btxo htzr gqdw dryy ' // Replace with your email password
		}
	});

	const resetLink = `https://word-alchemy-git-adil-work-space-adilma53.vercel.app/forgotpass/${token}`;

	const mailOptions = {
		from: 'adil2mae@gmail.com',
		to: email,
		subject: 'Word Alchemy Account Confirmation',
		text: `Please click the following link to confirm your email: ${resetLink}`
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent ->', info.response);
	} catch (error) {
		console.error('Error sending email ->', error);
		// Handle email sending error if needed
	}
};

//mailtrap을 이용해 이메일 발송

const nodemailer = require('nodemailer');
const email = {
	host: '',
	port: '',
	auth: {
		user: '',
		pass: '',
	},
};

const send = async (option) => {
	nodemailer.createTransport(email).sendMail(option, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log(info);
			return info.response;
		}
	});
};

let email_data = {
	form: '', //보내는 사람의 이메일
	to: '', //받는 사람의 이메일
	subject: '', //메인 제목
	text: '', //내용
};

send(email_data);

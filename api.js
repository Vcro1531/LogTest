//postman을 활용해 간단히 api서버 만들어보기
const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');

const server = app.listen(3001, () => {
	console.log('Start Server : localhost:3001');
});

const key = {
	//*DB 없이*, npm i uuid-apikey
	apiKey: '7EF9JGG-Z7GMVEH-PK4VDY3-9FN18R4',
	uuid: '3b9e9942-f9e1-4dba-b4c9-b6f84bea1460',
};

app.get('/api/users/:apikey/:type', async (req, res) => {
	let { apikey, type } = req.params;

	if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
		res.send('apikey is not avlid.');
	} else {
		if (type == 'seoul') {
			let data = [
				{
					name: '홍길동',
					city: 'seoul',
				},
				{
					name: '김철수',
					city: 'seoul',
				},
			];
			res.send(data);
		} else if (type == 'jeju') {
			let data = [
				{
					name: '박지성',
					city: 'jeju',
				},
				{
					name: '손흥민',
					city: 'jeju',
				},
			];
			res.send(data);
		} else {
			res.send('Type is not correct.');
		}
	}
});

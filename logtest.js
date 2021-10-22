const log = require('./config/logger');

log.info('this is info message');
log.error('this is error message');

//7월 29일에 node .\log_test.js 두번 입력
//error.log = Log level이 제일 높은 error만 출력.
//log = log 레벨 위인 error도 출력.
//exception 일어난 적이 없어서 비어있음.

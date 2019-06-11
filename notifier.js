const notifier = require('node-notifier');
const {
  parseTime
} = require('./time.js');
const path = require('path');
var cmd = require('node-cmd');
const notifierFn = () => {
  notifier.notify({
      title: 'Ace 定时填写任务',
      message: '请及时填写ace',
      icon: path.join(__dirname, 'favicon.ico'), // Absolute path (doesn't work on balloons)
      sound: true, // Only Notification Center or Windows Toasters
      wait: true // Wait with callback, until user action is taken against notification
    },
    function (err, response) {
      // Response is response from notification
      if (err) {
        errLog(err);
        errLog(response);
      }
    }
  );
};

const errLog = (err) => {
  console.log('现在是\n', parseTime(new Date().getTime(), '{y}-{m}-{d}  {h}:{i}:{s}'));
  console.log('错误：\n', err);
};
notifier.on('click', function (notifierObject, options) {
  // Triggers if `wait: true` and user clicks notification
  // start "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" http://ace.piesat.cn/main.xhtml
  cmd.run('start "C:Program Files (x86)GoogleChromeApplicationchrome.exe" http://ace.piesat.cn/main.xhtml');
});
// notifierFn()
module.exports = notifierFn;
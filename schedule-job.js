const schedule = require('node-schedule')
const notifier = require('./notifier.js')
let rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(1, 4)];
rule.hour = '18';
rule.minute = '00';
rule.second = '30';
const scheduleFn = () => {
    schedule.scheduleJob(rule, () => {
        notifier()
    })
}
module.exports = scheduleFn
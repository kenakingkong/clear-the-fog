const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
    title: Joi.string().alphanum().required(),
    emoji: Joi.string().alphanum().required(),
    subject: Joi.string().required(),
    notes: Joi.string().max(500).required(),
});

const reminders = db.get('reminders');

function getAll() {
    return reminders.find();
};

function create(reminder) {
    const result = Joi.validate(reminder, schema);

    if (result.error == null) {
        reminder.created = new Date();
        return reminders.insert(reminder);
    } else {
        return Promise.reject(result.error);
    }
};

module.exports = {
    create,
    getAll
};
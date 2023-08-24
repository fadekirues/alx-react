/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable semi */
import * as notificationsData from '../../notifications.json'
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users")
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user, 
  context: message
});

const normalized = normalize(notificationsData, [notification])

export function getAllNotificationsByUser (userId) {
  const userNot = normalized.entities.notifications;
  const normalizedDataSet = [];
  for (const id in userNot) {
    if (userNot[id].author === userId) {
      normalizedDataSet.push(userNot[id].author)
    }
  }
  return normalizedDataSet
}

export { normalized };
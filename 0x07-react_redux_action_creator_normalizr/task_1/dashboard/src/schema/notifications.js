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
  return notificationsData.filter(obj => obj.author.id === userId)
}

export { normalized };

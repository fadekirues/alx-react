import * as notificationsData from '../../notifications.json'

export default function getAllNotificationsByUser (userId) {
  return notificationsData.filter(obj => obj.author.id === userId)
}

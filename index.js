const permissions = require('bindings')('permissions.node')

function getAuthStatus(type) {
  const validTypes = [
    'contacts',
    'calendar',
    'reminders',
    'full-disk-access',
    'camera',
    'microphone',
    'accessibility',
    'location',
    'screen'
  ]

  if (!validTypes.includes(type)) {
    throw new TypeError(`${type} is not a valid type`)
  }

  return permissions.getAuthStatus.call(this, type)
}

function askForMediaAccess(type) {
  if (!['microphone', 'camera'].includes(type)) {
    throw new TypeError(`${type} must be either 'camera' or 'microphone'`)
  }

  return permissions.askForMediaAccess.call(this, type)
}

module.exports = {
  askForCalendarAccess: permissions.askForCalendarAccess,
  askForContactsAccess: permissions.askForContactsAccess,
  askForFullDiskAccess: permissions.askForFullDiskAccess,
  askForRemindersAccess: permissions.askForRemindersAccess,
  askForScreenCaptureAccess: permissions.askForScreenCaptureAccess,
  askForMediaAccess,
  getAuthStatus
}
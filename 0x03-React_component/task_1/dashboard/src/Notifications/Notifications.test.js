import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  // ... your existing test cases ...

  describe('when listNotifications is empty or not provided', () => {
    it('renders no NotificationItem elements', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.find(NotificationItem)).toHaveLength(0);
    });

    it('displays the message "No new notification for now"', () => {
      const wrapper = shallow(<Notifications />);
      const message = 'No new notification for now';
      expect(wrapper.contains(message)).toBe(true);
    });

    it('does not display the message "Here is the list of notifications"', () => {
      const wrapper = shallow(<Notifications />);
      const message = 'Here is the list of notifications';
      expect(wrapper.contains(message)).toBe(false);
    });
  });

  describe('when listNotifications is provided with items', () => {
    it('renders the correct number of NotificationItem elements', () => {
      const listNotifications = [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
          html: null,
        },
        {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          html: null,
        },
      ];
      const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
      expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
    });

    it('does not display the message "No new notification for now"', () => {
      const listNotifications = [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
          html: null,
        },
      ];
      const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
      const message = 'No new notification for now';
      expect(wrapper.contains(message)).toBe(false);
    });

    it('displays the message "Here is the list of notifications"', () => {
      const listNotifications = [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
          html: null,
        },
      ];
      const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
      const message = 'Here is the list of notifications';
      expect(wrapper.contains(message)).toBe(true);
    });
  });
});

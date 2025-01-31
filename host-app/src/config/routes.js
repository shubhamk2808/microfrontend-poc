import React from 'react';

const ChatApp = React.lazy(() => import('chat/ChatApp'));
const EmailApp = React.lazy(() => import('email/EmailApp'));

export const routes = [
  {
    path: '/chat',
    element: ChatApp,
    name: 'Chat Application',
    description: 'Open the chat application to communicate with your team',
    icon: '💬'
  },
  {
    path: '/email',
    element: EmailApp,
    name: 'Email Application',
    description: 'Check and manage your emails',
    icon: '📧'
  }
]; 
import WhatMycroft from '../components/WhatMycroft';
import InstallMycroft from '../components/InstallMycroft';
import React from 'react';
const steps = [
  {
    id: '1',
    message: 'Hello how may I help you?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 'What is Mycroft AI?', label: 'What Is Mycroft', trigger: 'what-mycroft' },
      { value: 'Skills Available', label: 'Skills Available', trigger: 'skills-available' },
      { value: 'How To Install Mycroft AI', label: 'How-to Install', trigger: 'install' },
    ],
  },
  {
    id: 'what-mycroft',
    message: 'Mycroft is the world’s first open source assistant. Mycroft runs anywhere – on a desktop computer, inside an automobile, or on a Raspberry Pi.',
    trigger: 'what-mycroft-2',
  },
  {
    id: 'what-mycroft-2',
    message: 'This is open source software which can be freely remixed, extended, and improved. Mycroft may be used in anything from a science project to an enterprise software application.',
    trigger: 'what-mycroft-link'
  },
  {
    id: 'what-mycroft-link',
    component: <WhatMycroft />,
    trigger: '1'
  },
  {
    id: 'skills-available',
    message: 'this is where the available skills will be listed',
    trigger: '1',
  },
  {
    id: 'install',
    message: 'Mycroft supports a lot of different platforms.  Please see the hyperlink below for more information.',
    trigger: 'install-comp',
  },
  {
    id: 'install-comp',
    component: <InstallMycroft />,
    trigger: '1'
  },
];

export default steps;

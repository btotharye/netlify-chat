
const steps = [
  {
    id: '1',
    message: 'What is your name?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: 3
  },
  {
    id: '3',
    message: 'Hi {previousValue}!'
  },
];

export default steps;

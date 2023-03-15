import { Todo } from '../models/Todo';

export function getDotnetFullStackTodos(): Todo[] {
  return [
    new Todo('6', 'Programming Fundamentals'),
    new Todo('6', 'C#'),
    new Todo('6', 'Object-Oriented Programming'),
    new Todo('6', 'SOLID Principles'),
    new Todo('6', 'Understand DRY, KISS, YAGNI'),
    new Todo('6', '.NET Fundamentals'),
    new Todo('6', 'ASP.NET'),
    new Todo('6', 'MVC'),
    new Todo('6', 'MSSQL'),
    new Todo('6', 'Entity Framework'),
    new Todo('6', 'SignalR'),
    new Todo('6', '.NET Identity'),
    new Todo('6', 'xUnit'),
    new Todo('6', 'Web API'),
    new Todo('6', 'HTML/CSS'),
    new Todo('6', 'BOOTSTRAP'),
    new Todo('6', 'Tailwind CSS'),
    new Todo('6', 'JavaScript/TypeScript'),
    new Todo('6', 'jQuery'),
    new Todo('6', 'Hate and quit jQuery'),
    new Todo('6', 'Angular'),
    new Todo('6', 'Azure'),
    new Todo('6', 'RabbitMQ'),
    new Todo('6', 'Docker'),
    new Todo('6', 'Kubernetes'),
    new Todo('6', 'Data Structure & Algorithms'),
  ];
}

export function getCareerPathTodos(): Todo[] {
  return [
    new Todo('8', 'Learn programming'),
    new Todo('8', 'Learn SOLID principles'),
    new Todo('8', 'Add new technologies to your toolbox'),
    new Todo('8', 'Develop projects for the resume'),
    new Todo('8', 'Update your CV'),
    new Todo('8', 'Apply for jobs in Europe'),
    new Todo('8', 'Get no response'),
    new Todo('8', 'Reach recruiters'),
    new Todo(
      '8',
      'Get rejections like "Thanks for your time. Unfortunately, we are looking for a candidate who currently lives in Europe"'
    ),
    new Todo('8', 'GOTO: 3'),
  ];
}

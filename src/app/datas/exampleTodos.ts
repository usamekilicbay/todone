import { Todo } from '../models/Todo';

export function getDotnetFullStackTodos(): Todo[] {
  return [
    new Todo('Programming Fundamentals'),
    new Todo('C#'),
    new Todo('Object-Oriented Programming'),
    new Todo('SOLID Principles'),
    new Todo('Understand DRY, KISS, YAGNI'),
    new Todo('.NET Fundamentals'),
    new Todo('ASP.NET'),
    new Todo('MVC'),
    new Todo('MSSQL'),
    new Todo('Entity Framework'),
    new Todo('SignalR'),
    new Todo('.NET Identity'),
    new Todo('xUnit'),
    new Todo('Web API'),
    new Todo('HTML/CSS'),
    new Todo('BOOTSTRAP'),
    new Todo('Tailwind CSS'),
    new Todo('JavaScript/TypeScript'),
    new Todo('jQuery'),
    new Todo('Hate and quit jQuery'),
    new Todo('Angular'),
    new Todo('Azure'),
    new Todo('RabbitMQ'),
    new Todo('Docker'),
    new Todo('Kubernetes'),
    new Todo('Data Structure & Algorithms'),
  ];
}

export function getCareerPathTodos(): Todo[] {
  return [
    new Todo('Learn programming'),
    new Todo('Learn SOLID principles'),
    new Todo('Add new technologies to your toolbox'),
    new Todo('Develop projects for the resume'),
    new Todo('Update your CV'),
    new Todo('Apply for jobs in Europe'),
    new Todo('Get no response'),
    new Todo('Reach recruiters'),
    new Todo(
      'Get rejections like "Thanks for your time. Unfortunately, we are looking for a candidate who currently lives in Europe"'
    ),
    new Todo('GOTO: 3'),
  ];
}

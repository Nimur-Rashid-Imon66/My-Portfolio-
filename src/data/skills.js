/**
 * Technical skills configuration grouped by category
 * @type {Array<{id: number, src: string, item: Array<{id: number, link: string, name: string}>}>}
 */
export const skills = [
  {
    id: 1,
    src: 'FRONT-END',
    item: [
      {
        id: 1,
        link: "../html.svg",
        name: "HTML"
      },
      {
        id: 2,
        link: "../css.svg",
        name: "CSS"
      },
      {
        id: 3,
        link: "../tailwind.svg",
        name: "Tailwind CSS"
      },
      {
        id: 4,
        link: "../js.svg",
        name: "JavaScript"
      },
      {
        id: 5,
        link: "../react.svg",
        name: "React"
      },
    ]
  },
  {
    id: 2,
    src: 'BACK-END',
    item: [
      {
        id: 1,
        link: "../nodejs.svg",
        name: "Node.js"
      },
      {
        id: 2,
        link: "../express.svg",
        name: "Express"
      },
    ]
  },
  {
    id: 3,
    src: 'DATABASE',
    item: [
      {
        id: 1,
        link: "../oracle.svg",
        name: "Oracle"
      },
      {
        id: 2,
        link: "../mysql.svg",
        name: "MySQL"
      },
    ]
  },
  {
    id: 4,
    src: 'SOURCE CONTROL',
    item: [
      {
        id: 1,
        link: "../git.svg",
        name: "Git"
      },
      {
        id: 2,
        link: "../github.svg",
        name: "GitHub"
      },
    ]
  }
];

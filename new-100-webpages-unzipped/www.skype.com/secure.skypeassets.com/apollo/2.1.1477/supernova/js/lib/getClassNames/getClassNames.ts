/*******************************************************************************************************
 * Helpers
 *******************************************************************************************************/

const isObject = (val: object) => typeof val === 'object';

/*******************************************************************************************************
 * Get Class inside Object
 *******************************************************************************************************/

const getClassFromObject = (classList: any): string => {
  const classKeys: string[] = Object.keys(classList);
  const classes: string[] = [];

  for (const className of classKeys) {
    if (classList[className]) classes.push(className);
  }
  return classes.join(' ');
};

/*******************************************************************************************************
 * Get Class
 *******************************************************************************************************/

export default function getClassNames(...classes: any): string {
  const classNames = [];
  for (const className of classes) {
    // Object with ClassNames
    if (isObject(className)) {
      const stringOfClasses = getClassFromObject(className);
      classNames.push(stringOfClasses);
    }
    // String ClassNames
    else if (className !== null && className !== undefined) {
      classNames.push(className);
    }
  }

  return classNames.join(' ');
}

export const sortableName = <T extends { name?: string }>(array: T[]): T[] => {
  const newArray = [...array];
  return newArray.sort((a, b) => (
    (a.name && b.name) ? a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }) : 0));
};
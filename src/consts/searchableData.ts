import { projectsWorkRecord } from "./projectConsts";

const tagGroups = {
  react: ['React', 'Frontend'],
  tSQL: ['T-SQL', 'SQL'],
};

function combineArrays(...args: Array<string[]>) {
  return args.reduce((ac, cur) => {
    // Went with push, so we're not creating a new Array all the time
    ac.push(...cur);
    return ac;
  }, []);
}

export const searchableData = [
  {
    label: projectsWorkRecord.projectCC.label,
    tags: combineArrays(
      tagGroups.react,
      tagGroups.tSQL,
    )
  }
]
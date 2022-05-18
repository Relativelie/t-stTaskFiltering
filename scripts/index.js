import { bringFilterFlags } from './functions/bringValues.js';
import { getCourses } from './functions/data.js';
import { filtering } from './functions/filtering.js';
import { tableGeneration } from './functions/tableGeneration.js';

const allCourses = getCourses();
tableGeneration(allCourses, '.tableBody');

const showFilteredList = (e) => {
    const fromToValues = bringFilterFlags(e);
    const newList = filtering(allCourses, fromToValues);
    tableGeneration(newList, '.tableBody');
};

document
    .querySelector('.filter__btn')
    .addEventListener('click', (e) => showFilteredList(e));

console.log('from: null, to: 200', filtering(allCourses, [null, 200]));
console.log('from: 100, to: 350', filtering(allCourses, [100, 350]));
console.log('from: 200, to: null', filtering(allCourses, [200, null]));

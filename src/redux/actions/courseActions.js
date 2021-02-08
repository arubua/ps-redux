import * as types from './actionTypes';
import { getCourses } from '../../api/courseApi';


export function createCourse(course) {
    return {type:types.CREATE_COURSE, course: course};
}

export function loadCoursesSuccess(courses){
    return {
        type:types.LOAD_COURSES_SUCCESS,
        courses:courses
    };
}

export function loadCourses(){
    return function (dispatch){
        return getCourses()
        .then(courses => {
            dispatch(loadCoursesSuccess(courses));
        })
        .catch(err => {
            throw err;
        })
    } 
}

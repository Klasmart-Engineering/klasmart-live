import { newUserRole, UserState } from "./models";

export const roles = {
    /** Consider using isTeacher() for comparison */
    Teacher: newUserRole("teacher"),
    /** Consider using isStudent() for comparison */
    Student: newUserRole("student"),
}

export function isTeacher({ role }: UserState) {
    return role === roles.Teacher
}

export function isStudent({ role }: UserState) {
    return role === roles.Student
}
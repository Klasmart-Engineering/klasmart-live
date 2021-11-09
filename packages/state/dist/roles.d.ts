import { UserState } from "./models";
export declare const roles: {
    /** Consider using isTeacher() for comparison */
    Teacher: import("./models").UserRole;
    /** Consider using isStudent() for comparison */
    Student: import("./models").UserRole;
};
export declare function isTeacher({ role }: UserState): boolean;
export declare function isStudent({ role }: UserState): boolean;
//# sourceMappingURL=roles.d.ts.map
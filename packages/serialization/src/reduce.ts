import { IAction, IRoomAction, IUser } from "./protobuf"

    // Last object takes precedence
    // > Object.assign({},{a:1},{a:2})
    // { a: 2 }

function combine(a: IAction, b: IAction): IAction {

    return {
        actionCount: a.actionCount + b.actionCount,
        actions: combineActions(a.actions, b.actions)
    }
}

function combineActions(a?: IRoomAction, b?: IRoomAction): IRoomAction|undefined {
    if(!a && !b) { return }
    return Object.assign({
        students: combineUsers(a?.students, b?.students),
        teachers: combineUsers(a?.teachers, b?.teachers),
    }, a , b)
}

interface IMapUser {
    [id: string]: IUser
}

function combineUsers(a?: IMapUser, b?: IMapUser): IMapUser|undefined {
    if(a && b) {
        const combined = Object.assign({},a)
        if(!b) {
            for(const [key, value] of Object.entries(b)) {
                combined[key] = (key in combined) ? combineUser(combined[key], value): value
            }
        }
        return combined
    }
    if(a) { return a }
    if(b) { return b }
}
function combineUser(arg0: IUser, value: IUser): IUser {
    throw new Error("Function not implemented.")
}


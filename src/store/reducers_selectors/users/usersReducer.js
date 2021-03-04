import {APP_ACTIONS} from "../../actions/action";

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 400,
    currentPage: 1,
    isLoading: false,
    isDisabledBtn: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_ACTIONS.FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            }
        case APP_ACTIONS.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            }
        case APP_ACTIONS.SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case APP_ACTIONS.SET_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case APP_ACTIONS.SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload
            };
        case APP_ACTIONS.IS_FETCHING:
            return {
                ...state,
                isLoading: action.payload
            };
        case APP_ACTIONS.IS_DISABLED_BTN:
            return {
                ...state,
                isDisabledBtn: action.payload
                    ? [...state.isDisabledBtn, action.userId]
                    //метод filter вернет нам новый массив, в котором удалит тот id, который мы передали
                    : state.isDisabledBtn.filter(id => id !== action.userId)
            };
        default:
            return state
    }
}
export const follow = (userID) => ({
    //required параметр type
    type: APP_ACTIONS.FOLLOW,
    payload: userID
})
export const unfollow = (userID) => ({
    type: APP_ACTIONS.UNFOLLOW,
    payload: userID
})

export const setUsers = (users) => ({
    type: APP_ACTIONS.SET_USERS,
    payload: users
})

export const setPage = (num) => ({
    type: APP_ACTIONS.SET_PAGE,
    payload: num
})
export const setTotalCount = (num) => ({
    type: APP_ACTIONS.SET_TOTAL_COUNT,
    payload: num
})
export const toggleFetch = (bool) => ({
    type: APP_ACTIONS.IS_FETCHING,
    payload: bool
})
export const toggleDisabledBtn = (bool, id) => ({
    type: APP_ACTIONS.IS_DISABLED_BTN,
    payload: bool,
    userId: id,
})

export default usersReducer

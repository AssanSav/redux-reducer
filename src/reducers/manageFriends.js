let state = {
    friends: [{ name: "Chrome Boi", hometown: "NYC", id: 1 }, { name: 'Avi', hometown: 'NYC', id: 100 }, { name: 'Steven', hometown: 'Philadephia', id: 102 }] }
let action = {
    type: "ADD_FRIEND" || "REMOVE_FRIEND",
    friend: {
        name: "Chrome Boi",
        hometown: "NYC",
        id: 1
    }
}

export function manageFriends(state, action) {
    // debugger
    switch (action.type) {
        case "ADD_FRIEND":
            return {
                ...state,
                friends: [
                    ...state.friends,
                    { name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id }
                ]
            }
        case "REMOVE_FRIEND":
            let filterFriends = state.friends.filter(friend => friend.id !== action.id)
            return {
                ...state,
                friends: filterFriends
            }
        default: 
            return state
    }
}

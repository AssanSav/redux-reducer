let state = { friends: [] }
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
            // let removeFriend = state.friends.find(friend => friend.id === action.friend.id)
            return 
        default: 
            return state
    }
}

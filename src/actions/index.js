const API_URL = process.env.REACT_APP_API_URL;

export function fetchAllCountries() {
  return (dispatch) => {
    dispatch({type: 'START_ADDING_COUNTRIES'});
    return fetch(`${API_URL}/countries`)
      .then(response => response.json())
      .then(countries => dispatch({type: 'ADD_ALL_COUNTRIES', countries}));
  };
}
// fetch country data
// export const setCountries = countries => {
//   return {
//     type: 'GET_COUNTRIES',
//     countries
//   }
// }

// Comment actions
export const setComments = comments => {
  return {
    type: 'GET_COMMENTS',
    comments
  }
}

export const addComment = comment => {
  return {
    type:'ADD_COMMENT',
    comment
  }
}

// Async actions for Comments
export const getComments = (countryId) => {
  return dispatch => {
    return fetch(`${API_URL}/countries/${countryId}/comments`, {
      method: "GET",
    })
    .then(res => res.json())
    .then(comments => {
      dispatch(setComments(comments))
    })
  }
}

export const createComment = (comment) => {
  return dispatch => {
    return fetch(`${API_URL}/countries/${comment.country_id}/comments`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment: comment.comment})
    })
    .then(response => response.json())
    .then(comment => {
      dispatch(addComment(comment))
    })
  }
}

// // Async actions for Countries
// export const getCountries = () => {
//   return dispatch => {
//     return fetch(`${API_URL}/countries`, {
//       method: "GET",
//     })
//       .then(res => res.json())
//       .then(countries => {
//         dispatch(setCountries(countries))
//       })
//   }
// }
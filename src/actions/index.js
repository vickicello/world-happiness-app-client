const API_URL = process.env.REACT_APP_API_URL;

// fetch country data
export const setCountries = countries => {
  return {
    type: 'GET_COUNTRIES',
    countries
  }
}

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
    // .catch(error => console.log(error));
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
    // .then(handleErrors)
    .then(response => response.json())
    .then(comment => {
      dispatch(addComment(comment))
    })
    // .catch(error => {
    //   dispatch({type: 'error'})
    //  })
  }
}

// Async actions for Countries
export const getCountries = () => {
  return dispatch => {
    return fetch(`${API_URL}/countries`, {
      method: "GET",
    })
      .then(res => res.json())
      .then(countries => {
        dispatch(setCountries(countries))
      })
      // .catch(error => console.log(error));
  }
}

// function handleErrors(response){
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }
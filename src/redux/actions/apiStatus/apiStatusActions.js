import * as types from "../actionTypes";

import { statusApi } from "../../../api";

/** Redux Actions */

export function apiStatusSuccess(status) {
  return { type: types.API_STATUS_SUCCESS, status }
}

export function apiStatusFailure() {
  return { type: types.API_STATUS_FAILURE }
}

/** API calls */

export function apiStatus() {
  return function(dispatch) {
    return statusApi
      .getEndpointStatus()
      .then(response => {
        if (response.status === 200) {
          dispatch(apiStatusSuccess(response.data));
        } else {
          dispatch(apiStatusFailure());
        }
      })
      .catch(error => {
        throw error;
      });
  };
}

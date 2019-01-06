/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export const navigate = path => dispatch => {
	// Extract the page name from path.
	const page = path === '/' ? 'home' : path.slice(1);

	// Any other info you might want to extract from the path (like page type),
	// you can do here
	dispatch(loadPage(page));

	// Close the drawer - in case the *path* change came from a link in the drawer.
	dispatch(updateDrawerState(false));
};

const loadPage = page => dispatch => {
	switch (page) {
		case 'home':
			import('../components/home.js').then(module => {
				// Put code in here that you want to run every time when
				// navigating to view1 after home.js is loaded.
			});
			break;
		case 'mission':
			import('../components/mission.js');
			break;
		case 'join-the-walk':
			import('../components/join.js');
			break;
		case 'tour':
			import('../components/tour.js');
			break;
		case 'discography':
			import('../components/discography.js');
			break;
		case 'my-favorite-albums-of-all-time':
			import('../components/favorite-albums.js');
			break;
		case 'reading-list':
			import('../components/reading-list.js');
			break;
		case 'random-and-subtly-pretentious-list-of-accomplishments':
			import('../components/accomplishments.js');
			break;
		case 'things-i-want-to-do-before-i-die':
			import('../components/to-do.js');
			break;
		case 'listen':
			import('../components/listen.js');
			break;
		case 'about-me':
			import('../components/about.js');
			break;
		case 'download':
			import('../components/download.js');
			break;
		default:
			page = '404';
			import('../components/404.js');
	}

	dispatch(updatePage(page));
};

const updatePage = page => {
	return {
		type: UPDATE_PAGE,
		page,
	};
};

let snackbarTimer;

export const showSnackbar = () => dispatch => {
	dispatch({
		type: OPEN_SNACKBAR,
	});
	window.clearTimeout(snackbarTimer);
	snackbarTimer = window.setTimeout(() => dispatch({ type: CLOSE_SNACKBAR }), 3000);
};

export const updateOffline = offline => (dispatch, getState) => {
	// Show the snackbar only if offline status changes.
	if (offline !== getState().app.offline) {
		dispatch(showSnackbar());
	}
	dispatch({
		type: UPDATE_OFFLINE,
		offline,
	});
};

export const updateDrawerState = opened => {
	return {
		type: UPDATE_DRAWER_STATE,
		opened,
	};
};

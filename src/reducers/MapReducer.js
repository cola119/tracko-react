import * as actionTypes from '../utils/actionTypes';

const center = { latitude: 37.33241210551455, longitude: -122.03050892962335, };	// apple
// const center = { latitude: 35.6053182, longitude: 139.6923339, };	// ooo
const zoom = { zoom: 15 };

const initialAppState = {
	viewport : { ...center, ...zoom }
	// viewport : { ...size, ...center, ...zoom }
};

const MapReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case actionTypes.ON_VIEWPORT_CHANGE:
			const { width, height, ...etc } = action.viewport
			// console.log(action.viewport);
			return {
				...state,
				viewport: etc
			};
		default:
			return state;
	};
};

export default MapReducer;

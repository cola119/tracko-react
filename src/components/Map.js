import React from 'react';
import ReactMapGL from 'react-map-gl';
import UserPointer from '../components/UserPointer'

const Map = (props) => {
	// console.log(props);
	return (
		<ReactMapGL
			width='100%'
			height='100vh'
			{...props.viewport}
			mapboxApiAccessToken={props.token}
			onViewportChange={props.onViewportChange}>
			{
				props.users.map((user) => {
					return (
						<UserPointer
							key={user}
							user={user}
							name={props.userlist[user].name}
							userlocation={props.userlocations[user]} />
					);
				})
			}
		</ReactMapGL>
	);
};

export default Map

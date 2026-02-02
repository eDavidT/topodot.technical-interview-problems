# Problem 2 – API Fetching

Write a React component that fetches and displays a list of users from an API like https://api.topodot.com/toposhare/user/get/all/.  
Requirements:

* Fetch the data only when the component loads
* Show a loading indicator
* Show an error message if the API fails
* Display the list of user’s usernames.

Initial Setup
```jsx
import { useEffect, useState } from "react"; 

 

export function Users() { 

  const [users, setUsers] = useState([]); 

  const [loading, setLoading] = useState(true); 

  const [error, setError] = useState(null); 

 

  /**Fetch data and handle loading and error states */ 

 

  return ( 

    /** return list of usernames */ 

  ); 
} 
```
Sample API Response from the endpoint mentioned above
```json
{
	"status": "success",
	"timeElapsed": 0.12151598930359,
	"data": [
		{
			"id": 4,
			"username": "iifuzz",
			"firstName": "Maury",
			"lastName": "Terneus",
			"email": "mt@certainty3d.com",
			"isGuest": false,
			"enterpriseAccess": true,
			"projects": [],
			"userGroups": [],
			"permissionSet": {
				"id": 3
			},
			"dataTransferred": "546913209473",
			"imagesTransferred": "60176"
		},
		{
			"id": 13,
			"username": "dterneus",
			"firstName": "David",
			"lastName": "Terneus",
			"email": "david.terneus@topodot.com",
			"isGuest": false,
			"enterpriseAccess": true,
			"projects": [],
			"userGroups": [],
			"permissionSet": {
				"id": 3
			},
			"dataTransferred": "390736270021",
			"imagesTransferred": "371"
		}
	]
}
```
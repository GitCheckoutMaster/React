import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
  // this is the normal method to call an api in react
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch("https://api.github.com/users/GitCheckoutMaster")
  //   .then((res) => res.json())
  //   .then((res) => setData(res));  
  // }, []);
  const data = useLoaderData();
  
  return (
		<>
			<div>Github</div>
			<img src={data.avatar_url} alt="My Photo" />
		</>
  );
}

export const fetchGithubData = async () => {
  console.log("Here am i, bitchhhhh");
  const data = await fetch("https://api.github.com/users/GitCheckoutMaster");

  return data.json();
}

export default Github
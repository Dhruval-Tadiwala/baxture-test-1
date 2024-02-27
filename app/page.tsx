"use client"; // This is a client component

import { useEffect, useState } from "react";
import CustomCard from "./ui/CustomCard";
import { Grid } from "@mantine/core";

export default function HomePage() {
  const [allUsersDetails, setAllUsersDetails] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setAllUsersDetails(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleDelete = (userDetail: any) => {
    let filterUsers = allUsersDetails && allUsersDetails?.filter((user: any) => user?.id !== userDetail?.id)
    setAllUsersDetails(filterUsers)
  }

  return (
    <div style={{ margin: "30px" }}>
      <Grid>
        {allUsersDetails &&
          allUsersDetails?.length > 0 &&
          allUsersDetails?.map((userDetail, index) => {
            return (
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={index}>
                <CustomCard userDetail={userDetail} handleDelete={handleDelete} />
              </Grid.Col>
            );
          })}
      </Grid>
    </div>
  );
}

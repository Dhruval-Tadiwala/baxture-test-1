import {
  Anchor,
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { IconStar, IconUserMinus, IconWorld } from "@tabler/icons-react";
import { IconAt, IconPhoneCall, IconTrash, IconUserPlus } from "@tabler/icons-react";
import React, { useState } from "react";

type PropTypes = {
  userDetail: any;
  handleDelete: any;
};

const CustomCard = (props: PropTypes) => {
  const { userDetail, handleDelete } = props;

  const [follow, setFollow] = useState(false)

  const handleFollow = (user: any) => {
    setFollow(!follow)
  }

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        {/* <Card.Section>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Norway"
          />
        </Card.Section> */}

        <Text size="xl" ta={"center"} fw={500}>
          <span>{userDetail?.name}</span>
          {
            follow === true && <span style={{marginLeft: '10px'}}><IconStar size={15} /></span>
          }
        </Text>

        <Anchor href={userDetail?.email} target="_blank">
          <Text size="lg" c="dimmed">
            <IconAt size={15} />
            <span style={{marginLeft: "10px"}}>{userDetail?.email}</span>
          </Text>
        </Anchor>

        <Anchor href={userDetail?.phone} target="_blank">
          <Text size="lg" c="dimmed">
            <IconPhoneCall size={15} />
            <span style={{marginLeft: "10px"}}>{userDetail?.phone}</span>
          </Text>
        </Anchor>

        <Anchor href={userDetail?.website} target="_blank">
          <Text size="lg" c="dimmed">
            <IconWorld size={15} />
            <span style={{marginLeft: "10px"}}>{userDetail?.website}</span>
          </Text>
        </Anchor>

        <Grid>
          <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
            <Button
              fullWidth
              mt="md"
              radius="md"
              leftSection={follow === true ? <IconUserMinus size={20} /> : <IconUserPlus size={20} />}
              onClick={() => handleFollow(userDetail)}
              variant={follow === true ? 'default' : 'filled'}
            >
              {
                follow === true ? 'Unfollow' : 'Follow'
              }
            </Button>
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 6, lg: 6 }}>
            <Button
              variant="outline"
              fullWidth
              mt="md"
              radius="md"
              leftSection={<IconTrash size={20} />}
              onClick={() => handleDelete(userDetail)}
            >
              Delete
            </Button>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
};

export default CustomCard;

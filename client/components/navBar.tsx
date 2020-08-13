import React, { FC } from 'react';
import { Header, UserProfile } from './navBar.styles';
import { idToStringWithZeroes } from './helpers';

interface Props {
  user_name: string;
  user_clicks: (string | number);
  user_id: number;
}

const NavBar: FC<Props> = ({ user_name, user_clicks, user_id }) => {
  return (
    <Header>
      <UserProfile>
        username: {user_name}
        <p style={{ fontWeight: 550, fontSize: '16px', display: 'inline-block', paddingLeft: '5px' }}>#{idToStringWithZeroes(user_id)}</p>
        <p>clicks: {user_clicks} </p>
      </UserProfile>
    </Header>
  );
}

export default React.memo(NavBar);

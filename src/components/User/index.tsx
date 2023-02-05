import React from 'react';

import { Container, UserImage } from './styles';
import { useAuth } from '../../hooks/useAuth';

import defaultUserImage from "../../assets/defaultUserImage.jpg"

const User: React.FC = () => {
  const { user } = useAuth();
  const userImage = defaultUserImage;

  return (
    <Container>
      <UserImage 
        src={userImage} 
        alt="user image"
        aria-label='displays user image'        
      />
      <h1>{user?.name}</h1>
    </Container>
  );
}

export default User;
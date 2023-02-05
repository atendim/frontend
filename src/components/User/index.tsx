import React from 'react';
import { useAuth } from '../../contexts/auth';
import defaultUserImage from "../../../public/assets/defaultUserImage.jpg"
import { Container, UserImage } from './styles';

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
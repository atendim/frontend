import React from 'react';
import { useIntl } from 'react-intl';
import { ExitIcon } from '@radix-ui/react-icons';

import { Container } from './styles';
import User from '../User';
import { Button } from '../Button';
import { useAuth } from '../../hooks/useAuth';

const Navbar: React.FC = () => {
  const { signOut} = useAuth();
  const { formatMessage } = useIntl();
  return (
    <Container>
      <User />
      <Button 
        onClick={signOut}
        size="xs"
        color='neutral'
        title={formatMessage({id: "label.exit"})}
      >
        <ExitIcon />
      </Button>
    </Container>
  );
}

export default Navbar;
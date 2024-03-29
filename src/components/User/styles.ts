import { styled } from "../../theme/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',

  'h1': {
    color: '$textColor',
    fontSize: '$md',
    fontWeight: '$medium',
  },

  '@bp4': {
    'h1': {
      display: 'none',
    }
  }  
});

export const UserImage =  styled('img', {
  width: '27px',
  height: '27px',
  borderRadius: '50%',
  marginRight: '20px',
});
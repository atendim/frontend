import { keyframes } from "@stitches/react";
import { Root as PortalRoot } from '@radix-ui/react-portal';
import { styled } from "../../theme/stitches.config";


export const Portal = styled(PortalRoot, {
  top: 0,
  position: 'absolute',
  zIndex: 1
})

export const Modal = styled('div', { 
  width: "100vw",
  height: "100vh",

  display: "flex",
  flexDirection: "columm",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "$backgroundA",
  backdropFilter: 'blur(3px)'
})

const rotateCenter = keyframes({
  '0%': { transform: 'rotate(0)' },
  '15%': { transform: 'rotate(0)' },
  '100%': { transform: 'rotate(360deg)' },
});


export const Logo = styled('img', {
  scale: .15,

  animation: `${rotateCenter} 1.5s ease-in-out infinite`,
})


// components/NavCard.tsx

import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';

const StyledCard = styled(Card)`
  background: #333;
  color: #fff;
  &:hover {
    background: #555;
  }
`;

const NavCard = ({ title }: { title: string }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default NavCard;

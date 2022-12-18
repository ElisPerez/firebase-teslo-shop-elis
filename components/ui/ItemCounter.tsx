// import { Box, IconButton, Typography } from '@mui/material'; // No usar asi porque es mas lento en dev.
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// Icons
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

interface Props {
  currentValue: number;
  maxValue: number;

  // Methods
  updatedQuantity: (newQuantity: number) => void;
}

export const ItemCounter: React.FC<Props> = ({ currentValue, updatedQuantity, maxValue }) => {
  const addOrRemove = (value: number) => {
    if (value === -1) {
      if (currentValue === 1) return;

      return updatedQuantity(currentValue - 1);
    }

    if (currentValue >= maxValue) return;

    updatedQuantity(currentValue + 1);
  };

  return (
    <Box display={'flex'} alignItems={'center'}>
      <IconButton onClick={() => addOrRemove(-1)}>
        <RemoveCircleOutlineOutlinedIcon />
      </IconButton>

      <Typography sx={{ width: 40, textAlign: 'center' }}>{currentValue}</Typography>

      <IconButton onClick={() => addOrRemove(+1)}>
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
    </Box>
  );
};

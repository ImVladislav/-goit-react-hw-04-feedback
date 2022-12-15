import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Box display="flex" mb="32px" justifyContent="space-between" width="250px">
      {options.map(option => {
        const label = option.slice(0, 1).toUpperCase() + option.slice(1);
        return (
          <Button key={option} onClick={onLeaveFeedback} name={option}>
            {label}
          </Button>
        );
      })}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
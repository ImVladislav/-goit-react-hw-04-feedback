import PropTypes from 'prop-types';
import { StatisticsTitle, StatisticItem } from './Statistics.styled'

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticItem>Good: {good}</StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>
        Positive feedback: {total > 0 ? positivePercentage : 0}%
      </StatisticItem>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
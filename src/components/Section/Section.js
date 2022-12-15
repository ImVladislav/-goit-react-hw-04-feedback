import { useState } from 'react';
import PropTypes from 'prop-types';

import { StyledSection } from './Section.styled';
import { Title } from 'components/Title/Title';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const Section = ({ title }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onUpdateStats = evt => {
    const targetName = evt.currentTarget.name;

    switch (targetName) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = Number.parseInt(
    (good / (good + neutral + bad)) * 100
  );
  const message = 'There is no feedback';

  return (
    <StyledSection>
      <Title title={title} />
      <FeedbackOptions
        onLeaveFeedback={onUpdateStats}
        options={['good', 'neutral', 'bad']}
      />
      {totalFeedback > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message={message} />
      )}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
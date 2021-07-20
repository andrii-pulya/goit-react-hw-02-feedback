import React, { Component } from "react";
import { nanoid } from "nanoid";

import "./App.css";

import Section from "./components/Section/Section.jsx";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = (feedback) => {
    this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const btnSectionName = "Please, leave feedback";
    const infoSectionName = "Statistics";
    const totalArray = Object.values(this.state);
    const total = totalArray.reduce(function (sum, current) {
      return sum + current;
    }, 0);

    const positivePercentage = Math.round((good / total) * 100);
    const firstSectionId = nanoid();
    const secondSectionId = nanoid();

    return (
      <div>
        <Section key={firstSectionId} title={btnSectionName}>
          <FeedbackOptions
            options={this.state}
            leaveFeedback={this.incrementFeedback}
          />
        </Section>
        <Section key={secondSectionId} title={infoSectionName}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

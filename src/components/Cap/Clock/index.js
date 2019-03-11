import React, { Component, Fragment } from 'react';
import moment from 'moment';

class Clock extends Component {
  componentDidMount() {
    const { intervalMS } = this.props;
    this.invervalID = setInterval(this.update, intervalMS);
  }

  componentWillUnmount() {
    clearInterval(this.invervalID);
  }

  update = () => {
    this.forceUpdate();
  }

  render() {
    const { to } = this.props;
    const now = Date.now();
    const duration = moment.duration(to - now, 'ms').humanize(true);

    if (to <= now) {
      return <Fragment>
        Lecture started
        <span className="time">{duration}</span>
      </Fragment>;
    }
    return <Fragment>
      Lecture starts
      <span className="time">{duration}</span>
    </Fragment>;
  }
}

export default Clock;

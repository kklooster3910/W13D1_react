import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.tick = this.tick.bind(this);
    }

    componentWillMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval, 10000);
    }

    tick () {
        this.setState({ date: new Date() }); //.bind(this)
    }

    render() {
        const {date} = this.state;
        return (
            <h1>{`${date}`}</h1>
        );
    }
}

export default Clock;
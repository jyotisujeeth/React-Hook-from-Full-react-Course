

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  changeCount(amount) {
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeCount(1)}>+</button>
        <button onClick={() => this.changeCount(-1)}>-</button>
        <button onClick={() => this.resetCount()}>Reset</button>
      </>
    );
  }
}

function Counter() {
  const [count, setCount] = useState(0);

  function changeCount(amount) {
    // TODO: Update state
  }

  function resetCount() {
    // TODO: Update state
  }

  return (
    <>
      <span>{count}</span>
      <button onClick={() => changeCount(1)}>+</button>
      <button onClick={() => changeCount(-1)}>-</button>
      <button onClick={() => resetCount()}>Reset</button>
    </>
  );
}
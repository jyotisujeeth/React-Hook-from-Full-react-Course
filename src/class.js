class WindowSizeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { windowWidth: window.innerWidth, items: [] }
    this.updateWindowWidth = this.updateWindowWidth.bind(this)
  }

  updateWindowWidth() {
    this.setState({ windowWidth: window.innerWidth })
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowWidth)
    this.setState({ items: CustomApi.getList(this.props.url) })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ items: CustomApi.getList(this.props.url) })
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth)
  }

  render() {
    return (
      <>
        <div>Window Width: {this.state.windowWidth}</div>
        {this.state.items.map(item => {
          return <div key={item}>{item}</div>
        })}
      </>
    )
  }
}
// Essentially all this component does is display the window width and a list of items. There is also some basic code setup to manage changes to the window width or the url so we can update the list if the url for the list changes. Now let’s look at how we can convert this class component to a function component with useEffect. To start with we will use the following base code.

function WindowSizeList({ url }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [items, setItems] = useState([])

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  // TODO: Update list when url changes or on mount
  // TODO: Setup resize event listener on mount
  // TODO: Cleanup resize event listener on un-mount

  return (
    <>
      <div>Window Width: {windowWidth}</div>
      {items.map(item => {
        return <div key={item}>{item}</div>
      })}
    </>
  )
}
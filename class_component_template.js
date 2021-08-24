import { Component } from 'react'
import './styles.css'

// other imports

class ComponentName extends Component {
  constructor(props) {
    // displayName ?
    super(props)
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {}

  static getDerivedStateFromProps(nextProps, prevState) {}

  render() {
    return (
      <div className='App'>
        <h1>Hello</h1>
      </div>
    )
  }

  componentDidMount() {
    this.setState({}, () => {})
    this.forceUpdate() // skips the shouldComponentUpdate()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  componentWillUpdate(nextProps, nextState) {}

  getSnapshotBeforeUpdate(prevProps, prevState) {}

  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentWillUnmount() {}

  static getDerivedStateFromError(error) {}

  componentDidCatch(error, info) {}
}

ComponentName.defaultProps = {
  prop_key: 'prop value',
}

export default ComponentName

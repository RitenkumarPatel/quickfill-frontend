import React from 'react'
import Button from './components/Button/Button'
import Header from './components/Header/Header'
import Paragraph from './components/Paragraph/Paragraph'
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch'
import './styles.css'

const authorize = () => {
  chrome.runtime.sendMessage({ message: 'authorize' }, function (response) {
    if (response === 'success') window.close()
  })
}

const unauthorize = () => {
  chrome.runtime.sendMessage({ message: 'unauthorize' }, function (response) {
    if (response === 'success') window.close()
  })
}

interface AppProps {}

interface AppState {
  activated?: boolean
}

class App extends React.Component<AppProps, AppState> {
  constructor (props: AppProps) {
    super(props)
    this.state = {
      activated: localStorage.getItem('activated') === 'true',
    }
  }

  render = (): JSX.Element => {
    return (
      <div className={'vertical'}>
        <Header/>
        <Paragraph>Use Ctrl+Q to autocomplete your text!</Paragraph>
        <div className={'horizontal'}>
          <Paragraph>Activate</Paragraph>
          <ToggleSwitch height={20} width={60} toggled={this.state.activated}
                        onToggle={() => {
                          this.setState({ activated: !this.state.activated })
                          localStorage.setItem('activated',
                            '' + !this.state.activated)
                        }}/>
        </div>
        <div className={'horizontal'}>
          <Button variant="primary" value="Authorize" onClick={authorize}>
            Log In
          </Button>
          <Button variant="primary" value="Unauthorize"
                  onClick={unauthorize}>
            Log Out
          </Button>
        </div>
      </div>
    )
  }
}

export default App

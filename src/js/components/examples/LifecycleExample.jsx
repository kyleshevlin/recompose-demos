import React from 'react'
import axios from 'axios'
import { compose, defaultProps, lifecycle } from 'recompose'

const endpoint = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR'

const enhance = compose(
  defaultProps({
    data: null
  }),
  lifecycle({
    componentDidMount() {
      axios.get(endpoint).then(response => {
        this.setState({ data: response.data })
      })
    }
  })
)

const Cryptos = enhance(({ data }) => (
  <div>
    <h3>Crypto Currencies</h3>
    {data && (
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    )}
  </div>
))

const Lifecycle = () => <Cryptos />

export default Lifecycle

import React from 'react'
import axios from 'axios'
import { branch, compose, lifecycle, renderComponent } from 'recompose'

const endpoint = 'https://api.github.com/users/'

const withLoading = lifecycle({
  state: { isLoading: true }
})

const withUserData = lifecycle({
  componentDidMount () {
    setTimeout(() => {
      axios.get(`${endpoint}${this.props.username}`)
        .then(({ data }) => this.setState({
          isLoading: false,
          data
        }))
    }, 3000)
  }
})

const Spinner = () =>
  <div className='spinner'>
    <span>Loading...</span>
  </div>

const predicate = ({ isLoading }) => isLoading

const withSpinnerWhileLoading = branch(
  predicate,
  renderComponent(Spinner)
)

const enhance = compose(
  withLoading,
  withUserData,
  withSpinnerWhileLoading
)

const users = [
  'kyleshevlin',
  'kentcdodds',
  'gaearon'
]

const GithubUser = enhance(({ data }) => {
  const {
    login,
    avatar_url: avatarUrl,
    html_url: htmlUrl,
    location,
  } = data

  return (
    <div className='github_user'>
      <img className='github_user-avatar' src={avatarUrl} alt={`${name}`} />
      <span className='github_user-login'>
        <a href={htmlUrl}>
          {login}
        </a>
      </span>
      {' -- '}
      <span className='github_user-location'>{location}</span>
    </div>
  )
})

const WeWillDoItLiveExample = () =>
  <div>
    {users.map(user => <GithubUser key={user} username={user} />)}
  </div>

export default WeWillDoItLiveExample

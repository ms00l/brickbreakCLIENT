import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { indexProfiles } from '../../api/profile'

class IndexProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: []
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexProfiles(user)
      .then((res) => this.setState({ profile: res.data.profiles }))
      .then(() => {
        msgAlert({
          heading: 'Index success',
          message: 'Successfully indexed',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Index fail',
          message: 'Index error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { profile } = this.state

    if (profile === null) {
      return 'Loading...'
    }

    let profileJSX
    if (profile.length === 0) {
      profileJSX = 'No profiles created.'
    } else {
      profileJSX = profile.map(profiles => (
        <h2 key={profiles._id}>
          <Link to={`/profiles/${profiles._id}`}>{profiles.username}</Link>
        </h2>
      ))
    }
    return (
      <>
        <h1>My List:</h1>
        <ul>{profileJSX}</ul>
      </>
    )
  }
}

export default IndexProfile

/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import { showProfile, deleteProfile } from '../../api/profile'
import Card from 'react-bootstrap/Card'

class ShowProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showProfile(match.params.id, user)
      .then((res) => this.setState({ profile: res.data.profile }))
      .then(() => {
        msgAlert({
          heading: 'Profile success',
          message: 'Profile created and updated!',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Show Profile failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

	handleDelete = () => {
	  const { match, user, msgAlert, history } = this.props

	  deleteProfile(match.params.id, user)
	    .then(() => history.push('/create-profile'))
	    .then(() => {
	      msgAlert({
	        heading: 'Delete success',
	        message: 'Successfully deleted',
	        variant: 'success'
	      })
	    })
	    .catch((error) => {
	      msgAlert({
	        heading: 'Delete fail',
	        message: 'Delete error: ' + error.message,
	        variant: 'danger'
	      })
	    })
	}

	render () {
	  if (this.state.profile === null) {
	    return 'Loading...'
	  }

	  const { username, first, last, owner } = this.state.profile
	  const { user, history, match } = this.props

	  return (
	    <div className='container col-sm-10 col-md-8'>
	      <>
	        <Card className='card' border='light' style={{ width: '30rem' }}>
	          <Card.Header className='cardHeader'>
	            {username}&apos;s Profile
	          </Card.Header>
	          <Card.Body className='cardColor'>
	            <Card.Title className='cardColor'>
	              <p>Hello {username}!</p>
	            </Card.Title>
	            <Card.Text>
	              <p>First Name: {first}</p>
	              <p>Last Name: {last}</p>
	            </Card.Text>
	            {user._id === owner && (
	              <>
	                <Button
	                  className='formButton btn1'
	                  variant='outline-dark'
	                  onClick={this.handleDelete}>
										Delete
	                </Button>
	                <Button
	                  className='formButton btn1'
	                  variant='outline-dark'
	                  onClick={() =>
	                    history.push(`/profiles/${match.params.id}/edit`)
	                  }>
										Update
	                </Button>
	              </>
	            )}
	          </Card.Body>
	        </Card>
	      </>
	    </div>
	  )
	}
}

export default withRouter(ShowProfile)

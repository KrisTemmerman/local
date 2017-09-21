import React from 'react';
import { Card, Button, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default function ContactCard({contact, deleteContact}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='user outline'/> {contact.name.first} {contact.name.last}
        </Card.Header>
        <Card.Description>
          <p><Icon name='phone'/> {contact.phone}</p>
          <p><Icon name='mail outline'/> {contact.email}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <div className="ui three buttons">
        <Link to={`/contacts/edit/${contact._id}`} className="ui basic button green">Edit</Link>
        <Button basic color="red" onClick={() => deleteContact(contact._id)} >Delete</Button>
        <Modal size={'mini'} trigger={<Button basic color="red">Show Modal</Button>}>
        <Modal.Header>
            Delete Your Account
          </Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>
              No
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' />
          </Modal.Actions>
        </Modal>
    
      </div>
      </Card.Content>
    </Card>
  )
}
ContactCard.propTypes = {
    contact: React.PropTypes.object.isRequired
}
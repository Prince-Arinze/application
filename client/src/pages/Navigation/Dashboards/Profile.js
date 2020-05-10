import React, { Component } from "react";
import { Table } from "reactstrap";
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class Profile extends Component{
  render() {
    return(
      <div className="profile-content">
        <h2>You can only edit your country, Email address, phone number and</h2>
        <div className="button-group">
            
        </div>
        <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

      {/* <CKEditor
          editor={ ClassicEditor }
          data="<p>Hello from CKEditor 5!</p>"
          onInit={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
              const data = editor.getData();
              console.log( { event, editor, data } );
          } }
          onBlur={ ( event, editor ) => {
              console.log( 'Blur.', editor );
          } }
          onFocus={ ( event, editor ) => {
              console.log( 'Focus.', editor );
          } }
      /> */}
      </div>
    )
  }
}

export default Profile;
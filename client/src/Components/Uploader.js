import React from "react";

import { Fragment } from "react";
import axios from "axios";

class Uploader extends React.Component {
  state = {
    avatar: null,
  };

  handleinput = async (e) => {
    let avatar = undefined;
    let image = e.target.files[0];
    let fd = new FormData();

    fd.append("avatar", image, image.name);
    await axios.post("http://localhost:3010/uploader", fd).then(async (res) => {
      avatar = res.data;
    });

    this.setState({ avatar: avatar }, () => {
      console.log(avatar);
    });
  };

  render() {
    return (
      <Fragment>
        <input
          name="avatar"
          type="file"
          onChange={(event) => {
            this.handleinput(event);
          }}
        />
        {/* <button
          onClick={() => {
            this.handleUpload();
          }}
        >
          upload
        </button> */}
      </Fragment>
    );
  }
}

export default Uploader;

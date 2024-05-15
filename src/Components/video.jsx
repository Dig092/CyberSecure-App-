import { Component } from "react";
import video1 from "../assets/Videos/What is Cyber Crime_.mp4";

class Video extends Component {
    render() {
      return (
        <div className="flex w-3/4  justify-center">
          <video className="rounded-lg" src={video1} controls />
        </div>
      );
    }
  }
  export default Video;
  
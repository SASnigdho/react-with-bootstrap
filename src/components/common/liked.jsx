import React from "react";

const Liked = (props) => {
  const liked = props.liked === true ? "Yes" : "No";

  return (
    <i
      onClick={props.onLiked}
      className="fa fa-heart"
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    >
      {liked}
    </i>
  );
};

export default Liked;

import React from "react";

const Liked = (props) => {
  const liked = props.liked === true ? "Yes" : "No";

  return (
    <i class="fa fa-heart" aria-hidden="true">
      {liked}
    </i>
  );
};

export default Liked;

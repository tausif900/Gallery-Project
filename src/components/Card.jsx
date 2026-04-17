import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="h-60 w-70 rounded-2xl overflow-hidden">
          <img
            src={props.elem.download_url}
            className="h-full w-full object-cover "
          />
        </div>
        <h2 className="font-semibold text-lg">{props.elem.author}</h2>
      </a>
    </div>
  );
};

export default Card;

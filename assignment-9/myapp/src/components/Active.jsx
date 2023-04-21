import React from "react";
import "../components/style/active.css";

function Active(props) {
  return (
    <>
      {props.arr.map((item, i) => {
        return (
          <div className="item" key={i}>
            <div className="type">{item.type}</div>
            <div className="link">
              {
                <a href={`https://www.github.com/${item.repo.name}`}>
                  {item.repo.name}
                </a>
              }
            </div>
            <div className="date">
              {new Date(item.created_at).toDateString()}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Active;

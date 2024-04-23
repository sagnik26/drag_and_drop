import React from "react";
import { Data } from "../../interfaces";

interface Props {
  data: Data;
  handleDragging: (param: boolean) => void;
}

const CardItem: React.FC<Props> = ({ data, handleDragging }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${data.id}`);
    handleDragging(true);
  };

  const handleDragEnd = () => {
    handleDragging(false);
  };

  return (
    <div
      className="card-container"
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <p>{data.content}</p>
    </div>
  );
};

export default CardItem;

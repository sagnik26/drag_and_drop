import React from "react";
import { Status, Data } from "../../interfaces";
import CardItem from "../CardItem/CardItem";

interface Props {
  status: Status;
  items: Data[];
  isDragging: boolean;
  handleDragging: (param: boolean) => void;
  handleUpdateList: (id: number, status: Status) => void;
}

const ContainerCards: React.FC<Props> = ({
  status,
  items,
  isDragging,
  handleDragging,
  handleUpdateList,
}) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleUpdateList(+e.dataTransfer.getData("text"), status);
    handleDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className={`layout-cards ${isDragging && "layout-dragging"}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p>{status} hero</p>
      {items.map(
        (item: Data) =>
          item.status === status && (
            <CardItem
              data={item}
              key={item.id}
              handleDragging={handleDragging}
            />
          )
      )}
    </div>
  );
};

export default ContainerCards;

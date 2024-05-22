import React, { useState } from "react";
import ItemsBoard from "../Small components/ItemsBoard";
import '../styles/Boardstyles.css';

const initialLists = [
  {
    title: "Components",
    status: "components",
  },
  {
    title: "Accessories",
    status: "accessories",
  },
  {
    title: "Batteries",
    status: "batteries",
  },
];

const initialData = {
  components: [
    {
      id: "qwe1",
      title: "Card 1",
      status: "components",
      order: 1,
    },
    {
      id: "qwe3",
      title: "Card 3",
      status: "components",
      order: 2,
    },
    {
      id: "qwe5",
      title: "Card 5",
      status: "components",
      order: 3,
    },
  ],
  accessories: [
    {
      id: "qwe2",
      title: "Card 2",
      status: "accessories",
      order: 1,
    },
  ],
  batteries: [
    {
      id: "qwe4",
      title: "Card 4",
      status: "batteries",
      order: 1,
    },
  ],
};

export default function Board() {
  const [lists, setLists] = useState(initialLists);
  const [data, setData] = useState(initialData);

  const cardChangeHandler = (cardInfo, newStatus, targetCardId) => {
    const { id, status: oldStatus } = cardInfo;

    let dropCard = data[oldStatus].find((el) => el.id === id);
    let targetCard =
  targetCardId !== ""
    ? data[newStatus].find((el) => el.id === targetCardId)
    : null;

    let newListOrderValueMax = data[newStatus]
      .map((item) => item.order)
      .reduce((maxValue, a) => Math.max(maxValue, a), 0);

    if (oldStatus === newStatus) {
      let temp = data[oldStatus]
        .map((item) => {
          if (item.id === dropCard.id)
            return {
              ...dropCard,
              order: targetCard ? targetCard.order - 1 : newListOrderValueMax + 1,
            };
          return item;
        })
        .sort((a, b) => a.order - b.order)
        .map((item, i) => {
          return { ...item, order: i + 1 };
        });
      setData((d) => {
        return { ...d, [oldStatus]: temp };
      });
      return;
    }

    let tempGaveList = data[oldStatus]
      .filter((item) => item.id !== id)
      .sort((a, b) => a.order - b.order)
      .map((item, i) => {
        return { ...item, order: i + 1 };
      });

    let tempRecievedList = [
      ...data[newStatus],
      {
        ...dropCard,
        order: targetCard ? targetCard.order - 1 : newListOrderValueMax + 1,
      },
    ]
      .sort((a, b) => a.order - b.order)
      .map((item, i) => {
        return { ...item, order: i + 1 };
      });

    setData((d) => {
      return { ...d, [oldStatus]: tempGaveList, [newStatus]: tempRecievedList };
    });
  };

  return (
    <div className="board_page">
      <div className="app-content-area">
        <div className="app-header">
          <div className="left">
            <div className="logo">CATEGORIES</div>
          </div>
          <div className="center"></div>
        </div>
        <main className="app-board">
          <section className="board-body">
            <div className="wrap-lists">
              {lists.map((l) => (
                <ItemsBoard
                  data={data[l.status]}
                  key={l.status}
                  title={l.title}
                  onChange={cardChangeHandler}
                />
              ))}
              <div className="board-col">
                <div className="list">
                  <a className="btn-list" href="#">
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
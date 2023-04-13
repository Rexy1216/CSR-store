import React from "react";
import { useState } from "react";
import Additem from "../Additem/additem";
import Removeitem from "../Removeitem/removeitem";

import { MdAddBox } from "react-icons/md";
import "./dashboard.css";

const Dashboard = () => {
  const [i, setI] = useState([
    {
      itemName: "Kaldereta",
    },
    {
      itemName: "Kaldereta",
    },
    {
      itemName: "Kaldereta",
    },
    {
      itemName: "Kaldereta",
    },
    {
      itemName: "Kaldereta",
    },
    {
      itemName: "Kaldereta",
    },
    {
      itemName: "Kaldereta",
    },
    {
      itemName: "Kaldereta",
    },
    {
      itemName: "Kaldereta",
    },
    {
      itemName: "Kaldereta",
    },
  ]);

  const [itemss, setItemss] = useState([
    {
      price: 50,
      itemName: "Karne",
      qty: 20,
      id: 1,
    },
    {
      price: 50,
      itemName: "T-Shirt",
      qty: 20,
      id: 4,
    },
    {
      price: 80,
      itemName: "Jeans",
      qty: 20,
      id: 5,
    },
    {
      price: 25,
      itemName: "Socks",
      qty: 20,
      id: 6,
    },
    {
      price: 40,
      itemName: "Shoes",
      qty: 20,
      id: 7,
    },
  ]);

  const [itemsSelected, setItemSelected] = useState([]);

  function addItemAtIndex(index, newItem) {
    const newItemsSelected = [...itemsSelected];
    const existingItem = newItemsSelected.find(
      (item) => item.itemName === newItem.itemName
    );
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      newItem.qty = 1;
      newItemsSelected.splice(index, 0, newItem);
    }
    setItemSelected(newItemsSelected);
  }

  const removeItemByIndex = (index) => {
    setItemSelected((prevItems) => {
      return prevItems.filter((item, i) => i !== index);
    });
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
  const [isContextMenu, setIsContextMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleRemoveModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      {isModalVisible && <Additem setAddItem={setIsModalVisible} />}
      {isModalVisible && <Removeitem setRemoveItem={setIsModalVisible} />}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="items-container">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <input
                className="search-bar"
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="table-detail">
              <p className="text-detail">Product name</p>
              <p className="text-detail" style={{ marginLeft: 140 }}>
                Price
              </p>
              <p
                className="text-detail"
                style={{
                  marginLeft: 160,
                  backgroundColor: "white",
                  height: 30,
                  width: 120,
                  textAlign: "center",
                  paddingTop: 6,
                  borderRadius: 8,
                  cursor: "pointer",
                }}
                onClick={handleOpenModal}
              >
                Add item
              </p>
              <p
                className="text-detail"
                style={{
                  marginLeft: 15,
                  backgroundColor: "white",
                  height: 30,
                  width: 120,
                  textAlign: "center",
                  paddingTop: 6,
                  borderRadius: 8,
                  cursor: "pointer",
                }}
                onClick={handleRemoveModal}
              >
                Remove item
              </p>
            </div>
            <div className="left-container">
              {itemss.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="items"
                    onContextMenu={(e) => {
                      e.preventDefault();
                      setContextMenuPos({ x: e.pageX, y: e.pageY });
                      setIsContextMenu(true);
                    }}
                  >
                    <div className="name-container">
                      <p
                        style={{ fontSize: 18, color: "black", marginLeft: 20 }}
                      >
                        {item.itemName}
                      </p>
                    </div>
                    <div className="price-container">
                      <p style={{ fontSize: 18, color: "black" }}>
                        ₱{item.price}
                      </p>
                    </div>
                    <div className="additem-container">
                      <p
                        style={{ fontSize: 18, color: "black", marginLeft: 20 }}
                        onClick={() =>
                          addItemAtIndex(item.id, {
                            price: item.price,
                            itemName: item.itemName,
                          })
                        }
                      >
                        Add Item
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right-container">
            <div className="table-detail" style={{ marginTop: 10 }}>
              <p className="text-detail">Product name</p>
              <p className="text-detail" style={{ marginLeft: 90 }}>
                Price
              </p>
              <p className="text-detail" style={{ marginLeft: 90 }}>
                Qty
              </p>
              <p className="text-detail" style={{ marginLeft: 100 }}>
                Total
              </p>
              <p
                className="text-detail"
                style={{
                  marginLeft: 100,
                  backgroundColor: "white",
                  height: 30,
                  width: 100,
                  textAlign: "center",
                  paddingTop: 6,
                  borderRadius: 8,
                  cursor: "pointer",
                }}
                onClick={() => setItemSelected([])}
              >
                Clear
              </p>
            </div>
            <div className="table-container">
              {itemsSelected.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="items"
                    onContextMenu={(e) => {
                      e.preventDefault();
                      setContextMenuPos({ x: e.pageX, y: e.pageY });
                      setIsContextMenu(true);
                    }}
                  >
                    <div className="name-container">
                      <p
                        style={{ fontSize: 18, color: "black", marginLeft: 20 }}
                      >
                        {item.itemName}
                      </p>
                    </div>
                    <div className="price-container" style={{ marginLeft: 30 }}>
                      <p style={{ fontSize: 18, color: "black" }}>
                        ₱{item.price}
                      </p>
                    </div>
                    <div className="qty-container">
                      <p
                        style={{ fontSize: 18, color: "black", marginTop: 20 }}
                      >
                        {item.qty}
                      </p>
                    </div>
                    <div className="total-container">
                      <p
                        style={{ fontSize: 18, color: "black", marginTop: 20 }}
                      >
                        ₱15
                      </p>
                    </div>
                    <div
                      className="remove-container"
                      style={{ marginLeft: -200 }}
                    >
                      <p
                        style={{
                          fontSize: 18,
                          color: "black",
                          paddingLeft: 15,
                        }}
                        onClick={() => removeItemByIndex(index)}
                      >
                        Remove
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pay-container">
              <div className="text-handler">
                <div className="total">
                  <p
                    className="paytext"
                    style={{ marginRight: 100, marginLeft: -150, fontSize: 25 }}
                  >
                    Total:
                  </p>
                  <p className="paytext" style={{ fontSize: 25 }}>
                    ₱365
                  </p>
                </div>
                <div className="cash-container" style={{ marginBottom: 30 }}>
                  <p className="calc-text" style={{ marginRight: -100 }}>
                    Cash:
                  </p>
                  <p
                    className="calc-text"
                    style={{ fontWeight: 600, marginRight: 10 }}
                  >
                    ₱
                  </p>
                  <input className="cash" type="number" />
                </div>
                <div className="total">
                  <p
                    className="paytext"
                    style={{
                      marginRight: 100,
                      marginLeft: -180,
                      fontSize: 25,
                      marginTop: -45,
                    }}
                  >
                    Change:
                  </p>
                  <p
                    className="paytext"
                    style={{ fontSize: 25, marginTop: -45 }}
                  >
                    ₱245
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="btns"
                    style={{ backgroundColor: "#73D4B1", cursor: "pointer" }}
                  >
                    <p className="btns-txt">PAY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
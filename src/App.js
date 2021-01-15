import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Contacts from "./contacts";

const HelloWorldApp = () => {
  const [First, updateFirst] = useState("");
  const [Last, updateLast] = useState("");
  const [Phone, updatePhone] = useState("");
  const [contacts, addContacts] = useState([]);
  let contact = {
    First: First,
    Last: Last,
    Phone: Phone
  };
  onSubmit = (e) => {
    e.preventDefault();
    addContacts((arr) => [...arr, contact]);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <label>First name</label>

        <input
          value={First}
          placeholder="First"
          onChange={(e) => updateFirst(e.target.value)}
        />
        <label>Last Name</label>

        <input
          value={Last}
          placeholder="Last"
          onChange={(e) => updateLast(e.target.value)}
        />
        <label>Phone</label>
        <input
          value={Phone}
          placeholder="Phone"
          onChange={(e) => updatePhone(e.target.value)}
        />
        <View>
          <button onClick={onSubmit}>Add Contact</button>
        </View>
      </form>
      <Contacts friends={contacts} />
    </View>
  );
};
export default HelloWorldApp;

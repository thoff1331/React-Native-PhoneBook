import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const Contacts = (props) => {
  function tableData(props) {
    return (
      props &&
      props.friends.map((el, index) => {
        return (
          <tr key={index}>
            <td>{el.First}</td>
            <td>{el.Last}</td>
            <td>{el.Phone}</td>
          </tr>
        );
      })
    );
  }
  console.log(tableData);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <table>
        <tbody
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80vw"
          }}
        >
          <tr>First Name</tr>
          <tr>Last Name </tr>
          <tr>Phone</tr>
          {tableData}
        </tbody>
      </table>
    </View>
  );
};

export default Contacts;

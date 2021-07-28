import React, { useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useState } from "react";
import axios from "axios";
import useCustomHooks from "./customHooks";

const App = () => {
  // const [dataList, setDataList] = useState(["sdf", "sdf"]);

  //We will use to optimise list
  const listItem = ({ item }) => {
    return <Text> This is my Rext</Text>;
  };

  const [dataList] = useCustomHooks();

  /*const fetchDetailsFromServer = () => {
    axios
      .get("https://reactnative.dev/movies.json")
      .then((response) => {
        console.log(response.data);
        setDataList(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finally");
      });
  };

  useEffect(() => {
    fetchDetailsFromServer();
  }, []);*/

  return (
    <View style={styles.app}>
      <FlatList
        data={dataList}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,

    backgroundColor: "#FFF676"
  }
});
export default App;

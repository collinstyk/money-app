import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import SearchIcon from "../assets/images/search.svg";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (text: string) => {
    setQuery(text);
  };

  return (
    <View style={styles.container}>
      <SearchIcon width={17} height={17} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#3D56FA"
        value={query}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 18,

    backgroundColor: "#F5F6FA",
    borderRadius: 16,
    height: 53,
    width: 315,
    marginHorizontal: "auto",
  },
  input: {
    height: "auto",
    color: "#3D56FA",
    fontFamily: "SFProRounded-regular",
    fontSize: 18,
    flex: 1,
  },
});

export default SearchBar;

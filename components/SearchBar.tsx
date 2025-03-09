import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import SearchIcon from "../assets/images/search.svg";

type SearchBarProps = {
  shade?: "light" | "blue";
  style?: object;
};

const SearchBar: React.FC<SearchBarProps> = ({ shade = "light", style }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (text: string) => {
    setQuery(text);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: shade === "blue" ? "#05199E" : "transparent" },
        { ...style },
      ]}
    >
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

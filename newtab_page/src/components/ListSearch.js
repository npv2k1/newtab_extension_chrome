import React from "react";
import "./style.css";
import Search from "./Search";

const searchTool = [
  {
    title: "google",
    uri: "https://google.com/search?q=",
    icon: "./assets/icons/google.png",
  },
  {
    title: "bing",
    uri: "https://www.bing.com/search?q=",
    icon: "./assets/icons/bing.png",
  },
  {
    title: "duckduckgo",
    uri: "https://duckduckgo.com/?q=",
    icon: "./assets/icons/duckduckgo.png",
  },
  {
    title: "stackoverflow",
    uri: "https://stackoverflow.com/search?q=",
    icon: "./assets/icons/stackoverflow.png",
  },
  {
    title: "coccoc",
    uri: "https://coccoc.com/search?query=",
    icon: "./assets/icons/coccoc.png",
  },
  {
    title: "ecosia",
    uri: "https://www.ecosia.org/search?q=",
    icon: "./assets/icons/ecosia.png",
  },
];

class ListSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTool: searchTool };
  }
  render() {
    return (
      <div className="s010">
        <form>
          <div className="inner-form">
            {this.state.searchTool.map((s) => {
              return <Search title={s.title} uri={s.uri} icon={s.icon} />;
            })}
          </div>
        </form>
      </div>
    );
  }
}
export default ListSearch;

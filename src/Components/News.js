import React, { Component } from "react";
import NewsItems from "./NewsItems";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  // default props if props is not passed
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsApp`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey="Put Your Own API key Here"&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // Spinner component get actived here
    this.setState({ loading: true });
    // waiting for data
    let data = await fetch(url);
    // waiting for data get converted into json
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false, // Spinner component get deactived here after data get fetched
    });
  }

  // Fetching data from API
  async componentDidMount() {
    this.updateNews();
  }

  handlePreviousClick = async () => {
    console.log("Previous");
    this.setState({ page: this.state.spage - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    console.log("Next");
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }; 

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey="Put Your Own Api Key here" &page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // waiting for data
    let data = await fetch(url);
    // waiting for data get converted into json
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false, // Spinner component get deactived here after data get fetched
    })
  };

  render() {
    return (
      // < > THIS IS CALLED GHOST ELEMENT
      <>
        {/* style={{}} ==> first/outer curly bract is for javascript and the inner curly bracket is for object */}
        <h1 className="text-center" style={{ margin: "35px" }}>
          News App - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {/* Loading Spinner */}
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            {/* newsItem - Card Content */}
            <div className="row">
              {/* !this.state.loading &&    ==> this code was while past & previous buttons */}
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}


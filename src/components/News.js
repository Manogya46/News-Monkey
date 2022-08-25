import React, { useEffect , useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=e3ab0300255d4581aecd57f952a1698a&page=${this.state.page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }

  useEffect(() => {
    updateNews();
  }, [])
  

  const handlePrevClick = async () => {
    setPage(page-1);
    updateNews();
  }

  const handleNextClick = async () => {
    setPage(page+1);
    updateNews();
  }


    return (
      <div className="container my-4">
        <h2 className="text-center">
          {console.log(articles)}
          NewsMonkey -{" "}
          {props.category.slice(0, 1).toUpperCase() +
            props.category.slice(1)}
        </h2>
        {loading && <Spinner />}
        
          <div className="container">
              <div className="row">
              {!loading && articles?.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={
                          element.title ? element.title.slice(0, 45) + "..." : ""
                        }
                        description={
                          element.description
                            ? element.description.slice(0, 88) + "..."
                            : ""
                        }
                        imageUrl={element.urlToImage}
                        url={element.url}
                        published={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
            </div>
            {/* </InfiniteScroll> */}
            <div className="container d-flex justify-content-between">
                <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div>
          </div>
        
    );
  }



export default News;

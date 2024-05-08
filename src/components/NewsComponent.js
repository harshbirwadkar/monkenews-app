import React, { useEffect , useState } from "react";
import NewsItemComponent from "./NewsItemComponent";
import LoadSpinner from "./LoadSpinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent =(props)=> {
    const [articles, setarticles] = useState([]); 
    const [page, setpage] = useState(1); 
    const [totalResults, settotalResults] = useState(0); 
    const [loading, setloading] = useState(false); 

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    // document.title = `MonkeNews ${props.category === ""
    //             ? ""
    //             : " - " + capitalizeFirstLetter(props.category)
    //         }`;

        
    
    const updateNews = async () => {
        props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        setloading(true);
        props.setProgress(30)
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(60)
        console.log(parsedData);

        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        props.setProgress(100)
    };
    useEffect(() => {
        updateNews();
        console.log("hello cdm");
      }, []);

    // handleNextBut = async () => {
    //     console.log("next")
    //     setState({
    //         page: state.page + 1
    //     })
    //     updateNews();
    // }
    // handlePrevBut = async () => {
    //     console.log("prev")
    //     setState({
    //         page: state.page - 1
    //     })
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country
            }&category=${props.category
            }&apiKey=${props.apiKey}&pageSize=${props.pageSize
            }&page=${page + 1}`;
        // setloading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setpage(page+1)
       
    };

   
        return (
            <div className="container my-3">
                <h1 className="text-center my-5">
                    MonkeNews - Get your {capitalizeFirstLetter(props.category)}{" "}
                    Headlines here{" "}
                </h1>
                {loading && <LoadSpinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<LoadSpinner />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element, index) => {
                                return (
                                    <div className="col-md-4 my-3" key={index}>
                                        <NewsItemComponent
                                            newsUrl={element.url}
                                            title={
                                                element.title?.length > 45 ? element.title.slice(0, 45) + "..." : element.title
                                            }
                                            description={
                                                element.description?.length > 90  ? element.description.slice(0, 90) + "..." : element.description
                                            }
                                            imageUrl={element.urlToImage}
                                            author={element.author}
                                            date={element.publishedAt}
                                            source={element.source.name}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

                {/* <div className="d-flex justify-content-between my-4">
                    <button type="button" disabled={state.page <= 1} onClick={handlePrevBut} className="btn btn-info"> &larr; Previous</button>
                    <button type="button" disabled={Math.ceil(state.totalResults / props.pageSize) < state.page + 1} onClick={handleNextBut} className="btn btn-info">Next &rarr;</button>
                </div>  */}
            </div>
        );
} 

NewsComponent.defaultProps = {
    country: "in",
    pageSize: 9,
};

NewsComponent.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

export default NewsComponent;

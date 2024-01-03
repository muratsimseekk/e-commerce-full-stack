import {
  Button,
  Input,
  Option,
  Select,
  Spinner,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { VscChecklist } from "react-icons/vsc";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useParams } from "react-router-dom";
import { AxiosInstance } from "../../api/api";
import { productFetch } from "../../store/actions/thunkAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";

function Products() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.general.categories);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [sorted, setSorted] = useState("");

  const [page, setPage] = useState(0);
  const urlParam = useParams();
  const parametre = urlParam["*"].replace("/", ":");

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        const categoryID = categories.find((item) => item.code === parametre);
        dispatch(
          productFetch({
            sort: sorted,
            filter: searchValue,
            category: categoryID?.id,
            offset: page * 25,
          })
        );
        console.log("calisti fetch data");
      } catch (err) {
        toast.error("An error occurred while fetching products");
      } finally {
        setLoading(false);
      }
    };

    // Fetch data only on the initial render
    if (page === 0) {
      fetchData();
    }
  }, [page]);

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
    dispatch(
      productFetch({
        sort: sorted,
        filter: searchValue,
        category: categoryID?.id,
        offset: (page + 1) * 25,
      })
    );
  };

  const sortHandler = (e) => {
    setSorted(e);
  };

  const categoryID = categories.find((item) => item.code === parametre);

  const sendSort = () => {
    dispatch(
      productFetch({
        sort: sorted,
        filter: searchValue,
        category: categoryID?.id,
      })
    );
  };

  const products = useSelector((state) => state.product.productList);

  return loading ? (
    <div className="flex justify-center">
      <Spinner color="blue" className="w-36 h-36 pb-8" />
    </div>
  ) : (
    <div className="flex justify-center items-center  pt-8 ">
      <div className="flex flex-col w-full items-center gap-12">
        <div className="w-11/12 flex flex-col gap-10 items-center  xl:flex xl:flex-row xl:justify-between xl:items-center">
          <h2 className="text-secondText text-base font-medium">
            Showing all{" "}
            <span className="font-semibold">{products?.length}</span> results
          </h2>
          <div className="flex items-center gap-7  font-semibold text-lg p-2">
            <h3 className="text-secondText">Views :</h3>
            <BsFillGridFill className="h-6 w-6 text-textColor hover:cursor-pointer" />
            <VscChecklist className="h-6 w-6 text-secondText hover:cursor-pointer" />
          </div>
          <div className="flex gap-2 items-center">
            <Input
              placeholder="Enter an item name .."
              size="lg"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <Select label="Sort By" size="lg" onChange={sortHandler}>
              <Option value="rating:asc">Popularity Low-High</Option>
              <Option value="rating:desc">Popularity High-Low</Option>
              <Option value="price:asc">Price Low-High</Option>
              <Option value="price:desc">Price High-Low</Option>
            </Select>
            <div>
              <Button
                onClick={() => {
                  sendSort();
                }}
                size="lg"
                className="capitalize tracking-wider bg-primaryColor text-lightText"
              >
                Filter
              </Button>
            </div>
          </div>
        </div>
        <InfiniteScroll
          dataLength={products?.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="flex justify-center">
            <div className="flex flex-col gap-16 xl:gap-0 xl:flex xl:flex-row w-11/12 xl:flex-wrap xl:pt-5 xl:justify-between xl:gap-y-12">
              {products?.map((item, i) => (
                <div
                  key={i}
                  className=" xl:w-[23%] flex flex-col text-center justify-between xl:gap-6 gap-8 "
                >
                  <Link to={`/shop/category/${item.id}/${item.name}`}>
                    <img
                      className="w-[100%] "
                      src={item.images[0].url}
                      alt={item.name}
                    />
                  </Link>
                  <h4 className="text-textColor font-bold tracking-wider">
                    {item.name}
                  </h4>
                  <p className="text-secondText font-normal text-sm">
                    {item.description}
                  </p>
                  <div className="flex gap-3 xl:gap-5 justify-center">
                    <span className="text-secondaryColorGreen font-bold">
                      $ {item.price}
                    </span>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
                    <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
                    <button className="h-5 w-5 bg-alertColor rounded-full"></button>
                    <button className="h-5 w-5 bg-darkBg rounded-full"></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>

        <div className="w-full  flex justify-center bg-lightGray">
          <div className="w-[85%] py-6 pb-8 flex flex-col items-center gap-8 xl:flex xl:flex-row xl:justify-between xl:items-center text-secondText">
            <FontAwesomeIcon
              icon={faHooli}
              className="xl:w-24 xl:h-24 w-40 h-40"
            />
            <FontAwesomeIcon
              icon={faLyft}
              className="xl:w-24 xl:h-24 w-40 h-40"
            />
            <FontAwesomeIcon
              icon={faPiedPiperHat}
              className="xl:w-24 xl:h-24 w-40 h-40"
            />
            <FontAwesomeIcon
              icon={faStripe}
              className="xl:w-24 xl:h-24 w-40 h-40"
            />
            <FontAwesomeIcon
              icon={faAws}
              className="xl:w-24 xl:h-24 w-40 h-40"
            />
            <FontAwesomeIcon
              icon={faRedditAlien}
              className="xl:w-24 xl:h-24 w-40 h-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

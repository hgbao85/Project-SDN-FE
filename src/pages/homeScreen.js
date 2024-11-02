import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../component/productCard";
import ChatIcon from "../component/chatIcon";
import Header from "../component/header";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ProductCardNoImg from "../component/productCardNoImg";
const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filterCount, setFilterCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://mma301.onrender.com/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let count = 0;
    if (selectedBrand) count++;
    if (selectedCategory) count++;
    setFilterCount(count);
  }, [selectedBrand, selectedCategory]);

  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"];
  const categories = [
    "Running Shoes",
    "Sport Shoes",
    "Basketball Shoes",
    "Fashion Shoes",
    "Sneakers",
  ];

  const toggleFilters = () => setShowFilters(!showFilters);

  const handleBrandSelect = (brand) => setSelectedBrand(brand);
  const handleCategorySelect = (category) => setSelectedCategory(category);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand ? product.brand === selectedBrand : true;
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearch && matchesBrand && matchesCategory;
  });

  const clearFilters = () => {
    setSelectedBrand("");
    setSelectedCategory("");
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 2 }}>
        <Header />
      </div>
      <div style={{ marginTop: "5vh", flex: 10 }}>
        <div style={{ display: "flex" }}>
          <div>
            <h2 style={{ margin: "0px" }}>Shoes</h2>
            <h7>For the brands</h7>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search product name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ padding: "10px 23vw", borderRadius: "5px" }}
            />
          </div>

          <button
            onClick={toggleFilters}
            style={{
              width: "100px",
              height: "40px",
              padding: "5px 2vw",
              justifyContent: "center",
              alignContent: "center",
              overflow: "hidden",
              margin: "0px 10px 10px 10px",
              borderRadius: "5px",
            }}
          >
            <sppan>Filters</sppan>
            {filterCount > 0 && <span>{filterCount}</span>}
          </button>

          <Link to="/profile">
            <img
              src={logo}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: 50,
                marginLeft: "80px",
                marginTop: "-10px",
                border: "1px solid #000",
              }}
            />
          </Link>
        </div>

        {showFilters && (
          <div>
            <div>
              <h3>Brand</h3>
              <div>
                <button onClick={() => handleBrandSelect("")}>All</button>
                {brands.map((brand) => (
                  <button key={brand} onClick={() => handleBrandSelect(brand)}>
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3>Category</h3>
              <div>
                <button onClick={() => handleCategorySelect("")}>All</button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {filterCount > 0 && (
              <button onClick={clearFilters}>Clear Filters</button>
            )}
          </div>
        )}
        <div style={{ display: "flex" }}>
          {filteredProducts.length === 0 ? (
            <div>
              <p>No products found.</p>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flex: 7,
                marginLeft: 50,
              }}
            >
              {filteredProducts.map((item) => (
                <ProductCard
                  key={item._id}
                  product={item}
                  onClick={() =>
                    navigation.navigate("Product Details", { product: item })
                  }
                />
              ))}
            </div>
          )}
          <div style={{ flex: 2.4 }}>
            <div
              style={{
                width: "23vw",
                height: "20vh",
                background: "#FF3300",
                overflow: "hidden",
                borderRadius: "20px",
              }}
            >
              <h2
                style={{
                  width: "55%",
                  marginLeft: 20,
                  marginTop: 20,
                  color: "white",
                }}
              >
                giày thể thao cho mùa hè
              </h2>
            </div>
            <div>
              <h4 style={{ fontWeight: 400, margin: "40px 0px 0px 30px" }}>
                sản phẩm mới
              </h4>
              <div>
                {filteredProducts.length === 0 ? (
                  <div>
                    <p>No products found.</p>
                  </div>
                ) : (
                  <div>
                    {filteredProducts.map((item) => (
                      <ProductCardNoImg
                        key={item._id}
                        product={item}
                        onClick={() =>
                          navigation.navigate("Product Details", {
                            product: item,
                          })
                        }
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div><ChatIcon onClick={() => navigation.navigate("Support")} /> */}
    </div>
  );
};

export default HomeScreen;

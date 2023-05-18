import React, {useCallback, useEffect, useMemo, useState} from "react";
import { ProductModel} from "@/resources/models";
import { ProductsApi } from "@/api";
import { Table, TableColumn } from "@/components/Atoms";
import { ProductFavoriteButton } from "@/pages/Main/Products/ProductFavoriteButton";
import {Input, Select} from "@/components/Forms";
import { debounce } from "lodash";

enum PRODUCTS_MODE {
  ALL = 'all',
  FAVORITE = 'favorite'
}

const showOptions = [
  { label: 'Show all', value: PRODUCTS_MODE.ALL },
  { label: 'Show only favorites', value: PRODUCTS_MODE.FAVORITE }
]



export const Products = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [mode, setMode] = useState(PRODUCTS_MODE.ALL);

  const handleChangeSearch = (value: string) => {
    setSearch(value);
    debouncedSearch(value, mode);
  }

  const handleChangeMode = (value: PRODUCTS_MODE) => {
    setMode(value);
    fetchProducts(search, value);
  }

  const fetchProducts = useCallback((search: string, mode: PRODUCTS_MODE) => {
    let fetchApi;
    if (mode === PRODUCTS_MODE.ALL) {
      fetchApi = ProductsApi.search;
    } else {
      fetchApi = ProductsApi.getFavoriteProducts;
    }

    const query = {
      ...search ? { search } : {}
    };

    setLoading(true);
    fetchApi(query)
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      })
  }, []);

  const debouncedSearch = useMemo(() => {
    return debounce(fetchProducts, 300);
  }, [fetchProducts])

  const onRemoveFavorite = useCallback((product: ProductModel) => {
    if (mode === PRODUCTS_MODE.FAVORITE) {
      setProducts(products.filter((item) => item !== product));
    }
  }, [products, mode]);

  const columns = useMemo<TableColumn[]>(() => {
    return [
      { title: "Title", dataIndex: "title" },
      { title: "Category", dataIndex: "category" },
      { title: "Price", dataIndex: "price", render: (product: ProductModel) => `$${product.price}` },
      {
        title: "",
        dataIndex: "actions",
        align: "right",
        render: (product: ProductModel) => {
          return (
            <ProductFavoriteButton product={product} onRemoveFavorite={onRemoveFavorite} />
          )
        }
      },
    ]
  }, [onRemoveFavorite])

  useEffect(() => {
    fetchProducts('', PRODUCTS_MODE.ALL);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-medium mb-5">
        Products
      </h1>

      <div className="grid sm:grid-cols-3 gap-4 mb-5">
        <Input
          className="sm:col-span-2"
          prefixIcon="search"
          placeholder="Search by title or category"
          value={search}
          onChange={(e) => handleChangeSearch(e.target.value)}
        />

        <Select options={showOptions} value={mode} onChange={(value: PRODUCTS_MODE) => handleChangeMode(value)} />
      </div>

      <Table columns={columns} data={products} loading={loading} />
    </div>
  )
}

import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import { SvgIcon } from "@/components/Atoms";
import { ProductModel } from "@/resources/models";
import clsx from "classnames";
import { ProductsApi } from "@/api";

type ProductFavoriteButtonProps = {
  product: ProductModel;
  onRemoveFavorite: (product: ProductModel) => void;
}

export const ProductFavoriteButton: FC<ProductFavoriteButtonProps> = ({
  product,
  onRemoveFavorite,
}) => {
  const [isFavorite, setIsFavorite] = useState(product.isFavorited);
  const [loading, setLoading] = useState(false);

  const toggleFavorite = () => {
    setLoading(true);
    ProductsApi.toggleFavorite(product.id)
      .then(({ isFavorite: result }) => {
        if (result) {
          toast.success(`${product.title || 'Product'} is added to favorite list successfully`);
        } else {
          toast.success(`${product.title || 'Product'} is removed from favorite list successfully`);
          onRemoveFavorite(product);
        }
        setIsFavorite(result);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  return (
    <div className="flex justify-end">
      <SvgIcon
        name={loading ? "spinner" : isFavorite ? "star-filled" : "star"}
        className={clsx('w-6 h-6', {
          'text-amber-600 hover:cursor-pointer hover:opacity-80': !loading,
          'animate-spin': loading,
        })}
        onClick={toggleFavorite}
      />
    </div>
  )
}

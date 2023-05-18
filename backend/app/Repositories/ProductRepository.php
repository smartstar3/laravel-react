<?php

namespace App\Repositories;

use App\Models\Product;
use App\Models\User;

class ProductRepository
{
    public function toggleFavorite(User $user, Product $product): bool
    {
        $result = $user->favoriteProducts()->toggle([$product->id]);

        return in_array($product->id, $result["attached"]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use App\Repositories\ProductRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    protected ProductRepository $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function index(Request $request): JsonResponse
    {
        $user = auth()->user();

        $search = $request->input('search');

        $query = Product::with(['favoritedBy' => function ($query) use ($user) {
            $query->where(User::getTableName() .'.id', $user->id);
        }]);

        if ($search) {
            $query->where(function ($query) use ($search) {
               $query->orWhere('title', 'like', '%'.$search.'%')
                   ->orWhere('category', 'like', '%'.$search.'%');
            });
        }

        $products = $query->get();

        $products = $products->map(function ($product) {
            $product->isFavorited = $product->favoritedBy->isNotEmpty();
            unset($product->favoritedBy);
            return $product;
        });

        return response()->json(['products' => $products]);
    }

    public function getFavorites(Request $request)
    {
        $user = auth()->user();

        $search = $request->input('search');

        $query = $user->favoriteProducts();

        if ($search) {
            $query->where(function ($query) use ($search) {
                $query->orWhere('title', 'like', '%'.$search.'%')
                    ->orWhere('category', 'like', '%'.$search.'%');
            });
        }

        $favoritedProducts = $query->get();

        return response()->json(['products' => $favoritedProducts]);
    }

    public function toggleFavorite($id): JsonResponse
    {
        $user = Auth::user();

        $product = Product::query()->find($id);

        if (!$product) {
            return response()->json(['message' => 'Not found product'], 404);
        }

        $result = $this->productRepository->toggleFavorite($user, $product);

        return response()->json([
            'message' => 'Product favorite is toggled successfully',
            'isFavorite' => $result,
        ]);
    }
}

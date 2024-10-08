// src/features/products/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulents', image: 'aloe-vera.jpg' },
    { id: 2, name: 'Fiddle Leaf Fig', price: 20, category: 'Foliage', image: 'fiddle-leaf-fig.jpg' },
    { id: 3, name: 'Snake Plant', price: 15, category: 'Succulents', image: 'snake-plant.jpg' },
    { id: 4, name: 'Peace Lily', price: 12, category: 'Foliage', image: 'peace-lily.jpg' },
    { id: 5, name: 'Spider Plant', price: 8, category: 'Foliage', image: 'spider-plant.jpg' },
    { id: 6, name: 'Cactus', price: 5, category: 'Succulents', image: 'cactus.jpg' },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectAllProducts = (state) => state.products.items;

export default productsSlice.reducer;

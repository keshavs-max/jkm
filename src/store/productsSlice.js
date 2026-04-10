import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchJson = async (path) => {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }
  return response.json();
};

export const fetchSiteData = createAsyncThunk('data/fetchSiteData', async () => {
  const [site, home, products, categories, testimonials, about] = await Promise.all([
    fetchJson('/data/site.json'),
    fetchJson('/data/home.json'),
    fetchJson('/data/products.json'),
    fetchJson('/data/categories.json'),
    fetchJson('/data/testimonials.json'),
    fetchJson('/data/about.json'),
  ]);

  return { site, home, products, categories, testimonials, about };
});

const initialState = {
  status: 'idle',
  error: null,
  site: {},
  home: [],
  products: [],
  categories: [],
  testimonials: [],
  about: [],
  selectedCategory: 'all',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSiteData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSiteData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.site = action.payload.site;
        state.home = action.payload.home;
        state.products = action.payload.products;
        state.categories = action.payload.categories;
        state.testimonials = action.payload.testimonials;
        state.about = action.payload.about;
      })
      .addCase(fetchSiteData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCategory } = dataSlice.actions;

export default dataSlice.reducer;

import { db } from '@/config/firebase.config';
import { NewsArticle } from '@/types/index.types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore';

interface newsState {
    news: NewsArticle[] | null;
    loading: boolean;
    error: null | string
}

const initialState: newsState = {
    news: null,
    loading: false,
    error: null
}

export const getNews = createAsyncThunk('getFirebaseNews', async (_, { rejectWithValue }) => {
    try {
        const news = collection(db, 'news')
        const newsSnapshot = await getDocs(news);
        const newsList = newsSnapshot.docs.map((doc) => {
            const data = doc.data();

            // Timestamp → number
            const published_at = data.published_at?.toMillis?.() ?? null;
            const updated_at = data.updated_at?.toMillis?.() ?? null;
            const created_at = data.created_at?.toMillis?.() ?? null;

            // GeoPoint → plain object
            const location = data.location?.latitude != null
                ? { lat: data.location.latitude, lng: data.location.longitude }
                : null;

            return {
                id: doc.id,
                ...data,
                published_at,
                updated_at,
                created_at,
                location,
            } as NewsArticle;
        });
        return newsList;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const newsSlice = createSlice({
    name: 'newSlice',
    initialState,
    reducers: {
        decrement: (state) => {
            state.news = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getNews.pending, (state) => {
            state.loading = true;
        })
            .addCase(getNews.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(getNews.fulfilled, (state, action) => {
                state.news = action.payload
                state.loading = false;
            })
    }
})

export const { decrement } = newsSlice.actions;

export default newsSlice.reducer;
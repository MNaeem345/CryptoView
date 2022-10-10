import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'b2b5b07dafmsh64672be404be709p1a30e3jsn72904942d5e8',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails : builder.query({
            query:(currencyUuid) => createRequest(`/coin/${currencyUuid}`),
        }),
        getCryptoHistory : builder.query({
            query:({ currencyUuid, timePeriod}) => createRequest(`/coin/${currencyUuid}/history/${timePeriod}`),
        }),
        
    })
});

export const {useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi;
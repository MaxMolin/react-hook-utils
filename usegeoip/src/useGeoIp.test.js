import React from 'react';
import {act, renderHook } from '@testing-library/react-hooks';
import useGeoIp, { GEOIP_REQUEST_URL } from './useGeoIp';

const mockFetchPromise = { crap: 'yes' };
describe('useGeoIp', () => {

  let mockSuccessResponse = { countryCode: 'SE', city: 'Goteborg' };

  beforeEach(() => {
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve( { json: () => mockJsonPromise } );
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  });

  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  })

  it('should call fetch with correct url', async (next) => {
    await act( async () => {
      renderHook(useGeoIp);
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(GEOIP_REQUEST_URL);

    next();
  });


  it('should return initial response state as null (falsy)', async (next) => {
    const { result } = renderHook(() => useGeoIp());

    let response = 'string';
    await act( async () => {
      const { current } = result;
      response = current;
    });
    expect(response).toBeNull();

    next();
  });


  it('should return the correct properties', async (next) => {
    let response;

    await act( async () => {
      response = renderHook(() => useGeoIp()).result;
    });

    const { current } = response;

    expect(current).toEqual({
      countryCode: 'SE',
      city: 'Goteborg'
    });

    next();
  });

  it('should return error on endpoint failure', async (next) => {
    let response;
    const error = new Error('banana');
    global.fetch = jest.fn().mockRejectedValue( error );

    await act( async () => {
      response = renderHook(() => useGeoIp());
    });

    const { result } = response;

    expect(result.current.error).toEqual(error);

    next();
  });


});

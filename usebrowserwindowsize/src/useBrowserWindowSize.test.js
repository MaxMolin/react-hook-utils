import React from 'react';
import {fireEvent} from '@testing-library/react';
import {act, renderHook } from '@testing-library/react-hooks';
import useBrowserWindowSize from './useBrowserWindowSize';

const AssignWindowSize = (width, height) => {
  Object.assign(window, { innerWidth: width, innerHeight: height });
};

describe('useBrowserWindowSize', () => {

  beforeEach(() => {
    AssignWindowSize(200, 100);
  });

  it('should read initial innerWidth and innerHeight from window', () => {
    const { result } = renderHook(() => useBrowserWindowSize());
    const windowSize = result.current;
    const [width, height] = windowSize;

    expect(width).toBe(200);
    expect(height).toBe(100);
  });

  it('updates width and height on window resize', () => {
    const { result } = renderHook(() => useBrowserWindowSize());
    expect(result.current).toEqual([200,100]);

    act(() => {
      AssignWindowSize(1024,768); // assign new innerwidth and innerheight prior to triggering resize event
      fireEvent(window, new Event('resize')); // trigger resize event
    });

    expect(result.current).toEqual([1024,768]);
  })
});

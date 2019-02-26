import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

describe("App", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls fetch with successful status", () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
    const { container } = render(<App />);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://data.sfgov.org/resource/bbb8-hzi6.json"
    );
  });
});

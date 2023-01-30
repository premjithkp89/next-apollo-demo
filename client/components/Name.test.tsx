import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from '../pages/index'
import { MockedProvider } from "@apollo/client/testing";


const mocks = [];

describe("<Name>", () => {
  beforeEach(()=>{
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
        </MockedProvider>
    );

  })


  it("should render User list Grid", () => {
    expect(screen.getByTestId("user-grid")).toBeInTheDocument();
  });

  it("should render Load more button", () => {
    expect(screen.getByTestId("load-more")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import FavoriteList from ".";

describe("tests for certification list component", () => {
  it("should see the error message", async () => {
    render(<FavoriteList />);

    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });
});

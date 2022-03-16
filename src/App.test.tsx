import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

jest.mock("./api/certifications");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const setup = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

describe("test apps entry point", () => {
  it("should render without errors", async () => {
    setup();
    expect(screen.getByText("All Certifications")).toBeInTheDocument();
  });
});

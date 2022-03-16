import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import CertificateList from ".";
import * as CERTIFICATION_API from "../../api/certifications";
import { mockedCertificationList } from "../../fixtures/certifications";

jest.mock("../../api/certifications");

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
      <CertificateList />
    </QueryClientProvider>
  );

describe("tests for certification list component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should copy to clipboard and check toast message", async () => {
    jest.spyOn(navigator.clipboard, "writeText");
    setup();
    await waitFor(() => screen);
    userEvent.click(
      screen.getByText(mockedCertificationList.result.data[0].uniqueNumber)
    );
    expect(screen.getByText("Copied!")).toBeInTheDocument();
  });

  it("should add to localstorage", async () => {
    const spyToAdd = jest.spyOn(localStorage, "setItem");
    setup();

    await waitFor(() => screen);
    const favoriteButton = screen.getByTestId("add-favorite");

    userEvent.click(favoriteButton);
    expect(spyToAdd).toHaveBeenCalled();
  });

  it("should remove from localstorage", async () => {
    const spyToAdd = jest.spyOn(localStorage, "setItem");
    jest.spyOn(localStorage, "removeItem");
    setup();

    await waitFor(() => screen);
    const favoriteButton = screen.getByTestId("add-favorite");
    userEvent.click(favoriteButton);
    userEvent.click(favoriteButton);

    expect(spyToAdd).toHaveBeenCalled();
  });

  it("should try to call fetchCertificateList", async () => {
    const pageNumber = 1;
    const pageSize = 10;
    jest.spyOn(CERTIFICATION_API, "fetchCertificateList");

    setup();

    await waitFor(() => {
      expect(CERTIFICATION_API.fetchCertificateList).toHaveBeenCalledWith(
        pageNumber,
        pageSize
      );
    });
  });

  it("should show error message", async () => {
    jest
      .spyOn(CERTIFICATION_API, "fetchCertificateList")
      .mockImplementationOnce(() => Promise.reject("error"));

    setup();

    expect(await screen.findByTestId("error-message")).toBeInTheDocument();
  });
});

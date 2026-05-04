import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "@/App";

function renderWithRouter(initialEntry: string) {
  return render(
    <div style={{ width: "1440px", height: "1200px" }}>
      <MemoryRouter initialEntries={[initialEntry]}>
        <App />
      </MemoryRouter>
    </div>,
  );
}

describe("Velora app shell", () => {
  it("redirects the root route to the dashboard", () => {
    renderWithRouter("/");

    expect(
      screen.getByRole("heading", { name: /dashboard overview/i }),
    ).toBeInTheDocument();
  });

  it("renders inventory navigation and page content", () => {
    renderWithRouter("/inventory");

    expect(
      screen.getByRole("heading", { name: /inventory command center/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /inventory/i })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });
});

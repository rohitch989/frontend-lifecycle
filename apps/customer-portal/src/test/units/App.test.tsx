import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("App", () => {
  it("renders the button and shows the alert", async () => {
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<App />);

    const button = screen.getByRole("button", { name: /click me/i });
    await userEvent.click(button);

    expect(alertSpy).toHaveBeenCalledWith(expect.any(String));
    alertSpy.mockRestore();
  });
});
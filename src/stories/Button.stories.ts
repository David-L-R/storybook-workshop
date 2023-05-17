import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// const onClick = (e: any) => alert(e.target + " Clicked!");
const onClick = (e: any) =>
  alert(e.target.textContent.toLowerCase() + " clicked!");

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary Button",
    onClick,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    onClick,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
    onClick,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
    onClick,
  },
};

// export const backgroundColor: Story = {
//   args: {
//     backgroundColor: "red",
//     label: "Button",
//   },
// };

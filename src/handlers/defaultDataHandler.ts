const stall = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getHomeData = async (): Promise<unknown> => {
  await stall(1000); // Simulate a delay for demonstration purposes

  return {
    status: 200,
    common: {
      data: "common data",
    },
    widget2: {
      data: "widget one data",
    },
  };
};

export default getHomeData;

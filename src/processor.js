const processor = {
  types: {
    image: (item) => {
      const config = [];
      if (item.crop) {
        config.push(item.crop);
      }

      config.push("resize@width:1500;");

      const path = [
        "./assets/media",
        item.hash,
        config.join(""),
        `${item.filename}.jpg`,
      ].join("/");

      return {
        ...item,
        path,
      };
    },
  },
};
export default processor;

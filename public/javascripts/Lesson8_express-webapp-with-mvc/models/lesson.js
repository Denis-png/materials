const lessons = [
  {
    id: 1,
    name:
      "Introduction to JavaScript, Internet and WWW and Node.js, package managers and development environments",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce suscipit libero eget elit. Integer imperdiet lectus quis justo. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore mag.",
  },
  {
    id: 2,
    name: "JavaScript basics",
    description:
      "Etiam egestas wisi a erat. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Nulla est. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Aenean vel massa quis mauris vehicula lacinia. Aliquam erat volutpat. Mauris tincidunt sem sed arcu.",
  },
  {
    id: 3,
    name: "JavaScript DOM manipulation and events",
  },
  {
    id: 4,
    name: "JavaScript advanced",
    description:
      "Nam sed tellus id magna elementum tincidunt. Etiam commodo dui eget wisi. Maecenas aliquet accumsan leo. Integer malesuada. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Pellentesque pretium lectus id turpis. In convallis. Aenean placerat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.",
  },
];

module.exports = class Lesson {
  static select(id) {
    console.log(id);
    console.log("GOT HERE");
    return lessons.find((item) => item.id === parseInt(id));
  }
  static selectAll() {
    return lessons;
  }
};

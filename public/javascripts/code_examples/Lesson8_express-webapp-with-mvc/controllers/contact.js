exports.getContactPage = (req, res) => {
  res.render("contacts", {
    path: "/contacts",
  });
};

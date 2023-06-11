frappe.ui.form.on("YOUR_DOCTYPE_HERE", {
  refresh: function (frm) {
    render_badges(frm);
  },
});

function render_badges(frm) {
  // Assuming that the custom field name is 'badge'
  const badgeData = frm.doc.badge;

  if (!badgeData) return;

  // Parsing stored data
  const { label, status, color, style, icon } = JSON.parse(badgeData);

  // Create the badge URL (assuming you are using shields.io)
  const badgeURL = `https://img.shields.io/badge/${label}-${status}-${color}${
    style ? `?style=${style}` : ""
  }${icon ? `&logo=${icon}` : ""}`;

  // Create image element
  const badgeElement = `<img src="${badgeURL}" alt="badge" />`;

  // Append the image element to a desired container in the form.
  // Assuming you have a div with a class 'badge-container' where you want to display the badge
  $(frm.fields_dict.badge.wrapper).append(badgeElement);
}

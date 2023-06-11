frappe.ui.form.on("YOUR_DOCTYPE_HERE", {
  refresh: function (frm) {
    frm.fields_dict["YOUR_FIELD_NAME_HERE"].$wrapper.on("change", function () {
      convert_badges_to_images();
    });
    convert_badges_to_images();
  },
});

function convert_badges_to_images() {
  var markdownContent = $('[data-fieldname="YOUR_FIELD_NAME_HERE"]').val();
  if (!markdownContent) return;

  var badgeMarkdownRegex =
    /!\[.*\]\((https:\/\/(?:shields\.io|badgen\.net)\/[^)]+)\)/g;
  var htmlContent = markdownContent.replace(
    badgeMarkdownRegex,
    '<img src="$1" alt="badge" />'
  );

  $('[data-fieldname="YOUR_FIELD_NAME_HERE"]').html(htmlContent);
}

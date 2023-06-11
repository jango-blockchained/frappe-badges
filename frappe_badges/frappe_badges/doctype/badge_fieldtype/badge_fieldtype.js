frappe.ui.form.ControlBadge = frappe.ui.form.ControlData.extend({
  make_input: function () {
    // Create the input field
    this._super();
    this.$input = $(`<div>
            <input type="text" placeholder="Label" data-badge-label>
            <input type="text" placeholder="Status" data-badge-status>
            <input type="text" placeholder="Color" data-badge-color>
            <input type="text" placeholder="Style" data-badge-style>
            <input type="text" placeholder="Icon" data-badge-icon>
        </div>`).appendTo(this.input_area);
  },
  parse: function (value) {
    return JSON.parse(value);
  },
  format_for_input: function (value) {
    const badge = this.parse(value) || {};
    this.$input.find("[data-badge-label]").val(badge.label || "");
    this.$input.find("[data-badge-status]").val(badge.status || "");
    this.$input.find("[data-badge-color]").val(badge.color || "");
    this.$input.find("[data-badge-style]").val(badge.style || "");
    this.$input.find("[data-badge-icon]").val(badge.icon || "");
  },
  set_input: function (value) {
    this._super(value);
    this.format_for_input(value);
  },
  get_input: function () {
    return JSON.stringify({
      label: this.$input.find("[data-badge-label]").val(),
      status: this.$input.find("[data-badge-status]").val(),
      color: this.$input.find("[data-badge-color]").val(),
      style: this.$input.find("[data-badge-style]").val(),
      icon: this.$input.find("[data-badge-icon]").val(),
    });
  },
});

frappe.ui.form.on("Badge FieldType", {
  refresh: function (frm) {
    // You can put logic that should run when the form is loaded here
  },
  label: function (frm) {
    // Logic that runs when the 'label' field is modified
    validate_label(frm.doc.label);
  },
  validate: function (frm) {
    // Logic that runs when the document is being validated
    validate_label(frm.doc.label);
  },
});

function validate_label(label) {
  // For example, you might want to ensure that the label does not contain special characters
  const isValid = /^[a-zA-Z0-9-_ ]*$/.test(label);

  if (!isValid) {
    frappe.msgprint(
      __(
        "Label should only contain alphanumeric characters, hyphens, underscores or spaces."
      )
    );
    frappe.validated = false;
  }
}

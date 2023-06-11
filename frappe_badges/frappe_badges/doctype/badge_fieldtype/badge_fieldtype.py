from __future__ import unicode_literals
import frappe
from frappe.model import no_value_fields
from frappe import _


def set_fieldtype():
    # Define the new field type
    fieldtype = 'Badge'

    # Define the properties
    options = 'options'
    label = 'label'
    no_value_fields.append(fieldtype)

    # Add the field type
    if not frappe.db.exists('DocField', {'fieldtype': fieldtype}):
        frappe.get_doc({
            'doctype': 'DocField',
            'fieldtype': fieldtype,
            'options': options,
            'label': _(label)
        }).insert(ignore_permissions=True)

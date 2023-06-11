# Frappe Custom Badge FieldType

This repository contains a custom FieldType for Frappe applications that allows users to seamlessly integrate and display badges from shields.io or badgen.net, similar to how they are used on GitHub READMEs.

## Features

- Easy to integrate with existing Frappe applications.
- Customize badge label, status, color, style, and icon.
- Live rendering of badges within Frappe forms.
- Markdown support for badge customization.

## Installation

1. Clone this repository into your Frappe bench's app directory.

   ```sh
   git clone https://github.com/jango-blockchained/frappe-badges.git
   ```

2. Install the app onto your site.

   ```sh
   bench --site [site-name] install-app frappe-badges
   ```

3. Migrate the database to create the necessary fields and DocTypes.

   ```sh
   bench --site [site-name] migrate
   ```

4. Build the application so the changes take effect.

   ```sh
   bench build
   ```

## Usage

1. Go to the DocType where you want to render badges.
2. Add a new field and set the FieldType to "Badge".
3. Customize the badge properties like label, status, color, style, and icon.
4. Save the DocType and view the form to see the rendered badge.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

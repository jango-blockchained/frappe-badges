from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in frappe_badges/__init__.py
from frappe_badges import __version__ as version

setup(
	name="frappe_badges",
	version=version,
	description="Add support for badgen.net/shields.io badges as DocField.",
	author="jango_blockchained",
	author_email="info@cryptolinx.de",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)

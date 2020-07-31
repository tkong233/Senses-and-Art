from setuptools import setup

setup(
    name='flaskapi',
    packages=['app'],
    include_package_data=True,
    install_requires=[
        'flask',
    ],
)
# CryptInvest [React]
A React JS web app with user login &amp; registration functionalities that lists the top 10 cryptocurrencies

## Usage
- Clone this repository
- Run npm i
- Enjoy!

## Flaw(s):
- The user login and register functionalities require Google's reCAPTCHA test to be completed. The div containing the challenge has a data-callback of *"enableSubmitBtn"*, which allows users to submit their info for validation to the Express server. The reCAPTCHA div is bound to my website ([sdee3.com](https://sdee3.com)), meaning it will not work on any other domain name or the localhost server.

## Credits:
- [Uppy](https://github.com/transloadit/uppy) - a sleek, modular JavaScript file uploader that integrates seamlessly with any application. It’s fast, easy to use and lets you worry about more important problems than building a file uploader.

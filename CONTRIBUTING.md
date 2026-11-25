# Contributing

Contributions, bug reports, and accessibility/UI improvements are welcome.

## Local Setup

```bash
git clone https://github.com/faizi-cybsec/faizi-cybsec.github.io.git
cd faizi-cybsec.github.io
python -m http.server 8000
```

## Code Style & Testing

- Formatting follows `.prettierrc` (2-space indentation, double quotes).
- Run the automated site integrity & SEO test suite before opening a PR:

```bash
python -m unittest discover -s tests -v
```

## Pull Request Process

1. Ensure all tests in `tests/test_site.py` pass.
2. Verify responsive layout and contrast in desktop and mobile viewports.
3. Fill out `.github/pull_request_template.md` when submitting your PR.

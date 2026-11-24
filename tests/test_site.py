"""Automated integrity, link, and SEO validation tests for faizi-cybsec.github.io."""

import json
import re
import unittest
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXPECTED_PAGES = [
    "index.html",
    "about.html",
    "skills.html",
    "projects.html",
    "experience.html",
    "certifications.html",
    "contact.html",
]


class TestPortfolioSite(unittest.TestCase):
    def test_all_pages_exist_and_have_valid_internal_links(self) -> None:
        for page in EXPECTED_PAGES:
            path = ROOT / page
            self.assertTrue(path.exists(), f"Missing page: {page}")
            html_text = path.read_text(encoding="utf-8")

            self.assertIn('<link rel="icon"', html_text)
            self.assertIn('<link rel="canonical"', html_text)

            for ref in re.findall(r'(?:href|src)="([^"]+)"', html_text):
                if ref.startswith(("http://", "https://", "mailto:", "#")):
                    continue
                self.assertTrue(
                    (ROOT / ref).exists(),
                    f"Broken internal reference '{ref}' in {page}",
                )

    def test_json_ld_structured_data_is_valid(self) -> None:
        index_html = (ROOT / "index.html").read_text(encoding="utf-8")
        blocks = re.findall(
            r'<script type="application/ld\+json">(.*?)</script>', index_html, re.S
        )
        self.assertGreaterEqual(len(blocks), 1)
        for block in blocks:
            parsed = json.loads(block)
            self.assertIn("@context", parsed)

    def test_seo_and_ai_indexing_files_present(self) -> None:
        self.assertTrue((ROOT / "favicon.svg").exists())
        self.assertTrue((ROOT / "llms.txt").exists())

        robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
        self.assertIn("Sitemap: https://faizi-cybsec.github.io/sitemap.xml", robots)

        tree = ET.parse(ROOT / "sitemap.xml")
        urls = [
            elem.text
            for elem in tree.getroot().findall(
                "{http://www.sitemaps.org/schemas/sitemap/0.9}url/"
                "{http://www.sitemaps.org/schemas/sitemap/0.9}loc"
            )
        ]
        self.assertEqual(len(urls), len(EXPECTED_PAGES))


if __name__ == "__main__":
    unittest.main()

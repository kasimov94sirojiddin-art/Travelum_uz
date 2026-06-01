How to change images
====================

This site uses three image slots:

1. hero.png
   Main large image at the top of the page.

2. samarkand.jpg
   Image for the Samarkand tour card.

3. amirsay.webp
   Image for the Amirsay, Chimgan, Charvak tour card.

Recommended replacement
-----------------------

You can replace these files with your own photos.

Best option:
- Save your photos in this same assets folder.
- Use simple English file names without spaces, for example:
  hero.jpg
  samarkand.jpg
  amirsay.jpg

Then update the file names:

In index.html:
  assets/hero.png
  change to:
  assets/hero.jpg

In styles.css:
  assets/samarkand.jpg
  change to:
  assets/samarkand.jpg

  assets/amirsay.webp
  change to:
  assets/amirsay.jpg

Important for GitHub
--------------------

Keep all images inside the project folder, preferably inside assets.
Do not use Windows paths like C:\Users\... in the website code.

Good:
  assets/hero.jpg

Bad:
  C:\Users\Acer\Pictures\hero.jpg
